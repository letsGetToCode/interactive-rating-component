const btns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');
const startBox = document.querySelector('.start');
const thankYouBox = document.querySelector('.thank-you');
const thankYouBtn = document.querySelector('h2');
const wrapper = document.querySelector('.wrapper');
const ratingResult = document.querySelector('.rating-result');

btns.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    btns.forEach((otherBtn) => {
      otherBtn.classList.remove('active');
    });

    btn.classList.add('active');

    let userRating = btn.value;

    ratingResult.textContent = userRating;
  })
})

submitBtn.addEventListener('click', ()=>{
  startBox.style = 'display: none';
  thankYouBox.style = 'display:flex;'
})

wrapper.addEventListener('click', ()=>{
  window.location.reload();  
})

wrapper.addEventListener('mouseover',()=>{
  thankYouBtn.textContent = 'Return';
})

wrapper.addEventListener('mouseleave', ()=>{
  thankYouBtn.textContent = 'Thank you!'
})

