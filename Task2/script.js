let Screen = document.getElementById("Screen")





function Show(num){

    Screen.value += num;

}

function Calculate(){

    try{

        Screen.value = eval(Screen.value);

    }

    catch(err)

    {

        alert("Invalid");

    }

}

function Clear(){

    Screen.value = "";

}

function Delete() {

    Screen.value = Screen.value.slice(0,-1)

}

