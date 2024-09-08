let btn= document.querySelector('#menu');
let lrn=document.querySelector('#navbar_mob');
lrn.style.display='none';
let display=0;
function show(){
    if(display==0){
        lrn.style.display='block';
        display=1;
        document.querySelector('#menu').innerHTML="X";
    }
    else{
        lrn.style.display='none';
        display=0;
        document.querySelector('#menu').innerHTML='Menu';
    }
    
}

// Registration form validation code.
function validation(){
    let userName= document.getElementById('username').value;
    let val=userName.length;
    let email=document.getElementById('email').value;
    let password= document.getElementById('pass').value;
    let confirmPassword= document.getElementById('cpass').value;
    
    if((userName=="")&&(val<3)){
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
    if((password!=confirmPassword)&&(confirmPassword.length<=8)){
        document.querySelector('#cpass').style.backgroundColor='red';
        document.querySelector('#cpass').style.color='white';
    }
    else{
        document.querySelector('#cpass').style.backgroundColor='green';
        document.querySelector('#cpass').style.color='white';
    }
}


