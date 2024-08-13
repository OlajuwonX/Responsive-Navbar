function showSideBar() {
  const sidebar = document.querySelector('.sidebar');
  const hideMenuBtn = document.getElementById('hide');
  sidebar.style.display = 'flex';
  hideMenuBtn.style.display = 'none';
}

function hideSideBar() {
  const sidebar = document.querySelector('.sidebar');
  const hideMenuBtn = document.getElementById('hide');
  sidebar.style.display = 'none';
  hideMenuBtn.style.display = 'flex';
}

function generateRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const images = [
  './Public/Cool_Wallpaper1.jpg',
  './Public/Cool_Wallpaper2.jpg',
  './Public/Cool_Wallpaper3.jpg',
  './Public/Cool_Wallpaper4.jpg'
];

const randomIndex = generateRandomInt(images.length);
const selectedBackground = images[randomIndex];

document.body.style.backgroundImage = `url('${selectedBackground}')`;
