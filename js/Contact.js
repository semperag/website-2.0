function isInViewport(item) {

    console.log('hello');
    console.log(item);

    var bounding = item.getBoundingClientRect(),
        myElementHeight = item.offsetHeight,
        myElementWidth = item.offsetWidth;

    console.log(bounding);
    console.log(bounding);

    if(bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }
}

function isElementVisible(element)
{
    var elementPosition = element.offsetTop;
    var currentScroll = window.parent.$("iframe").contents().scrollTop();
    var screenHeight = window.parent.$("iframe").height();
    var visibleArea = currentScroll + screenHeight;
    return (elementPosition < visibleArea);
}

var item = document.getElementById("resume");


$('id').scroll(function(){
    if(isElementVisible(item)) {
        item.classList.add("w3-animate-bottom");
        console.log('yes');
    }
    else {
        console.log('no');
    }
});

    window.addEventListener('load', function () {
        document.addEventListener('DOMContentLoaded', () => {
        if(window.parent.document.getElementById("resume").style.display != "none")  {
            alert("Visible");
        } else { 
            alert("Hidden");
        }
    });
    })

    document.addEventListener('DOMContentLoaded', () => { 
        console.log('yoooo');
    });
