/**
 * Created by Administrator on 2017/3/15.
 */
//var row = document.getElementsByClassName('row');
//var iNow = 0;
//var oPrev = document.getElementsByClassName('da-arrows-prev');
//var oNext = document.getElementsByClassName('da-arrows-next');
//oNext.onclick = function(){
//   console.log(111);
//   row[iNow].className='hide';
//   iNow++;
//   if(iNow==row.length){
//      iNow=0;
//   }
//   row[iNow].className='show';
//
//};
//oPrev.onclick = function(){
//   row[iNow].className='hide';
//   iNow--;
//   if(iNow==-1){
//      iNow=row.length-1
//   }
//};




var iNow = 0;
var $next = $('.da-arrows-next');
var $text = $('.intro-text');
var $text2 = $('.intro-text2');
$(function(){
   $next.on('click',function(){
      $text.hide('hide');
      $text2.fadeIn();
   })
});