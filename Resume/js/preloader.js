/**
 * Created by Administrator on 2017/3/17.
 */
$(function(){
    /* ------- Preloader ------ */
    jQuery(window).load(function() {
        jQuery(".status").fadeOut();
        jQuery(".preloader").delay(0).fadeOut("slow");
    });

})