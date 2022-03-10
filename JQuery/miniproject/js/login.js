
$("#login-form").on("submit",function(e){
    e.preventDefault(e); 
    const username = $("#login-form input").prop("value");
    if(username == "그린"){
        $("#greeting").text(`반갑습니다. ${username}님`);
        $("#login-form").addClass("hidden");
        $("#memo-form").removeClass("hidden");   
    }
    else{
        $("#greeting").text(`잘못입력했습니다`);
    }
});


