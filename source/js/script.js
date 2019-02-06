window.onload = function(){
	var result = 0;
	var questions = document.querySelectorAll('input');
	var sendButton = document.querySelector('button');
	sendButton.onclick = function(){
		for (i=0; i<questions.length; i++){
			if(questions[i].checked){
				result = result+Number(questions[i].value);
			}
		}
		alert('Результат' + ' :'+ ' ' + result);
		result=0;
	}
	
}