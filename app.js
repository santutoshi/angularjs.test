(function(){
	'use strict';
    
	angular.module('myFristApp', [])

	.controller('MyFristController', function($scope){
 		$scope.name="santos";
	});
})();




/*var student ={
	name: "", 
	type: "student"
};
document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
	document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
	// body...
	calculateNumericOutput();
}

function calculateNumericOutput(){
	student.name =document.getElementById('name').value;
	var totalNameValue =0; 
	for (var i = 0; i < student.name.length; i++) {
		totalNameValue +=student.name.charCodeat(i);
	}

	//Insert result into page
	var output ="total Numeric value of the person's name is " + totalNameValue;
	document.getElementById('output').innerText =output;
}*/