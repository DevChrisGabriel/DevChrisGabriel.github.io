window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        document.getElementById("navbar-onscroll").style.top = "0px";
    }else{
        document.getElementById("navbar-onscroll").style.top = "-400px";
    }
}

