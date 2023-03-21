
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

    var projectPage = this.document.getElementById('projectPage');
    var controller = new ScrollMagic.Controller();

    var projects = projectPage.contentDocument.querySelectorAll('.project');
    console.log(projects);

    console.log('here');
    $(projects).each(function( index ) {
        var id = '#' + $(this).attr('id');

        console.log(id);
        console.log(projects[index]);
        
        var ourScene = new ScrollMagic.Scene({
            triggerElement: id
        })
        .setClassToggle(id, 'fade-in') // add class to handWave
        .addIndicators() // this requires a plugin
        .addTo(controller);
    });
});
/*
    var contactPage = this.document.getElementById('contactPage');
    var aboutPage = this.document.getElementById('aboutPage');
    var resumePage = this.document.getElementById('resumePage');
    var projectPage = this.document.getElementById('projectPage');
    var project1Viewed = false;
    var project2Viewed = false;
    var project3Viewed = false;

    this.addEventListener("scroll", onContactScroll);
    this.addEventListener("scroll", onAboutScroll);
    this.addEventListener("scroll", onResumeScroll);
    this.addEventListener("scroll", onProjectScroll);

    function onContactScroll() {
        if (isInViewport(contactPage)) {
            var contact = contactPage.contentDocument.getElementById('resume');
            contact.classList.add("w3-animate-bottom");
            contact.classList.remove("hidden");
            this.removeEventListener("scroll", onContactScroll);
        }
    }

    function onAboutScroll() {
        if (isInViewport(aboutPage)) {
            var aboutTitle = aboutPage.contentDocument.getElementById('aboutTitle');
            var aboutInfo = aboutPage.contentDocument.getElementById('aboutInfo');
            aboutTitle.classList.add("w3-animate-left");
            aboutInfo.classList.add("w3-animate-bottom");
            aboutTitle.classList.remove("hidden");
            aboutInfo.classList.remove("hidden");
            this.removeEventListener("scroll", onAboutScroll);
        }
    } 

    function onResumeScroll() {
        if (isInViewport(resumePage)) {
            var resumeTitle = resumePage.contentDocument.getElementById('resumeTitle');
            var resumeInfo = resumePage.contentDocument.getElementById('resumeInfo');
            resumeTitle.classList.add("w3-animate-left");
            resumeInfo.classList.add("w3-animate-bottom");
            resumeTitle.classList.remove("hidden");
            resumeInfo.classList.remove("hidden");
            this.removeEventListener("scroll", onResumeScroll);
        }
    }

    function onProjectScroll() {
            var project1 = projectPage.contentDocument.getElementById('1');
            var project2 = projectPage.contentDocument.getElementById('2');
            var project3 = projectPage.contentDocument.getElementById('3');

            if (project1Viewed == false && isInViewport(project1)) {
                project1Viewed = true;
                project1.classList.add("w3-animate-left");
                project1.classList.remove("hidden");
                console.log('project1');
            }
            if (project2Viewed == false && isInViewport(project2)) {
                project2Viewed = true;
                project2.classList.add("w3-animate-left");
                project2.classList.remove("hidden");
                //console.log('project2');
            }
            if (project3Viewed == false && isInViewport(project3)) {
                project3Viewed = true;
                project3.classList.add("w3-animate-left");
                project3.classList.remove("hidden");
                console.log('project3');
            }
            else {
                //console.log('pop');
            }
            if (project1 == true && project2 == true && project3 == true) {
                this.removeEventListener("scroll", onProjectScroll);
                console.log('remove')
            }
        
    } 
})


function isInViewport(item) {
    var project1 = projectPage.contentDocument.getElementById('1');
    var project2 = projectPage.contentDocument.getElementById('2');

    var bounding = item.getBoundingClientRect(),
        myElementHeight = item.offsetHeight - 200,
        myElementWidth = item.offsetWidth;

    var top = bounding.top;
    if (item == project1) {
        top = projectPage.getBoundingClientRect().top;
        myElementHeight = item.offsetHeight + project1.getBoundingClientRect().height;
        console.log('top: '+top);
        console.log('myElementHeight: '+myElementHeight);
        //console.log('project 1')
    }
    if (item == project2) {
        top = projectPage.getBoundingClientRect().top;
        myElementHeight = item.offsetHeight 
            + project2.getBoundingClientRect().height
            + project1.getBoundingClientRect().height;
        console.log('top: '+top);
        console.log('myElementHeight: '+myElementHeight);
    }

    if(top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }
}
*/
window.addEventListener('load', function () {
    document.addEventListener('DOMContentLoaded', () => {
    var controller = new ScrollMagic.Controller();

    console.log('trying');
    var projectPage = this.document.getElementById('projectPage');

    $( ".project" ).each(function( index ) {
        var id = '#' + $(this).attr('id');

        console.log(id);
        //build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: id
        })
        .setClassToggle(id, 'fade-in') // add class to handWave
        .addIndicators() // this requires a plugin
        .addTo(controller);
    });
});
});