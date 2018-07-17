$(window).on('load', function () {
    $('.loader').fadeOut(500);
});

$("#openLogin").click(function () {
    $(".login_overlay").css({
        "height": "100%",
        "z-index": "1"
    })
});
$("#closebtn_login").click(function () {
    $(".login_overlay").css({
        "height": "0px",
        "z-index": "-1"
    })
});
$("#openSidebar").click(function (event) {
    event.stopPropagation();
    $(".sidebar_overlay").css({
        "margin-left": "0%"
    })
});
$("#sidebar").click(function (event) {
    event.stopPropagation();
});
$('body,html').click(function (e) {
    $(".sidebar_overlay").css({
        "margin-left": "-100%"
    })
});
$("#search_open").click(function () {
    $("#searchNav").css({
        "height": "100%",
        "z-index": "100"
    });
    $("#searchNav input").focus();
});
$("#close_search_btn").click(function () {
    $("#searchNav").css({
        "height": "0%",
        "z-index": "-1"
    });
    $("#searchBar_input").val('');
    $("#searchListView").css("display","block");
    $("#results_lists").empty();
});

$('.collegeSection').click(function (e) {
    $(this).addClass("activeCourse");
    $('.examSection').removeClass("activeCourse");
    $("#collegeSection").show();
    $("#examSection").hide();
});
$('.examSection').click(function (e) {
    $(this).addClass("activeCourse");
    $('.collegeSection').removeClass("activeCourse");
    $("#examSection").show();
    $("#collegeSection").hide();
});

function autocomplete(inp) {
    var searchValue = $(inp).val();
    $.ajax({
        url: "searchitems.php",
        type: "POST",
        datatype: "JSON",
        data:{"searchData":searchValue}
    }).done(function(data) {
        data=JSON.parse(data);
     if(data.length!=0){
            
                $("#searchListView").css("display","none");
                $("#results_lists").empty();
                for(var i=0;i<data.length;i++){
                    $("#results_lists").append("<a class='card_custom search_links' href="+data[i]["link"]+">"+data[i]["name"]+"</a>")
                }
                
                console.log(data)
            }
            else{
                $("#searchListView").css("display","block");
                $("#results_lists").empty();
            }
    });
}

$("#searchBar_input").keyup(function () {
    autocomplete(this);
});
