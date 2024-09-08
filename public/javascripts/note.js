
// let sub=document.querySelector('#subject').value;
// console.log(sub);
 let chem= document.querySelector('#chem').innerHTML;
 let mech= document.querySelector('#mech').innerHTML;
 let maths= document.querySelector('#mth').innerHTML;
 let electr= document.querySelector('#elec').innerHTML;
 let softSkill= document.querySelector('#SoftSkill').innerHTML;
 let Physics= document.querySelector('#Physics').innerHTML;
 let pps= document.querySelector('#pps').innerHTML;
 let maths2= document.querySelector('#mt2').innerHTML;
 let elte= document.querySelector('#elet').innerHTML;
 let evs= document.querySelector('#evs').innerHTML;
function subject(){
    let sub=document.querySelector('#subject').value;
    console.log(sub);
 if(sub=="Chemistry"){
    document.querySelector("#mech").innerHTML=chem;
 }
else if(sub=="Mechanics"){
    document.querySelector("#mech").innerHTML=mech;
 }
else  if(sub=="softSkill"){
    document.querySelector("#mech").innerHTML=softSkill;
 }
 else if(sub=="m1"){
    document.querySelector("#mech").innerHTML=maths;
 }
 else if(sub=="Phy"){
    document.querySelector("#mech").innerHTML=Physics;
 }
else  if(sub=="evs"){
    document.querySelector("#mech").innerHTML=evs;
 }
 else if(sub=="m2"){
    document.querySelector("#mech").innerHTML=maths2;
 }
 else if(sub=="pps"){
    document.querySelector("#mech").innerHTML=pps;
 }
 else if(sub=="Electrical"){
    document.querySelector("#mech").innerHTML=elte;
 }
 else{
    document.querySelector("#mech").innerHTML=electr;
 }
}
let year1= document.querySelector('#first');
year1.style.display='block';
let year2= document.querySelector('#secound');
year2.style.display='none';
// let yr= document.querySelector('#year_std').value;
// console.log(yr);
function year(){
let yr= document.querySelector('#year_std').value;
console.log(yr);
 if(yr=="2nd"){
    year1.style.display='none';
    year2.style.display='block';
    yr.value='2nd';
 }
}

function year_sec(){
    let yr_sec= document.querySelector('#year_std_sec').value;
    console.log(yr_sec);
     if(yr_sec=="sec_1st"){
        year1.style.display='block';
        year2.style.display='none';
     }
    }

    let electronic_sec= document.querySelector('#electr_sec').innerHTML;
    let math4= document.querySelector('#mth4').innerHTML;
    let tech_comm= document.querySelector('#technicalcomm').innerHTML;
    let UHV= document.querySelector('#uhv').innerHTML;
    let CompOar= document.querySelector('#coa').innerHTML;
    let OS= document.querySelector('#os').innerHTML;
    let DS= document.querySelector('#ds').innerHTML;
    let CS= document.querySelector('#cs').innerHTML;
    let TAFL= document.querySelector('#tafl').innerHTML;
    let python= document.querySelector('#pyt').innerHTML;
    let OOPS= document.querySelector('#oopsj').innerHTML;
    let DSTL= document.querySelector('#dstl').innerHTML;
   
    function subject_sec(){
      let sub=document.querySelector('#subject_sec').value;
      console.log(sub);
   if(sub=="tecm"){
      document.querySelector("#electr_sec").innerHTML=tech_comm;
   }
  else if(sub=="ooj"){
      document.querySelector("#electr_sec").innerHTML=OOPS;
   }
  else  if(sub=="cs"){
      document.querySelector("#electr_sec").innerHTML=CS;
   }
   else if(sub=="os"){
      document.querySelector("#electr_sec").innerHTML=OS;
   }
   else if(sub=="tafl"){
      document.querySelector("#electr_sec").innerHTML=TAFL;
   }
  else  if(sub=="uhv"){
      document.querySelector("#electr_sec").innerHTML=UHV;
   }
   else if(sub=="m4"){
      document.querySelector("#electr_sec").innerHTML=math4;
   }
   else if(sub=="pyt"){
      document.querySelector("#electr_sec").innerHTML=python;
   }
   else if(sub=="ds"){
      document.querySelector("#electr_sec").innerHTML=DS;
   }
   else if(sub=="coa"){
      document.querySelector("#electr_sec").innerHTML=CompOar;
   }
   else if(sub=="dstl"){
      document.querySelector("#electr_sec").innerHTML=DSTL;
   }

   else{
      document.querySelector("#electr_sec").innerHTML=electronic_sec;
   }
  }