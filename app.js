const burger = document.querySelector('#burger');
const list = document.querySelector('#list');
const close = document.querySelector('#close-btn');
let mediaLink = document.querySelectorAll('.link-media');

burger.addEventListener('click', function() {
  list.classList.add('_active');
});

if(mediaLink) {
  for (let i = 0; i < mediaLink.length; i++) {
    const element = mediaLink[i];
    element.addEventListener('click', function() {
      list.classList.remove('_active');
    })
  }
}

if(close) {
  close.addEventListener('click', function() {
    list.classList.remove('_active');
  })
};