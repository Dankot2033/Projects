//Checking if consent for usage of cookies was given
//If so, enabling google maps cookies and functionalities on website
if(getCookie("cookieConsent") == "given"){
    document.getElementById("cookie").style.display = "none";
    createGoogleMap();
}else{
    document.getElementById("cookie").style.display = "block";
}

//onClick function for giving consent for cookie usage on website
function cookieConsent(){
    document.cookie = "cookieConsent=given";
    document.getElementById("cookie").style.display = "none";
    createGoogleMap();
}

//Function for finding the value of specific cookies
function getCookie(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

//Function for creating a google map
function createGoogleMap(){
    var map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272886.86232204415!2d11.61366285539546!3d57.7006826526307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8e67966c073f%3A0x4019078290e7c40!2zR8O2dGVib3Jn!5e0!3m2!1ssv!2sse!4v1648636965777!5m2!1ssv!2sse";
    var mapBox = document.getElementById("googleMapBox");
    mapBox.appendChild(map);
}

//onClick function for showing mobile nav
function mobileNav(){
    var nav = document.getElementById("mainNav");
    if(window.innerWidth <= 320){
        if(nav.style.height === "200px"){
            nav.style.height = "0";
        } else{
            nav.style.height = "200px";
        }
    }else{
        if(nav.style.height === "120px"){
            nav.style.height = "0";
        } else{
            nav.style.height = "120px";
        }
    }
}