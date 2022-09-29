function copyText(htmlElement){
	if(!htmlElement){
		return;
	}
	let elementText = htmlElement.innerText;
	let inputElement = document.createElement('input');
	inputElement.setAttribute('value', elementText);
	document.body.appendChild(inputElement);
	inputElement.select();
	document.execCommand('copy');
	inputElement.parentNode.removeChild(inputElement);
}
document.querySelector('#bt1').onclick = 
function()
{
	copyText(document.querySelector('#text'));
}
