function displayAbbreviations(){
	var abbreviations=document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;
	var defs=[];
	for(var i =0; i<abbreviations.length; i++){
		var definition=abbreviations[i].getAttribute("title");
		
	}
}