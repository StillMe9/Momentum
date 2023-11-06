const clock = document.querySelector("h2#clock");
const today = document.querySelector("h2#today")

function getClock() {
    const date = new Date();
    //String에서만 padStart나 padEnd를 사용할 수 있기 때문에 String으로 변환함
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

function getToday() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const todayDate = String(date.getDate()).padStart(2, "0");
    today.innerText = `${year}년 ${month}월 ${todayDate}일`
}

getClock();
setInterval(getClock, 1000);

getToday();
setInterval(getToday, 1000);