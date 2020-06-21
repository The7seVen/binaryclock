function hourToBinaryClock(){
   var hourToConvert = document.getElementById("hourToConvert").value;
   var result = document.getElementById("result");
   if(hourToConvert == ""){
       result.innerHTML = "<span style='color:red'>Proszę wpisać godzinę do konwersji!</span>";
   }
   else {
       let regHour = /^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/;
       if(!regHour.test(hourToConvert)){
        result.innerHTML = "<span style='color:red'> Proszę wpisać poprawną formę godziny! </span>";
       }
       else {
        result.innerHTML = "<span style='color:green'>Poprawna godzina!</span>";
       }
   }
}