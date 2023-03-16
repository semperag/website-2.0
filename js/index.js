
const bodyElem = document.body;

setTimeout(function(text){
    bodyElem.classList.remove('overflowHidden');
}, 1500);

window.addEventListener('load', function () {
    document.addEventListener('DOMContentLoaded', () => {
        if(window.parent.document.getElementById("resume").style.display != "none")  {
            alert("Visible");
        } else { 
            alert("Hidden");
        }
    });

    var item = this.document.getElementById('contact');

    this.addEventListener("scroll", onScroll);


function onScroll() {
    if (isInViewport(item)) {
        console.log('boiii');
        var contactFrame = document.getElementById('contact');
        var contact = contactFrame.contentDocument.getElementById('resume');
        contact.classList.add("w3-animate-bottom");
        this.removeEventListener("scroll", onScroll);
    }
    else {
        console.log('hmm');
    }
}
})
function isInViewport(item) {

    var bounding = item.getBoundingClientRect(),
        myElementHeight = item.offsetHeight,
        myElementWidth = item.offsetWidth;

    if(bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }
}