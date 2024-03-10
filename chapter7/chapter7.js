// document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(345deg";
document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px solid blue"
// document.getElementById("rightarm").style.backgroundColor = "#008000"
// document.getElementById("rightarm").style.backgroundColor = "#008000"
// document.getElementById("mouth").style.backgroundColor = "#FE5BAC"
// document.getElementById("nose").style.borderRadius = "50%"



let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let nose = document.getElementById("nose")

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
nose.addEventListener("click", moveUpDown);

// document.getElementById("righteye").addEventListener("click",moveupdown);// 

function moveUpDown(e) {
    let robotPart = e.target;
    let t = 0;


    let animation = setInterval(frame, 10); //call frame every 10 milliseconds

    function frame() {
        robotPart.style.top = t + "%";
        t++;
        if(t === 21) {
            clearInterval(animation);
        }
    }
}

function moveRightLeft(e) {
    let robotPart = e.target;
    let l = 0;


    let animation = setInterval(frame, 50); //call frame every 10 milliseconds

    function frame() {
        robotPart.style.left = l + "%";
        l++;
        if(l === 70) {
            clearInterval(animation);
        }
    }
}




