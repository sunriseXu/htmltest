function showPic(whichpic){
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	source = whichpic.getAttribute("title");
	var description=document.getElementById("description");
	description.childNodes[0].nodeValue=source;
}
function countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}
function popUp(mylink){
	window.open(mylink,"popup", "height=300,width=300");
}

function preparegallery(){
	//alert("initial preparegallery");
	if(!document.getElementById){
		alert("getElementById false"); 
		return false;
	}
	alert("prepared1");
	if(!document.getElementsByTagName){
		alert("getElementsByTagName false"); 
		return false;
	}
	alert("prepared2");
	if(!document.getElemmentById("imagegallery")){
		alert("getElement imagegallery false"); 
		//return false;
	}
	alert("prepared");
	var gallery=document.getElementById("imagegallery");//element object
	var links=gallery.getElementByTagName("a");//"a" element array
	for(var i=0; i<links.length;i++){
		if(links[i].getAttribute("class")=="showpic"){
			links[i].onclick=function(){
				showPic(this);
				return false;
			}
		}
	}
}





//window.onload=countBodyChildren;
function preparelinks(){//window.onload is being overwrite, so countBodyChildren will not be executed.
	//alert("initial preparelinks");
	if(!document.getElementsByTagName) return false;//old browser may not have the function, so we return.
	var links=document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		if(links[i].getAttribute("class")=="popup"){
			links[i].onclick=function(){
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}  
window.onload=function(){
	preparelinks();
	preparegallery();
};
