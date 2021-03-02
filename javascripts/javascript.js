const menuList = document.querySelector('.nav-list');
const closebtn = document.querySelector('.closebtn');
const openbtn = document.querySelector('.container-nav-mobile');
const mainContents = document.querySelectorAll('.push-content');

function openNav() {
  closebtn.style.display = 'flex';
  openbtn.style.display = 'none';
  menuList.style.width = "40%";
  menuList.style.display = "flex";
  mainContents.forEach(main => {
    main.style.marginRight = '40%';
  });
}

function closeNav() {
  closebtn.style.display = 'none';
  openbtn.style.display = 'flex';
  menuList.style.width = '0';
  menuList.style.display = 'none';
  mainContents.forEach(main => {
    main.style.marginRight = '0';
  });
}

function showNavWeb() {
    if(window.innerWidth > 760) {
    openbtn.style.display = 'none';
    menuList.style.display = 'flex';
    menuList.style.width = 'inherit';
  } else {
    openbtn.style.display = 'flex';
    menuList.style.display = 'none';
  }
};

window.addEventListener('resize', showNavWeb);