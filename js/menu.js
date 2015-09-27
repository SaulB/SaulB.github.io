(function() {

/***************************
**  Scroll lors du click  **
***************************/


$('nav.menu a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
});

/**************************************************
** Changement du style css de la section du menu **
**************************************************/

var currentSection = "section1";

function change($section){
   /* $('nav.menu a').removeClass('current');*/
    currentSection = $section.attr('id');
    $('.target-'+currentSection).addClass('current');
};

$("#main section").waypoint(function(direction){
    if(direction === 'down'){
        change($(this));
    }
}, {offset: '20%'})
$("#main section").waypoint(function( direction ) {
    if( direction === 'up') {
        change($(this));
    }
}, { offset: '-20%' });

}())