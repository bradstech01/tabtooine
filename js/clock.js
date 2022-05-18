function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    document.getElementById('clock').textContent =  h + ":" + m + ":" + s;
    setTimeout(startTime,1000);
}

startTime();