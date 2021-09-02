function compute()
{    
    // we gather the values from the inputs
    var principal = document.getElementById("principal").value;

    if (principal <=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        // we do not do anyhing more, we are waiting
        // for valid value
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // we calculate interest and year
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // we set content of result with text and our calculated values
    document.getElementById("result").innerHTML=
        "If you deposit <span class=\"yellow\">" + principal + "</span>,<br/>"
        + "at an interest rate of <span class=\"yellow\">" + rate + "%</span>.<br/>"
        + "You will receive an amount of <span class=\"yellow\">" + interest + "</span>,<br/>"
        + "in the year <span class=\"yellow\">" + year + "</span>";
}

function updateRate() 
{
    // when range input changes we update the numeric value
    // in the span
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        