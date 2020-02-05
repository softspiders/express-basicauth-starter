const isBrowser = typeof window !== "undefined" && window.fetch
const fetch = isBrowser ? window.fetch : require("cross-fetch");

const user = {username: "username", password: "password"}
// const user = {username: "username", password: "wrongpassword"}

function getRequest(url) {
	return fetch(url, {
		headers: {
      "Authorization": user.username + ":" + user.password
    }
	})
		.then(response => {
			if (response.status === 401) {
      	console.log(response.statusText);
    	} else {
	    	response.json()
	    	.then(json => {
					console.log(json);
					return json;
				})
					.catch(err => {
				    console.log(err)
  				});
			}
		})
		
};

getRequest('http://localhost:3000/api');