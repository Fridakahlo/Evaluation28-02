$(document).ready(main);

function main(){
	$('#button').on('click', function() {
    	getOperands();//calls the result of the substraction in - out
    	// message(); has to call the message if substaction is positive, but doesn't works
    	// totalResult(); //has to insert result in the app, but doesn't works
    	verifyRental();// verify if obligatory input are filled
    	return false; //keep the inputs after refreshing
    });	
	
//substraction in - out
	function getOperands() {
	    var salary = parseInt(document.getElementById("inputSalary").value, 10);
	    var allowance = parseInt(document.getElementById("inputAllowance").value, 10);
	    var annuities = parseInt(document.getElementById("inputAnnuities").value, 10);
	    var othersMeans = parseInt(document.getElementById("inputOthersMeans").value, 10);
	    var resultIn = salary + allowance + annuities + othersMeans ;

	    var rental = parseInt(document.getElementById("inputRental").value, 10);
	    var charges = parseInt(document.getElementById("inputCharges").value, 10);
	    var energy = parseInt(document.getElementById("inputEnergy").value, 10);
	    var telecoms = parseInt(document.getElementById("inputTelecoms").value, 10);
	    var taxes = parseInt(document.getElementById("inputTaxes").value, 10);
	    var housingTax = parseInt(document.getElementById("inputHousingTax").value, 10);
	    var propertyTax = parseInt(document.getElementById("inputPropertyTax").value, 10);
	    var homeInsurance = parseInt(document.getElementById("inputHomeInsurance").value, 10);
	    var carInsurance = parseInt(document.getElementById("inputCarAssurance").value, 10);
	    var mutual = parseInt(document.getElementById("inputMutual").value, 10);
	    var scolarity = parseInt(document.getElementById("inputScolarity").value, 10);
	    var credits = parseInt(document.getElementById("inputCredits").value, 10);
//proportion inputs
	    var feed = ((parseInt(document.getElementById("inputFeed").value, 10))/7)*31;
	    var transport = ((parseInt(document.getElementById("inputTransport").value, 10))/7)*31;
	    var sport =	((parseInt(document.getElementById("inputsSport").value, 10))/365)*31;
	    var fun = ((parseInt(document.getElementById("inputFun").value, 10))/7)*31;
//end of proportion inputs
	    var health = parseInt(document.getElementById("inputHealth").value, 10);
	    var clothes = parseInt(document.getElementById("inputClothes").value, 10);
	    var propertyTax = parseInt(document.getElementById("inputPropertyTax").value, 10);

	    var resultOut = rental + charges + energy + telecoms + taxes + housingTax + propertyTax + homeInsurance + carInsurance + mutual + scolarity + credits + feed + transport + sport + fun + health + clothes + propertyTax;
	    
	    var result = resultIn - resultOut;
	 	alert(result);
	}
 // has to insert result in html, but doesn't works	
 	 // function totalResult(){
 	 // 	$('#results').html(result);
 	 // }

 // has to show message if result is positive, but doesn't works
 // 	function message(result){
	// 	if(result > 1 && result <= 100){
	// 		alert ("Pourquoi pas un dinner en amoureux?");
	// 		return false;
	// 	}else if(result > 101 && result<= 300){
	// 		alert ("On pourrai se payer un petit weekend...");
	// 		return false;
	// 	}else if(result > 301 && result <= 500){
	// 		alert ("C'est le moment de changer la machine à laver !");
	// 		return false;
	// 	}else if(result >501){
	// 		alert ("C'est la retraite !!!!!");
	// 		return false;
	// 	}
	// }

//show a message if obligatory inputs are not filled
	function verifyRental() {
	    var inputRentalv = document.getElementById('inputRental').value;
	    if(inputRentalv=="0")
	    {
	         alert('Veuillez remplir le champ loyer!');
	        document.getElementById('inputRental').focus;
	        return false;
	             
	    }
	    else
	        return true;
	}


 	 
};

