window.onload=function(){
    banner();
    getWidth();
}

function banner(){
    var box=document.querySelector(".carousel");
    var startX=0;
    var moveX=0;
    var distanceX=0;

    box.addEventListener("touchstart", function (e) {
        startX= e.targetTouches[0].clientX;
    })
    box.addEventListener("touchmove", function (e) {
        moveX= e.targetTouches[0].clientX
        distanceX=moveX-startX;
    })
    box.addEventListener("touchend", function () {
        if(distanceX>0){
            $(".carousel").carousel("prev");
        }
        if(distanceX<0){
            $(".carousel").carousel("next");
        }
    })
}
function getWidth(){
    var W=0;
    $(".wjs-tabs li").each(function (index,e) {
        W+=$(e).outerWidth();
    })
    $(".wjs-tabs").width(W);
}

