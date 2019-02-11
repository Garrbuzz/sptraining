window.onload = function(){
	let login = document.querySelector('#butLogin');
	login.onclick = function(){
		let name = document.querySelector('#login');
		let pass = document.querySelector('#pass');
	
		
		fetch('./php/test.php', {method:"POST", headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, body: "name=" + encodeURIComponent(name.value) + "&pass=" + encodeURIComponent(pass.value)})  
		  .then(  
		    function(response) {  
		      if (response.status !== 200) {  
		        console.log('Looks like there was a problem. Status Code: ' +  
		          response.status);  
		        return;  
		      }

		      // Examine the text in the response  
		      response.json().then(function(data) {  
		        console.log(data);  
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });
		
	};

}