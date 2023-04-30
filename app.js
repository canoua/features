const input = document.querySelectorAll('.input');

input.forEach(function(item) {  
  item.addEventListener('focus', function() {
    let id = item.id;
    let label = document.querySelector(`[for="${id}"]`);
    label.classList.add('label-top');
  })

  item.addEventListener('focusout', function() {
    let id = item.id;
    let label = document.querySelector(`[for="${id}"]`);
    if(item.value == '') {
      label.classList.remove('label-top');
    }
  })
})