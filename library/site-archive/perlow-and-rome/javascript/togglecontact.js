
$("document").ready(function(){ $(".hidden-content").hide(0);});

jQuery.fn.toggleText = function(a,b) {
        return this.html(this.html().replace(new RegExp("("+a+"|"+b
+")"),function(x){return(x==a)?b:a;}));

}


$(function(){
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1500);
                return false;
            }
        }
    });
});

$(function() { $("a.photoslink").click(function(){ 
												
//$("#photos").slideUp("fast");
//$(".contactbox").toggleClass("contactactive");
 //$('#midcontainer').prepend( $('#photosouter') );
 //$("#photos").slideDown("normal");
 //$("#theevent").removeClass("bigcontentbox");
 //$("#visiting").removeClass("bigcontentbox");
 //$("#photos").toggleClass("bigcontentbox");

	//if ($("#photos").css("top") == "865px") {
	//	$("#photos").animate({top: '433px'});
	//}
	
	$("a#photosmore").toggleText('&lt;read more&gt;','&lt;hide text&gt;');				
	
	//$("#photos").find("a.morearrow").toggleClass("arrowdown");
	
	$("#photoshidden").toggle("normal");
 $("#photos").addClass("bigcontentbox");
 

	
	})
});

$(function() { $("a.theeventlink").click(function(){ 
												
//$("#theevent").slideUp("fast");
//$(".contactbox").toggleClass("contactactive");
 //$('#midcontainer').prepend( $('#theeventouter') );
 //$("#theevent").slideDown("normal");
 //$("#photos").removeClass("bigcontentbox");
 //$("#visiting").removeClass("bigcontentbox");
 //$("#theevent").toggleClass("bigcontentbox");
 
// $(".arrow").find("a").toggleClass("arrowclicked");

	//if ($("#photos").css("top") == "865px") {
	//	$("#photos").animate({top: '433px'});
	//}
	$("a#eventmore").toggleText('&lt;read more&gt;','&lt;hide text&gt;');				
	
	//$("#theevent").find("a.morearrow").toggleClass("arrowdown");
	
	$("#eventhidden").toggle("normal");
 $("#theevent").addClass("bigcontentbox");
 


	
	})
});

$(function() { $("a.visitinglink").click(function(){ 
												
//$("#theevent").slideUp("fast");
//$(".contactbox").toggleClass("contactactive");
 //$('#midcontainer').prepend( $('#theeventouter') );
 //$("#theevent").slideDown("normal");
 //$("#photos").removeClass("bigcontentbox");
 //$("#visiting").removeClass("bigcontentbox");
 //$("#theevent").toggleClass("bigcontentbox");
 
// $(".arrow").find("a").toggleClass("arrowclicked");

	//if ($("#photos").css("top") == "865px") {
	//	$("#photos").animate({top: '433px'});
	//}
	$("a#visitingmore").toggleText('&lt;read more&gt;','&lt;hide text&gt;');				
	//$("#visiting").find("a.morearrow").toggleClass("arrowdown");
		
	
	$("#visitinghidden").toggle("normal");
 $("#visiting").addClass("bigcontentbox");
 


	
	})
});



$(function() { $("a.backtotop").click(function(){ 
											   
											  
 $(".hidden-content").slideUp("normal");
 $("a#eventmore").html('&lt;read more&gt;');	
 $("a#visitingmore").html('&lt;read more&gt;');	
  $("a#photosmore").html('&lt;read more&gt;');	
// $("a.morearrow").removeClass("arrowdown");


	
	
	})
});


$(function() { $("a.moreevent").click(function(){
											   
	
	
	$("#eventhidden").slideDown("normal");
 $("#theevent").addClass("bigcontentbox");
	
	
	})
});


/* This clears temporary copy in a search box when user enters the box */
function clearIt(what) {
    what.value = '';
}



