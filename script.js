var interval;


function startCounter() {

    var number = parseInt(document.getElementById('number').value);

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(interval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        clearInterval(interval);
        return;
    }

    var c1 = document.getElementById('c-1');
    var c2 = document.getElementById('c-2');
   
    resetNumbers(c1 , c2);
    
    // Clears the previous interval that was running
    // clearInterval(interval);
    

     interval =  setInterval(function(){
        
        c2.classList.add('animate');
        c2.innerHTML = Number(c2.innerHTML)+1;
        if(c2.innerHTML == number){
            clearInterval(interval);
            c1.innerHTML = number;
            c2.classList.remove('animate');
            return;
        }
    } , 1050);


    

}

function resetNumbers(c1, c2, end) {
    c1.innerHTML = "";
    c2.innerHTML = "0";
}







