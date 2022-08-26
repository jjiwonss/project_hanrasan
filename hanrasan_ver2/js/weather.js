$(function(){
    
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=33.3616666&lon=126.5291666&appid=931cf418021445795381368f79037456&units=Metric'

    , function(data){
        console.log(data)
        var $city = data.name; /* 도시이름 */
        var $minTemp = data.main.temp_min; //최저온도
        var $maxTemp = data.main.temp_max; //최고온도
        var $cTemp = data.main.temp; //현재온도
        var $wIcon = data.weather[0].icon;//아이콘
    
        var now = new Date(Date.now()); //현재날짜
        var b = now.getDay()
        switch(b){
            case 0 : c = "일"
            break
            case 1 : c = "월"
            break
            case 2 : c = "화"
            break
            case 3 : c = "수"
            break
            case 4 : c = "목"
            break
            case 5 : c = "금"
            break
            case 6 : c = "토"
            break
    
        }

        let weatherIcon = {
            '01' : 'wi wi-day-sunny',
            '02' : 'wi wi-day-cloudy',
            '03' : 'wi wi-cloud',
            '04' : 'wi wi-cloudy',
            '09' : 'wi wi-day-rain-mix',
            '10' : 'wi wi-showers',
            '11' : 'wi wi-thunderstorm',
            '13' : 'wi wi-snowflake-cold',
            '50' : 'wi wi-smog'
        }
    
        var $cDate = now.getMonth()+1 + '월' + now.getDate() + '일' + '   ' + '(' + c + ')';
    
        var $wIcon = (data.weather[0].icon).substr(0,2);
    
        $('.ctemp').append($cTemp + '℃');
    
        $('.Wiocn').append('<i class = "' + weatherIcon[$wIcon] + '"></i> ');
    
        $('.date').prepend($cDate);

    
    })

    
});