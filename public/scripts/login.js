function login() {
    window.localStorage.setItem('login', 'true');
    update_links();
}

function update_links() {
	var logged_in = window.localStorage.getItem('login')
	if (logged_in === 'true') {
    		document.querySelectorAll("div.mynav > a").forEach(function(el) {
        	el.href = el.href + "?login=true";
			console.log(el.href);
   	 })
	} else {
    		document.querySelectorAll("div.mynav > a").forEach(function(el) {
        	el.href = el.href + "?login=false";
					console.log(el.href);
    	})
	}
}

function logout() {
	window.localStorage.setItem('login', 'false');
    update_links();
}