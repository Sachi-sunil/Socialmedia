let swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 5,
})


//Window Scroll
window.addEventListener('scroll', () => {
  document.querySelector('.profile-popup').style.display = 'none'
  document.querySelector('.add-post-popup').style.display = 'none'
  document.querySelector('.theme-customize').style.display = 'none'
  document.querySelector('.notification-box').style.display = 'none'
})


//Start Aside
const removeActive = () => {
  menuItem.forEach(item => {
    item.classList.remove('active')
  })
}

let menuItem = document.querySelectorAll('.menu-item');
menuItem.forEach(item => {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');
    document.querySelector('.notification-box').style.display = 'none'
  })
})

document.querySelector('#Notify-box').addEventListener('click', () => {
  document.querySelector('.notification-box').style.display = 'block'
  document.querySelector('#ntCounter1').style.display = 'none'
})

//Message
document.querySelector('#messageMenu').addEventListener('click', () => {
  document.querySelector('#notfyCounter2').style.display = 'none';
  document.querySelector('.messages').classList.add('boxshadow1');
  setTimeout(() => {
    document.querySelector('.messages').classList.remove('boxshadow1')
  }, 4000);

})

//Friend Request
let accept = document.querySelectorAll('#accept')
let dlete = document.querySelectorAll('#delete')
let action = document.querySelectorAll('.action')
let request = document.querySelectorAll('.request')

accept.forEach(accept => {
  accept.addEventListener('click', () => {
    accept.parentElement.style.display = 'none'
    accept.parentElement.parentElement.querySelector('.alert').style.display = 'block'
  })
})
dlete.forEach(deletee => {
  deletee.addEventListener('click', () => {
    deletee.parentElement.parentElement.style.display = 'none'
  })
})


//start profile popup

document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
  AllProfile.addEventListener('click', () => {
    document.querySelector('.profile-popup').style.display = 'flex'
  })
});

document.querySelectorAll('.close').forEach(AllCloser => {
  AllCloser.addEventListener('click', () => {
    document.querySelector('.profile-popup').style.display = 'none'
    document.querySelector('.add-post-popup').style.display = 'none'
    document.querySelector('.theme-customize').style.display = 'none'
  })
})

document.querySelector('#profile-upload').addEventListener('change', () => {
  const file = document.querySelector('#profile-upload').files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    document.querySelectorAll('#my-profile-picture img').forEach(img => {
      img.src = fileURL;
    });
  } else {
    console.error('No file selected');
  }
});

//start add post popup
document.querySelector('#create-lg').addEventListener('click', () => {
  document.querySelector('.add-post-popup').style.display = 'flex'
});

document.querySelector('#feed-pic-upload').addEventListener('change', () => {
  document.querySelector('#postIMg').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0]);
  document.querySelector('.feed-upload-button').textContent = "Pick a Different Photo"
})

//Add Story
document.querySelector('#add-story').addEventListener('change', () => {
  document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').files[0])
  document.querySelector('.add-story').style.display = 'none'
})

//mini button input
document.querySelector('.mini-button').addEventListener('click', () => {
  document.querySelector('.input-post').classList.toggle('boxshadow1')
  setTimeout(() => {
    document.querySelector('.input-post').classList.remove('boxshadow1')
  }, 3000);
})

document.querySelector('.mini-button').addEventListener('dblclick', () => {
  document.querySelector('.add-post-popup').style.display = 'flex'
})

//liked btn

document.querySelectorAll('.action-button span:first-child i').forEach(liked => {
  liked.addEventListener('click', () => {
    liked.classList.toggle('liked')
  })
})


//theme
document.querySelector('#theme').addEventListener('click', () => {
  document.querySelector('.theme-customize').style.display = 'flex'
})

//fontsize
let fontsize = document.querySelectorAll('.choose-size span');

const removeSelectorActive = () => {
  fontsize.forEach(size => {
    size.classList.remove('active'); 
  });
};

fontsize.forEach(size => {
  size.addEventListener('click', () => {
    let fontSize;
    removeSelectorActive(); 
    size.classList.add('active');

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
    }

    document.querySelector('html').style.fontSize = fontSize;
  });
});

let colorpallete = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');

const removeActiveColor = () => {
  colorpallete.forEach(color => {
    color.classList.remove('active');
  });
};

colorpallete.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;  // Define primaryHue here
    
    // Check which color was clicked and set the primaryHue value accordingly
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }

    // Set the CSS custom property --primary-color-hue
    root.style.setProperty('--primary-color-hue', primaryHue);

    // Optional: Remove 'active' class from all colors and add to the clicked one
    removeActiveColor();
    color.classList.add('active');
  });
});

let bg1 = document.querySelector('.bg1');
let bg2 = document.querySelector('.bg2');

let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;

const changBg = () => {
  root.style.setProperty('--color-dark-light-theme', darkColorLightTheme);
  root.style.setProperty('--color-light-light-theme', lightColorLightTheme);
  root.style.setProperty('--color-white-light-theme', whiteColorLightTheme);
};

bg2.addEventListener('click', () => {
  lightColorLightTheme = '15%';
  whiteColorLightTheme = '5%';
  darkColorLightTheme = '90%';

  bg2.classList.add('active');
  bg1.classList.remove('active');

  changBg();
});

bg1.addEventListener('click', () => {
  bg1.classList.add('active');
  bg2.classList.remove('active');

  window.location.reload();
});


let menuItemImg = document.querySelectorAll('.menu-item span img');
const bgicon = () =>{
  menuItemImg.forEach(icon=>{
    icon.classList.add('icon-bg');
  })
}