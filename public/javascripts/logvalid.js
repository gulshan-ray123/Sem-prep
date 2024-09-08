
let signup2= document.getElementById('Register');
let signin2= document.getElementById('login')
signup2.style.display='none';

function signup(){
  localStorage.setItem('signedIn', true);
  signin2.style.display='none';
  signup2.style.display='block'
}
 function signin(){
  signin2.style.display='block';
  signup2.style.display='none';
 }
 
 function validation(){
  let userName= document.getElementById('username').value;
  let val=userName.length;
  let email=document.getElementById('email').value;
  let password= document.getElementById('pass').value;
  let confirmPassword= document.getElementById('cpass').value;
  
  if((userName=="")||(val<3)){
      document.querySelector('#username').style.backgroundColor='red';
      document.querySelector('#username').style.color='white';
  }
  else{
      document.querySelector('#username').style.backgroundColor='green';
      document.querySelector('#username').style.color='white';
  }
  if((Number(email.includes('@gmail.com')==0))&&(email=="")){
      document.querySelector('#email').style.backgroundColor='red';
      document.querySelector('#email').style.color='white';
  }
  else{
      document.querySelector('#email').style.backgroundColor='green';
      document.querySelector('#email').style.color='white';
  }
  if((password.length<=8)){
      document.querySelector('#pass').style.backgroundColor='red';
      document.querySelector('#pass').style.color='white';
  }
  else{
      document.querySelector('#pass').style.backgroundColor='green';
      document.querySelector('#pass').style.color='white';
  }
  if((password!=confirmPassword)||(confirmPassword.length<=8)){
      document.querySelector('#cpass').style.backgroundColor='red';
      document.querySelector('#cpass').style.color='white';
  }
  else{
      document.querySelector('#cpass').style.backgroundColor='green';
      document.querySelector('#cpass').style.color='white';
  }
}