const fetch = require("cross-fetch");

const authorizedUser = {username: "username", password: "password"};
const unauthorizedUser = {username: "username", password: "wrongpassword"};

function getRequest(url, user) {
	return fetch(url, {
		headers: {
      "Authorization": user.username + ":" + user.password
    }
	})
		.then(response => {
			if (response.status === 401) {
				console.log(response.statusText);
				return response.statusText;
			} else {
				return response.json()
		    	.then(json => {
						console.log(json);
						return json;
					})
					.catch(err => {
				    console.log(err);
  				});
				}
		});
};

//Access denied
getRequest('http://localhost:3000/api', unauthorizedUser);

//Access granted
getRequest('http://localhost:3000/api', authorizedUser);

exports.getRequest = getRequest;