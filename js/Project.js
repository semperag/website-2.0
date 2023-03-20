$(document).ready(function() {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

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