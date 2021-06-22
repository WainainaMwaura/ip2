var akanMale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var akanFemale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var dayOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function results() {
    var century =parseInt (document.getElementById("century").value);
    var month =parseInt(document.getElementById("month").value);
    var year =parseInt(document.getElementById("year").value);
    var day=parseInt(document.getElementById("monthday").value);
    var date=new Date(year + "/" + month + "/" + day);
    var gender= print();
    var day2=date.getDay();
    var akan; }