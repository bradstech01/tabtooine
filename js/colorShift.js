let sky = document.getElementById('sky');


const tintSky = () => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const minutesSinceMidnight = hours * 60 + minutes;
    if ( 300 <= minutesSinceMidnight && minutesSinceMidnight <= 480 ) {
        let offset = minutesSinceMidnight - 300;

        var red = 46+(164*offset/180)
        var green = 44+(136*offset/180)
        var blue = 104+(36*offset/180)
    }
    else if (1020 <= minutesSinceMidnight && minutesSinceMidnight <= 1200 ) {
        let offset = minutesSinceMidnight - 1020;
        var red = 210-(164*offset/180);
        var green = 180-(136*offset/180);
        var blue = 140-(36*offset/180);
    }
    else if (481 <= minutesSinceMidnight && minutesSinceMidnight <= 1019) {
        var red = 240;
        var green = 180;
        var blue = 140;
    }
    else if (minutesSinceMidnight <= 299 || minutesSinceMidnight >= 1201) {
        var red = 46;
        var green = 44;
        var blue = 104;
    }
    console.log(minutesSinceMidnight)
    console.log('red'+red)
    console.log('green'+green)
    console.log('blue'+blue)
    sky.setAttribute('style','background-color: rgb('+red+','+green+','+blue+');');
}

tintSky();

setTimeout(tintSky,60000);