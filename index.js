// the inbuilt method new Date() provides all the data that is require 
// and the data should be stored in a variable so we can access it seperately by day date and all those things 

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";
    if(hours===0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        period="PM";
    }
    let data  = document.getElementById("clock");
    data.innerHTML = `${hours} : ${minutes} : ${seconds} ${period}`; 
    
    setTimeout(clock,1000);
}
clock();
