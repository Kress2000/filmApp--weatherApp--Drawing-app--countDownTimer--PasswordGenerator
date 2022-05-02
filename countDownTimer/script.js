
const dayEl = document.getElementById('day');
const hourEl= document.getElementById('hour');
const minutEl= document.getElementById('minute');
const secondEl= document.getElementById('second');


const wishedDay = '02 Bebruary 2023';

function countDownTimer(){

    const wishedDate =  new Date(wishedDay);
    const currentDate = new Date();
    const totalSeconds = (wishedDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds )% 60;

       dayEl.innerHTML = days;
        hourEl.innerHTML = hours;

        if (seconds <10)   
                {secondEl.innerHTML = "0" + seconds;} 
        else if(minutes < 10)
                {  minutEl.innerHTML = "0" + minutes;}
        else{
            
            minutEl.innerHTML = minutes;
            secondEl.innerHTML = seconds;
        }
   
}


setInterval(countDownTimer, 1000);


