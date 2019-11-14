/*    
    $("button").click(function() {
        $(this).prev().slideToggle('slow');
    });
*/
    $("button").click(function() {
        $(this).siblings().slideToggle('slow');
    });