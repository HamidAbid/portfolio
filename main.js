const text = document.querySelector('.sec-text');

  const textLoad=()=>{
    setTimeout(() => {
        text.textContent = 'FreeLancer';
    },100)

    setTimeout(() => {
        text.textContent = 'WebDeveloper';
    }, 4000)
    setTimeout(() => {
        text.textContent = 'MernDeveloper';
    }, 8000)
  }
    textLoad();
  setInterval(textLoad, 12000);

const brand=document.querySelector('#brand');
brand.addEventListener('click',()=>{
    location.reload();
})
