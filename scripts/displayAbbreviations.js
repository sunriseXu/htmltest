function displayAbbreviations(){

	var abbreviations=document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;

	var defs=[];
	for(var i =0; i<abbreviations.length; i++){
		var current_abbr=abbreviations[i];
		var definition=current_abbr.getAttribute("title");
		var key = current_abbr.firstChild.nodeValue;
		defs[key]=definition;

	}

	var dlist=document.createElement("dl");
	for(var key in defs){
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);

		var ddesc=document.createElement("dd");
	
		var ddesc_text=document.createTextNode(defs[key]);
		
		ddesc.appendChild(ddesc_text);
		
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);

	}
	var header=document.createElement("h2");
	var header_text=document.createTextNode("abbreviations");
	header.appendChild(header_text);

	var parent=document.getElementsByTagName("body")[0];
	parent.appendChild(header);
	parent.appendChild(dlist);
}
function appendOnload(func){
	var oldonload=window.onload;
	if(oldonload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
appendOnload(displayAbbreviations);