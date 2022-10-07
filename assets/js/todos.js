// Check off specific To-Do item by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Equivalent JS logic

/*
$("li").click(function(){
    
    // if li (list object) is gray, then make li black and clear line-through
    if ($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
            });

    }
    // if li object is black, then make li gray and line-through
    else { 
        $(this).css({
        color: "gray",
        textDecoration: "line-through"
        });
    }
*/

// Click on X to delete To-Do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Creating a new task
$("input[type='text'").keypress(function(event){
    if(event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        // creating a new list object and adding it to the unordered list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }

});

// Toggle the Plus Icon 
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
})