console.log(document);
console.log(document.head);
console.log(document.body.childNodes);

// let head = document.getElementById("heading")
// // head.style.color="blue";
// head.style.backgroundColor="black";
// head.style.fontSize="64px";
// // console.log(head)

// let p = document.getElementsByClassName("para")
// // p[0].style.color = "red";
// // p[0].style.fontSize="40px";
// // p[0].style.backgroundColor="grey";
// // p[1].style.color = "skyblue";
// // p[1].style.fontSize="40px";
// // p[1].style.backgroundColor="darkgrey";
// p[1].innerHTML= "DOM Manipulation"

let collect = document.getElementsByTagName("li");
document.getElementById("demo").innerHTML = collect[0].innerHTML;
// document.getElementById("demo").innerHTML = collect[1].innerHTML;

function changeColor(newColor){
    const btn = document.getElementById("para")
    btn.style.color = newColor
}