
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



/* form validation*/ 
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
 var nameError= document.getElementById('nameError');
 var emailError= document.getElementById('emailError');
 var messageError= document.getElementById('messageError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
if (name.value == '' || !regex.test(email.value) || email.value == '' || message.value == '') {
  
  
    (name.value =='')? nameError.innerText='This Field is Required': nameError.innerText='';
    (message.value =='')? messageError.innerText='This Field is Required':messageError.innerText='';
    if (email.value == '')  {
      emailError.innerText='This Field is Required'
    }
    else if (!regex.test(email.value)) {
      emailError.innerText='Enter valid Email ID'
    }  
    else{
      emailError.innerText=''
    }
   
}
else{
 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "digicore@demo.com",
    Password : "1DDE1DCBBAE04DC37822B18AF26B27F6C3E2",
    To : 'mhamidabid301@gmail.com',
    From : "mhamidabid301@gmail.com",
    Subject : 'Portfolio audience',
    Body : `Name : ${name.value} , Email : ${email.value} , Message : ${message.value}`
}).then(
  (message)=>{ (message = 'Ok')?alert('YOUR MAIL WAS SENT'):alert('SOME ERROR OCCURS TRY AGAIN AFTER SOME TIME')
  }
 
 
);

  name.value='',email.value='',message.value='';
  nameError.innerText='';
  messageError.innerText='';
  emailError.innerText=''; 
}

   

})






