const isBrowser = typeof window !== "undefined" && window.fetch
const fetch = isBrowser ? window.fetch : require("cross-fetch");

function getRequest(url) {
	return fetch(url, {
		headers: {
      "Authorization": "1223"
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