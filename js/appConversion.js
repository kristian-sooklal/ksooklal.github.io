var globalPosition = "";
function encodeAddress(address){
	var geocoder = new google.maps.Geocoder();

	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var latitude = results[0].geometry.location.lat();
			var longitude = results[0].geometry.location.lng();
			globalPosition = latitude + "," + longitude;
		} 
	});
}

function getLatitude(){
	return globalPosition.split(',')[0];
}

function getLongitude(){
	return globalPosition.split(',')[1];
}