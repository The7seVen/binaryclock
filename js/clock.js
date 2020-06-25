function state(bit, id){
    if(bit=="1"){
        document.getElementById(id).classList.add('one');
        document.getElementById(id).classList.remove('zero');
    }else{
        document.getElementById(id).classList.remove('one');
        document.getElementById(id).classList.add('zero');
    }
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

    state(G_1_bin_arr[0], "G1A");
    state(G_1_bin_arr[1], "G2A");
    
    state(G_2_bin_arr[0], "G1B");
    state(G_2_bin_arr[1], "G2B");
    state(G_2_bin_arr[2], "G4B");
    state(G_2_bin_arr[3], "G8B");

    //itd.

    var M_raw = parseInt(time.getMinutes());

    var M_1 = Math.floor(M_raw/10);

    var M_1_bin_arr = M_1.toString(2).split('');
    
    var M_2 = M_raw - (10*M_1);

    var M_2_bin_arr = M_2.toString(2).split('');

    M_1_bin_arr.reverse();
    M_2_bin_arr.reverse();

    state(M_1_bin_arr[0], "M1A");
    state(M_1_bin_arr[1], "M2A");
    state(M_1_bin_arr[2], "M3A");
    
    state(M_2_bin_arr[0], "M1B");
    state(M_2_bin_arr[1], "M2B");
    state(M_2_bin_arr[2], "M4B");
    state(M_2_bin_arr[3], "M8B");

    var S_raw = parseInt(time.getSeconds());

    var S_1 = Math.floor(S_raw/10);

    var S_1_bin_arr = S_1.toString(2).split('');
    
    var S_2 = S_raw - (10*S_1);

    var S_2_bin_arr = S_2.toString(2).split('');

    S_1_bin_arr.reverse();
    S_2_bin_arr.reverse();

    state(S_1_bin_arr[0], "S1A");
    state(S_1_bin_arr[1], "S2A");
    state(S_1_bin_arr[2], "S3A");
    
    state(S_2_bin_arr[0], "S1B");
    state(S_2_bin_arr[1], "S2B");
    state(S_2_bin_arr[2], "S4B");
    state(S_2_bin_arr[3], "S8B");

},1000);