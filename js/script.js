// function replaceName(){
//     let name = prompt("Siapakah nama anda?", "");
//     document.getElementById("user").innerHTML = name
// }
// replaceName();



var slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");

    if (n > imgList.length) {slideIndex = 1}
    else if(n < 1) {slideIndex =imgList.length};


    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display= "none";
    }
   
    imgList[slideIndex -1].style.display = "block";
}


setInterval(() => {
    plusDivs(1);
}, 2000)

function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const email = document.forms["message-form"]["email"].value;
    const messages = document.forms["message-form"]["messages"].value;

    setSenderUI(name, email,  messages);
    return false
}

    function setSenderUI(name, email, messages) {
        document.getElementById("sender-full-name").innerHTML = name;
        document.getElementById("sender-email").innerHTML = email;
        document.getElementById("sender-messages").innerHTML = messages;
    }