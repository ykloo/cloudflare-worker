export default {
	async fetch(request) {
		let country = request.cf.country;
		let asn = request.cf.asn;
		let ip = request.headers.get("CF-Connecting-IP");
  
		if (country != 'SG'){
		  return Response.redirect("https://1.1.1.1/")
		}
  
		let html_content = "";
		let html_style =
		"body{padding:6em; font-family: sans-serif;} h1{color:#f6821f;}";

		html_content += "<p> This is your IP Address: " + ip + " and you are accessing this site from " + country + " | " + asn + "</p>"
 
		let html = `<!DOCTYPE html>
		<head>
		  <title> User Information </title>
		  <style> ${html_style} </style>
		</head>
		<body>
		  <h1>User Information</h1>
		  ${html_content}
		</body>`;
  

		return new Response(html, {
			headers: {
			  "content-type": "text/html;charset=UTF-8",
			},
		});	  
	
	},
  };