function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	//alert(source);
	if(document.getElementById("description")){
		var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):'';
		//alert(text);
		var description=document.getElementById("description");
		//alert(description.firstChild.nodeType);
		if(description.firstChild.nodeType==3){
			description.childNodes[0].nodeValue=text;
		}
	}
	return true;
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
	//alert("prepared1");
	if(!document.getElementsByTagName){
		alert("getElementsByTagName false"); 
		return false;
	}
	//alert("prepared2");
	if(!document.getElementById("imagegallery")){
		return false;
	}
	
	var gallery=document.getElementById("imagegallery");//element object
	//alert(gallery.nodeType);
	var links = gallery.getElementsByTagName("a");
	//alert(links.length);
	
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

function prepareplaceholder(){
	
	var imgnode=document.createElement("img");
	
	imgnode.setAttribute("id","placeholder");
	//alert("initial");
	imgnode.setAttribute("src","images/placeholder.jpg");
	imgnode.setAttribute("alt","this is placeholder");
	var para=document.createElement("p");
	var text=document.createTextNode("choose an image");
	para.setAttribute("id","description");

	var placeholderdiv=document.getElementById("placeholderdiv");
	para.appendChild(text);
	//alert(text.nodeValue);
	placeholderdiv.appendChild(imgnode);
	placeholderdiv.appendChild(para);


}







window.onload=function(){
	
	preparelinks();
	preparegallery();
	prepareplaceholder();

};
window.onkeypress=window.onclick;