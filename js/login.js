const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginSubmit = loginForm.querySelector("input[type=submit]");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmitClick() {
    const namePattern = /^[가-힣a-zA-Z]+$/;
    const username = loginInput.value;

    if (!namePattern.test(username)) {
        alert("Please write your korean or english name");
    } else {
        localStorage.setItem(USERNAME_KEY, username);
        loginForm.classList.add(HIDDEN_CLASSNAME);
        greeting.classList.remove(HIDDEN_CLASSNAME);
        paintGreetings(username);
    }
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginSubmit.addEventListener("click", loginSubmitClick);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

//////////////////////////////////////////////////////////////////////////////

//event.preventDefault();
// 브라우저가 기본 동작을 실행하지 못하게 막기 / event object는 preventDefault 함수를 기본적으로 갖고 있음 / 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다
// 어떤 event의 기본 행동이든지 발생되지 않도록 막는다.
// event는 EventListener 함수의 첫 번째 argument 안에 있는 function / EventListener에 어떤 function을 추가하든 js는 첫 번째 argument로 발생된 event에 대한 정보를 준다.

// addEventListener에 있는 함수는 브라우저가 실행시키고 event에 대한 정보도 담아준다.
// js는 함수를 실행시키는 동시에 그 함수에 첫 번째 인자로 object를 넣어준다. -> 방금 일어나 event에 대한 여러 정보

//lcoalStorage 브라우저에 무언가를 저장한 후 나중에 가져 올 수 있음.
//localStorage.setItem(key, value); - 로컬 저장소에 해당 키와 값을 저장함.
//localStorage.getItem(key); - 로컬 저장소에 해당 키에 해당되는 값을 불러옴.
//localStorage.removeItem(key); - 로컬 저장소에 해당 키에 해당되는 키, 값을 삭제함.
