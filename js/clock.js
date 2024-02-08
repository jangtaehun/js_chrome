const clock = document.getElementById("clock");

//호출 스케줄링 = 일정 시간이 지난 후에 함수를 예약 실행하게 해준다.
//setInterval(함수 이름, 호출 시간)
//setTimeout(함수 이름, 호출 시간)

//new Date() -> 오늘 날짜를 가져온다.
//padStart(자리수, "채울 단어") = 앞에
//padEnd(자리수, "채울 단어") = 뒤에
function getClock() {
    const date = new Date(); //생성자 함수
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds());
    //clock.innerText = new Date().toLocaleTimeString();
    clock.innerText = `${hours}:${minutes}:${seconds.padStart(2, "0")}`;
}
getClock();
setInterval(getClock, 1000); //ms 단위
