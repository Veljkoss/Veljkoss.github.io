function Izračunaj()
    {
        
        var height=Number(document.getElementById("height").value);
        var heightunits=document.getElementById("heightunits").value;
        var weight=Number(document.getElementById("weight").value);
        var weightunits=document.getElementById("weightunits").value;


       
        if (heightunits=="inches") height/=39.3700787;
        if (weightunits=="lb") weight/=2.20462;

        
        var BMI=weight/Math.pow(height,2);

        
        document.getElementById("output").innerText=Math.round(BMI*100)/100;

        var output =  Math.round(BMI*100)/100
        if (output<18.5)
        document.getElementById("comment").innerText = "Smanjenja telesna tezina";
      else   if (output>=18.5 && output<=25)
        document.getElementById("comment").innerText = "Normalna telesna težina";
     else   if (output>=25 && output<=30)
        document.getElementById("comment").innerText = "Gojaznost";
     else   if (output>30)
        document.getElementById("comment").innerText = "Jaka Gojaznost";
       // document.getElementById("answer").value = output; 
    }
