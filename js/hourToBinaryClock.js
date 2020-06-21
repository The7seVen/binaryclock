function hourToBinaryClock(){
   var hourToConvert = document.getElementById("hourToConvert").value;
   var result = document.getElementById("result");
   if(hourToConvert == ""){
       result.innerHTML = "<span style='color:red'>Proszę wpisać godzinę do konwersji!</span>";
   }
   else {
       let regHour = "^(0-2)[1](0-9)[1]\:(0-5)[1](0-9)[1]\:(0-5)[1](0-9)[1]$";
       if(!regHour.test(hourToConvert)){
        result.innerHTML = "<span style='color:red'> Proszę wpisać poprawną formę godziny </span>";
       }
       else {
        result.innerHTML = "<span style='color:green'>Poprawna godzina!</span>";
       }
   }
}