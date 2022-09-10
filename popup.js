const startbutton = document.querySelector(".startbtn");
let isWorking = false;

startbutton.addEventListener("click", () => {
    if (!isWorking) {
        isWorking = true;
        chrome.tabs.executeScript({file: "script.js"});
    }
    
});