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

/*$("#main section").waypoint(function(direction){
    if(direction === 'down'){
        change($(this));
    }
}, {offset: '20%'})*/

/* var waypoints = $('#section3').waypoint(function(direction) {
  notify(this.element.id + ' hit') 
})*/


/*var waypoint = new Waypoint({
  element: document.getElementById('section2'),
  handler: function(direction) {
    notify(this.id + ' hit');*/


/*$("#main section").waypoint(function(direction){
    if(direction === 'down'){
        change($(this));
    }
}, {offset: '20%'}).waypoint(function( direction ) {
    if( direction === 'up') {
        change($(this));
    }
}, { offset: '-20%' });*/

function change($section){
    $('nav.menu a').removeClass('current');
    currentSection = $section.attr('id');
    $('.target-'+currentSection).addClass('current');
};

}())