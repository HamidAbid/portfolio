
var typed= new Typed(".sec-text",{
    strings:['Web Developer','Front End Developer'],
    typeSpeed:150,
    backSpeed:150,
    backDelay:500,
    loop:true
});


const brand=document.querySelector('#brand');
brand.addEventListener('click',()=>{
    location.reload();
})
