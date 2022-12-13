const countdown = () => {
    const countDate = new Date('Dec 24, 2022 10:50:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the time works?
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    //Calculate each field. Omit decimals as well
    if(gap>0){
    const textDay = Math.floor(gap/day);
    //console.log(textDay);
    const textHour = Math.floor((gap%day)/hour);
    const textMinute = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.seconds').innerText = textSecond;
    }
    
    else{
        const textDay = '00';
        //console.log(textDay);
        const textHour = '00';
        const textMinute = '00';
        const textSecond = '00';
        document.querySelector('.day').innerText = textDay;
        document.querySelector('.hour').innerText = textHour;
        document.querySelector('.minute').innerText = textMinute;
        document.querySelector('.seconds').innerText = textSecond;
        document.querySelector('.message1').innerText = "I am here babyyyyy 😚";
    }
 
};


setInterval(countdown, 1000); //takes function and a timer


