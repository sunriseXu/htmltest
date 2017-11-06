function displayAbbreviations(){
	
	if(!document.getElementsByTagName ||
		!document.createElement || 
		!document.createTextNode) return false;

	var abbreviations=document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;

	var defs=[];
	for(var i =0; i<abbreviations.length; i++){
		var current_abbr=abbreviations[i];
		if(current_abbr.childNodes.length < 1) continue;
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
	if(dlist.childNodes.length<1) return false;
	var header=document.createElement("h2");
	var header_text=document.createTextNode("abbreviations");
	header.appendChild(header_text);

	var parent=document.getElementsByTagName("body")[0];
	parent.appendChild(header);
	parent.appendChild(dlist);
}

function displayCitations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;

	var quotes=document.getElementsByTagName("blockquote");
	for(var i = 0; i < quotes.length; i++){
		if(!quotes[i].getAttribute("cite")) continue;
		var url = quotes[i].getAttribute("cite");
		var quoteChildren = quotes[i].getElementsByTagName('*');
		if(quoteChildren.lenth<1) continue;
		var elem = quoteChildren[quoteChildren.length-1];
		var link = document.createElement("a");
		link.setAttribute("href",url);
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);

		var superscript=document.createElement("sup");
		superscript.appendChild(link);

		elem.appendChild(superscript);
	}
}
function displayAccesskey(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	var links=document.getElementsByTagName("a");
	if(links.length<1) return false;
	var accesskeys=[];
	for(var i=0; i<links.length; i++){
		if(!links[i].getAttribute("accesskey")) continue;
		var key = links[i].getAttribute("accesskey");
		accesskeys[key]=links[i].firstChild.nodeValue;

	}
	if(accesskeys.length<1) return false;
	var ulist=document.createElement("ul");
	for(key in accesskeys){
		var listnode=document.createElement("li");
		var listnode_text=document.createTextNode(key+" "+accesskeys[key]);
		listnode.appendChild(listnode_text);
		ulist.appendChild(listnode);
	}
	var accesskeytitle=document.createElement("h2");
	var accesskeytitle_text=document.createTextNode("accesskeys");
	accesskeytitle.appendChild(accesskeytitle_text);
	var parent=document.body;
	parent.appendChild(accesskeytitle);
	parent.appendChild(ulist);
}


function appendOnload(func){
	var oldonload=window.onload;
	if(typeof oldonload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
appendOnload(displayAccesskey);
appendOnload(displayAbbreviations);
appendOnload(displayCitations);
