document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');
  const closeBtn = document.querySelector('.close');
  const html = document.querySelector('html');
  const popupContent = document.querySelector('.popup-content');

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
    // function eventClose(event) {
    //   if(event.key == 27 ){ // код клавиши Escape, но можно использовать e.key
    //     // popup.classList.remove('popup_active');
    //     console.log('escape');
    //   }
    // }
    // eventClose()
  }
})