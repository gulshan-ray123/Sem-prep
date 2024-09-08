let btn= document.querySelector('#menu');
let lrn=document.querySelector('#dtl');
lrn.style.display='none';
let display=0;
function show(){
    if(display==0){
        lrn.style.display='block';
        display=1;
        document.querySelector('#menu').innerHTML="X";
        document.querySelector("#pinfo").style.display="none";
    }
    else{
        lrn.style.display='none';
        display=0;
        document.querySelector('#menu').innerHTML='Menu';
        document.querySelector("#pinfo").style.display="block";
    }
    
}