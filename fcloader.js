$(function() { 
 /*if($.trim($("#fancytext").val())!='') { 
    generateFancy($("#fancytext").val());
  } else {
   generateFancy("Font Changer");
  }*/
  
$(".fancytext").keyup(function() { 
   $(".fancytext").val($(this).val());
   if($.trim($(this).val())!='') { 
   generateFancy($(this).val());
   } else {
   generateFancy("Font Changer");
   }
 });
var ct = 89;
function generateFancy(txt) {
  var fancyText = '';
     var result = forward(txt);
         var finalRes =  result.split('\n\n');
         var sn=1;
        $.each(finalRes,function(inx, vl) { 
            $("#copy_"+inx).val(vl);
            
          fancyText  +=  '<div class="fc-row"><input type="text" class="text-'+sn+'" value="'+vl+'" id="copy_'+inx+'" readonly="readonly"><span class="copybutton" data-clipboard-action="copy" data-clipboard-target="#copy_'+inx+'">Copy</span></div>';
          sn++;
        });
        
        
        for(k=89; k<=ct; k++) {
            //console.log(k);
            $("#copy_"+k).val(crazyWithFlourishOrSymbols(txt));
        }
           //$("#result").html(fancyText); 
}
 
 $(".loadmore").click(function(){
   $(this).html('Loading...');
    var text = $.trim($(".fancytext").val());
   if(text=='') {
     text = 'Font Changer';
   } 
   var that = $(this);
   var intvl = setInterval(function(){  that.html('Load More');clearInterval(intvl); }, 1000);
   for(var i=1;i<=10;i++){
    fancyText  =  '<div class="fc-row"><input type="text" value="'+crazyWithFlourishOrSymbols(text)+'" id="copy_'+ct+'" readonly="readonly"><span class="copybutton" data-clipboard-action="copy" data-clipboard-target="#copy_'+ct+'">Copy</span></div>';
      ct++;
    $("#result").append(fancyText);
    }
 });

});
