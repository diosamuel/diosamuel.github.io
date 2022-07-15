window.addEventListener('load', function () {
  let window7 = document.querySelector(".drag-element")
  dragElement(window7)
  nyanRun(window7)
  let i=0
  let interval = setInterval(()=>{
  	i++
  	if(i>60) clearInterval(interval)
  	document.body.style.cursor = "wait"
  	setTimeout(()=>{
  	  document.body.style.cursor = ""
    },3000)

  },100)

})

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.querySelector(".title-bar")) {
    /* if present, the header is where you move the DIV from:*/
    document.querySelector(".title-bar").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    document.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function nyanRun(el){
	let img = ["https://c.tenor.com/NyfBk9aD8TkAAAAj/ricardo-flick-under256kb.gif","https://i.kym-cdn.com/photos/images/newsfeed/001/206/382/b7a.gif"]
	let i = -20
	let int = setInterval(()=>{
		i++
		el.style.transform = `translateX(${i*20}px)`
		if(i*20 > window.innerWidth){
			i=-20
			el.querySelector('.window-body img').src = img[Math.floor(Math.random()*img.length)]
		}
	},100)
}

