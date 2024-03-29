$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	//removes class makeRed, adds class makeBorder on mouseenter
	$(".button").mouseenter(function(){
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$(".button").mouseleave(function(){
		$(".button").removeClass("makeBorder").addClass("makeRed");
	});

    $(".button").click(function() {
        $("p").slideToggle('slow');
    });

    $("p").click(function() {
        $(this).children("a").addClass("highlight_green");
    });
    
    $(".card_image").click(function() {
         $(this).siblings().slideDown(1000);
    });


    $(".card").click(function() {
         $(this).toggleClass("highlight_yellow");
    });

    $("#select_btn").click(function() {
        $(".card:not(.highlight_yellow)").hide();
        
    });     

    $("#all_btn").click(function() {
        $(".card").show().removeClass("highlight_yellow");
        
    });     

}); 

