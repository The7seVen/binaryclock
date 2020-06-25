//document.getElementById("G82").classList.add('one');

//var output = "Hello world!".split('');
//console.log(output);

function dec2bin(dec){
    return dec.toString(2);
}

var ticker = window.setInterval(function(){ //powtórz co sekundę
    var time = new Date();  //zapisz czas

    var G_raw = parseInt(time.getHours()); //wydziel godziny

    var G_1 = Math.floor(G_raw/10);   //wydziel pierwszą cyfrę

    var G_1_bin_arr = G_1.toString(2).split('');  //zamień na formę binarną (char_array)
    
    var G_2 = G_raw - (10*G_1); //wydziel drugą cyfrę

    var G_2_bin_arr = G_2.toString(2).split('');  //zamień na formę binarną (char_array)

    G_1_bin_arr.reverse();  //najmłodszy bit na [0]
    G_2_bin_arr.reverse();

    //ustaw tło dla bita

    if(G_1_bin_arr[0]=="1"){
        document.getElementById("G1A").classList.add('one');
        document.getElementById("G1A").classList.remove('zero');
    }else{
        document.getElementById("G1A").classList.remove('one');
        document.getElementById("G1A").classList.add('zero');
    }
    if(G_1_bin_arr[1]=="1"){
        document.getElementById("G2A").classList.add('one');
        document.getElementById("G2A").classList.remove('zero');
    }else{
        document.getElementById("G2A").classList.remove('one');
        document.getElementById("G2A").classList.add('zero');
    }

    if(G_2_bin_arr[0]=="1"){
        document.getElementById("G1B").classList.add('one');
        document.getElementById("G1B").classList.remove('zero');
    }else{
        document.getElementById("G1B").classList.remove('one');
        document.getElementById("G1B").classList.add('zero');
    }
    if(G_2_bin_arr[1]=="1"){
        document.getElementById("G2B").classList.add('one');
        document.getElementById("G2B").classList.remove('zero');
    }else{
        document.getElementById("G2B").classList.remove('one');
        document.getElementById("G2B").classList.add('zero');
    }
    if(G_2_bin_arr[2]=="1"){
        document.getElementById("G4B").classList.add('one');
        document.getElementById("G4B").classList.remove('zero');
    }else{
        document.getElementById("G4B").classList.remove('one');
        document.getElementById("G4B").classList.add('zero');
    }
    if(G_2_bin_arr[3]=="1"){
        document.getElementById("G8B").classList.add('one');
        document.getElementById("G8B").classList.remove('zero');
    }else{
        document.getElementById("G8B").classList.remove('one');
        document.getElementById("G8B").classList.add('zero');
    }
    //itd.

    var M_raw = parseInt(time.getMinutes());

    var M_1 = Math.floor(M_raw/10);

    var M_1_bin_arr = M_1.toString(2).split('');
    
    var M_2 = M_raw - (10*M_1);

    var M_2_bin_arr = M_2.toString(2).split('');

    M_1_bin_arr.reverse();
    M_2_bin_arr.reverse();

    if(M_1_bin_arr[0]=="1"){
        document.getElementById("M1A").classList.add('one');
        document.getElementById("M1A").classList.remove('zero');
    }else{
        document.getElementById("M1A").classList.remove('one');
        document.getElementById("M1A").classList.add('zero');
    }
    if(M_1_bin_arr[1]=="1"){
        document.getElementById("M2A").classList.add('one');
        document.getElementById("M2A").classList.remove('zero');
    }else{
        document.getElementById("M2A").classList.remove('one');
        document.getElementById("M2A").classList.add('zero');
    }
    if(M_1_bin_arr[2]=="1"){
        document.getElementById("M4A").classList.add('one');
        document.getElementById("M4A").classList.remove('zero');
    }else{
        document.getElementById("M4A").classList.remove('one');
        document.getElementById("M4A").classList.add('zero');
    }

    if(M_2_bin_arr[0]=="1"){
        document.getElementById("M1B").classList.add('one');
        document.getElementById("M1B").classList.remove('zero');
    }else{
        document.getElementById("M1B").classList.remove('one');
        document.getElementById("M1B").classList.add('zero');
    }
    if(M_2_bin_arr[1]=="1"){
        document.getElementById("M2B").classList.add('one');
        document.getElementById("M2B").classList.remove('zero');
    }else{
        document.getElementById("M2B").classList.remove('one');
        document.getElementById("M2B").classList.add('zero');
    }
    if(M_2_bin_arr[2]=="1"){
        document.getElementById("M4B").classList.add('one');
        document.getElementById("M4B").classList.remove('zero');
    }else{
        document.getElementById("M4B").classList.remove('one');
        document.getElementById("M4B").classList.add('zero');
    }
    if(M_2_bin_arr[3]=="1"){
        document.getElementById("M8B").classList.add('one');
        document.getElementById("M8B").classList.remove('zero');
    }else{
        document.getElementById("M8B").classList.remove('one');
        document.getElementById("M8B").classList.add('zero');
    }

    var S_raw = parseInt(time.getSeconds());

    var S_1 = Math.floor(S_raw/10);

    var S_1_bin_arr = S_1.toString(2).split('');
    
    var S_2 = S_raw - (10*S_1);

    var S_2_bin_arr = S_2.toString(2).split('');

    S_1_bin_arr.reverse();
    S_2_bin_arr.reverse();

    if(S_1_bin_arr[0]=="1"){
        document.getElementById("S1A").classList.add('one');
        document.getElementById("S1A").classList.remove('zero');
    }else{
        document.getElementById("S1A").classList.remove('one');
        document.getElementById("S1A").classList.add('zero');
    }
    if(S_1_bin_arr[1]=="1"){
        document.getElementById("S2A").classList.add('one');
        document.getElementById("S2A").classList.remove('zero');
    }else{
        document.getElementById("S2A").classList.remove('one');
        document.getElementById("S2A").classList.add('zero');
    }
    if(S_1_bin_arr[2]=="1"){
        document.getElementById("S4A").classList.add('one');
        document.getElementById("S4A").classList.remove('zero');
    }else{
        document.getElementById("S4A").classList.remove('one');
        document.getElementById("S4A").classList.add('zero');
    }

    if(S_2_bin_arr[0]=="1"){
        document.getElementById("S1B").classList.add('one');
        document.getElementById("S1B").classList.remove('zero');
    }else{
        document.getElementById("S1B").classList.remove('one');
        document.getElementById("S1B").classList.add('zero');
    }
    if(S_2_bin_arr[1]=="1"){
        document.getElementById("S2B").classList.add('one');
        document.getElementById("S2B").classList.remove('zero');
    }else{
        document.getElementById("S2B").classList.remove('one');
        document.getElementById("S2B").classList.add('zero');
    }
    if(S_2_bin_arr[2]=="1"){
        document.getElementById("S4B").classList.add('one');
        document.getElementById("S4B").classList.remove('zero');
    }else{
        document.getElementById("S4B").classList.remove('one');
        document.getElementById("S4B").classList.add('zero');
    }
    if(S_2_bin_arr[3]=="1"){
        document.getElementById("S8B").classList.add('one');
        document.getElementById("S8B").classList.remove('zero');
    }else{
        document.getElementById("S8B").classList.remove('one');
        document.getElementById("S8B").classList.add('zero');
    }

},1000);