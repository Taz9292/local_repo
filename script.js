const repeatCount = 5;
const paragraphText = "hello";

document.getElementById("container").innerHTML = 
    Array.from({ length: repeatCount }, () => `<p>${paragraphText}</p>`).join("");


