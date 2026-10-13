let counter = 0;

function btnDecreaseCounter(){
    counter--;
    document.getElementById("counter").innerText = counter;

    if(counter < 0){
        counter = 0;
        document.getElementById("counter").innerText = counter;
    }
};

function btnResetCounter(){
    counter = 0;
    document.getElementById("counter").innerText = counter;
};

function btnIncreaseCounter(){
    counter++;
    document.getElementById("counter").innerText = counter;
};