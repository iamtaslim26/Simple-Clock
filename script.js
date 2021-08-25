setInterval(() => {

    d = new Date();
    hHours = d.getHours();
    mMinutes = d.getMinutes();
    sSeconds = d.getSeconds();

    hRotation = (30 * hHours + mMinutes / 2);
    mRotation = 6 * mMinutes;
    sRotation = 6 * sSeconds;

    // var hour = document.querySelector("#hour");
    // var minute = document.querySelector("#minute");
    // var second = document.querySelector("#second");

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

    console.log(hour.style.transform);

}, 1000);