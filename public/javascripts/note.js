
let sub=document.querySelector('#subject').value;
console.log(sub);
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

let dbms= document.querySelector('#dbms').innerHTML;
 let daa= document.querySelector('#DAA').innerHTML;
 let compiler= document.querySelector('#compiler').innerHTML;
 let web= document.querySelector('#web').innerHTML;
 let dataanaytics= document.querySelector('#dataanlaytics').innerHTML;
 let CGI= document.querySelector('#cgi').innerHTML;
 let Machinelr= document.querySelector('#ML').innerHTML;
 let DWDM= document.querySelector('#DWDM').innerHTML;
 let APOSC= document.querySelector('#appofsoft').innerHTML;
 let Softengg= document.querySelector('#Softwareengg').innerHTML;
 let CompterNet= document.querySelector('#computernetworks').innerHTML;
 let BigData= document.querySelector('#bigdata').innerHTML;
 let ARVR= document.querySelector('#ARVR').innerHTML;
 let Blockchain= document.querySelector('#blockchaindg').innerHTML;
 let Datacomp= document.querySelector('#Datacom').innerHTML;
 let OpenEle= document.querySelector('#OEI').innerHTML;
 let Staticalcop= document.querySelector('#stacomp').innerHTML;
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
let year3=document.querySelector('#third');
year2.style.display='none';
year3.style.display='none';
// let yr= document.querySelector('#year_std').value;
// console.log(yr);
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
 else if(yr=="3rd"){
   year1.style.display='none';
    year2.style.display='none';
    year1.style.display='none';
    year3.style.display='block';
    yr.value='3rd';
 }
}

function year_sec(){
    let yr_sec= document.querySelector('#year_std_sec').value;
    console.log(yr_sec);
     if(yr_sec=="sec_1st"){
        year1.style.display='block';
        year2.style.display='none';
        yr.sec='3rd'
     }
     if(yr_sec=="sec_3rd"){
      year1.style.display='none';
        year2.style.display='none';
        year3.style.display='block';
        
     }
    }

    function year_thrd(){
      let yr_trd=document.querySelector('#year_std_trd').value;
      console.log(yr_trd);

      if(yr_trd=="sec_2nd"){
         year3.style.display='none';
         year2.style.display='block';
         yr.value='sec_2nd';
      }
      else if(yr_trd="sec_1st"){
         year3.style.display='none';
         year2.style.display='none';
         year1.style.display='block';
         yr.value='1st';
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


function subject_trd(){
   let sub=document.querySelector('#subject_trd').value;
   console.log(sub);
if(sub=="wt"){
   document.querySelector("#dbms").innerHTML=web;
}
else if(sub=="daa"){
   document.querySelector("#dbms").innerHTML=daa;
}
else  if(sub=="oe"){
   document.querySelector("#dbms").innerHTML=OpenEle;
}
else if(sub=="dc"){
   document.querySelector("#dbms").innerHTML=Datacomp;
}
else if(sub=="ba"){
   document.querySelector("#dbms").innerHTML=Blockchain;
}
else  if(sub=="ar"){
   document.querySelector("#dbms").innerHTML=ARVR;
}
else if(sub=="bd"){
   document.querySelector("#dbms").innerHTML=BigData;
}
else if(sub=="cn"){
   document.querySelector("#dbms").innerHTML=CompterNet;
}
else if(sub=="cd"){
   document.querySelector("#dbms").innerHTML=compiler;
}
else if(sub=="se"){
   document.querySelector("#dbms").innerHTML=Softengg;
}
else if(sub=="dw"){
   document.querySelector("#dbms").innerHTML=DWDM;
}
else if(sub=="sc"){
   document.querySelector("#dbms").innerHTML=Staticalcop;
}
else if(sub=="ml"){
   document.querySelector("#dbms").innerHTML=Machinelr;
}
else if(sub=="cg"){
   document.querySelector("#dbms").innerHTML=CGI;
}
else if(sub=="ds"){
   document.querySelector("#dbms").innerHTML=dataanaytics;
}
else{
   document.querySelector("#dbms").innerHTML=electronic_sec;
}
}