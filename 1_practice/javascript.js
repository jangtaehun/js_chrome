/*
document.title = "Hello! From JS!";

const title = document.getElementById("title");
console.log(title);

title.innerText = "Got you!";
console.log(title.id);
console.log(title.className); // 클래스명을 추가하면 기존 클래스 삭제
console.log(title.classList); //클래스를 array형식으로 출력, 클래스명 추가하면 기존 클래스 유지
// classList.container() 존재하는지 확인
// classList.add() 추가
// classList.remove() 삭제
// classList.toggle() 있으면 삭제 없으면 추가
*/

/*
const hello = document.getElementsByClassName("hello");
console.log("hello");
*/

/*
const title = document.getElementsByTagName("h1"); // array로 출력
console.log(title);

getElementById >> object
getElementsByClassName >> array
getElementsByTagName . . . >> array

*/

const title = document.querySelector("div.hello:first-child h1"); // object로 출력, css 방식으로도 검색할 수 있다. / 위에 하나만 검색
// querySelectorAll(): 전부 다 가져온다.
console.log(title);

// title.style.color = "red";

function handleTitleClick() {
    // alert("title was clicked");
    // title.style.color = "blue";

    // if (title.className === "active") {
    //     title.className = "";
    // } else {
    //     title.className = "active";
    // }

    // if (title.classList.contains("active")) {
    //     title.classList.remove("active");
    // } else {
    //     title.classList.add("active");
    // }

    title.classList.toggle("active");
}

title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
