const counterMain = document.querySelector(".counter__main") 
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
function a(){
    $(window).on("load resize", function () {

        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];
    
        for (i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }
    
        var count = function (start, value, id) {
            var localStart = start;
            setInterval(function () {
                if (localStart < value) {
                    localStart++;
                    counters[id].innerHTML = localStart + "+";
                }
            }, 0);
        }
    
        for (j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }
    });
} 
document.addEventListener('scroll', function () {
    if(isInViewport(counterMain)){   
        a() 
    } 

});


const scrollSection = () =>{
window.scroll(0,window.innerHeight)
}

