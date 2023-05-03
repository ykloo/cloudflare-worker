export default {
	async fetch(request) {
	
	  let country = request.cf.country;
	  let asn = request.cf.asn;
	  let ip = request.headers.get("CF-Connecting-IP");

	  if (country != 'SG'){
		return Response.redirect("https://1.1.1.1/")
	  }

	
	  console.log(request)	
	  return new Response(`This is your IP Address: ${ip} and you are accessing this site from ${country} | ${asn}`)
	},
  };