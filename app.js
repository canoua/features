document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');
  const closeBtn = document.querySelector('.close');
  const html = document.querySelector('html');

  btn.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('popup_active');
    body.style.overflow = 'hidden';
    html.style.paddingRight = '17px';
  })

  if(close) {
    closeBtn.addEventListener('click', function() {
      popup.classList.remove('popup_active');
      body.style.overflow = 'visible';
      html.style.paddingRight = '0';
    })
  }

  if(popup) {
    document.addEventListener('click', function(event) {
      const target = event.target;
      if(target.closest('.popup-bg')&&!target.closest('.popup-content')){
        popup.classList.remove('popup_active');
      }
    })
    document.addEventListener('keydown', function(event) {
      if(event.code == 'Escape'){
        popup.classList.remove('popup_active');
      }
    }) 
  }
})