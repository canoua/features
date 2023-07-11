let sources = [
  'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg', 
  'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg',
  'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
];

let currentIndex = 0;
let slide = document.querySelector('.slide__image');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.pagination__dot');

arrowLeft.addEventListener('click', function() {
  if(currentIndex!=0) {
    currentIndex = --currentIndex;
    slide.src = sources[currentIndex];
  }
})

arrowRight.addEventListener('click', function() {
  if(currentIndex != sources.length-1) {
    currentIndex = ++currentIndex;
    slide.src = sources[currentIndex];
  }
})

