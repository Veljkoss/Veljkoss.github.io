function validateForm() {
			
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["flastname"].value;
    var z = document.forms["myForm"]["fmessage"].value;
    


    if (x === "") {
    alert("Morate da unesete ime.");
    return false;
    }

    if (y === "") {
    alert("Morate da unesete prezime.");
    return false;
    }
    
    
    
    
    
    var emailID = document.myForm.eMail.value;
        
    majmuncePoz = emailID.indexOf("@");
    tackaPoz = emailID.lastIndexOf(".");
    
    
if (majmuncePoz < 1 ) {
    alert("Mejl adresa mora da sadrzi znak '@' i bar jedan znak ispred njega.");
    return false;
    }
    
    
    else if (tackaPoz - majmuncePoz < 2) {
        alert("Mejl adresa mora da sadrzi tacku.");
        return false;
    
    }
    if (z === "") {
    alert("Morate da umesete neki tekst.");
    return false;
    }
    
    
    }


   