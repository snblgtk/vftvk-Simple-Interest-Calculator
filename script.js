function compute() {
    
    //creating variables
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;  
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate *12/ 100;
    
    // converting no of years into year in the future
    var futureyear = parseInt(years) + 2021
    var result = document.getElementById("result");

    if(principal >0){
    result.innerHTML = "If you deposit <span class='highlight'>"+ principal + "</span> ,<br> at an interest rate of <span class='highlight'>" + rate + "</span>% <br> You will receive an amount of <span class='highlight'>" + interest + "</span>, <br> in the year <span class='highlight'>" + futureyear +"</span> <br><br>" 

    }

    else{ 
     
    // added validation for principal input box
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    }

}

function setSliderLabel(){
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_span").innerHTML = rate + "%";

}
        
