function showSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function generateRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const images = [
  './public/Cool_Wallpaper1.jpg',
  './public/Cool_Wallpaper2.jpg',
  './public/Cool_Wallpaper3.jpg',
  './public/Cool_Wallpaper4.jpg'
];

const randomIndex = generateRandomInt(images.length);
const selectedBackground = images[randomIndex];

document.body.style.backgroundImage = `url('${selectedBackground}')`;
