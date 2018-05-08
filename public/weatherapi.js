class myApi{
    constructor(){}
    fetch(){
        var cityValue = $('.get-city').val();
    
        $.ajax({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&APPID=d703871f861842b79c60988ccf3b17ec",
    
            success: function (data) {
                $('.get-city').val('')
                // console.log(data)
                prepInfos(data)
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // console.log(textStatus);
            }
        });
    };  
}