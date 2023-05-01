document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn-up');

  function scroll() {
    
    function show() {
      btn.classList.remove('btn-up_hide');
    }

    function hide() {
      btn.classList.add('btn-up_hide')
    }

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? show() : hide();
    });

    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  scroll();
})
