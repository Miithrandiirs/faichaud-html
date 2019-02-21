let myTable = {};

$(".multi").each(function(e) {
    $(this).children("ul").hide();
});

$(".multi").click(function (e) {
    e.preventDefault();



    if($(this).children("ul").is(":hidden")) {
        $(this).children("a").children("i").attr('class','fas fa-chevron-up');
        $(this).children("ul").show();
    } else {
        $(this).children("a").children("i").attr('class','fas fa-chevron-down');
        $(this).children("ul").hide();
    }
});