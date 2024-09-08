let third= document.querySelector('#secound_yr').innerHTML;
let first=document.querySelector('#first_yr').innerHTML;

function move(){
   let val= document.querySelector('#year_std').value;
   console.log(val);
   if(val=="3rd"|| val=="4th"){
    document.querySelector('#first_yr').innerHTML=third;
   }
   else{
    document.querySelector('#first_yr').innerHTML=first;
   }
}