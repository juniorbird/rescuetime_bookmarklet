var rtURL = "https://www.rescuetime.com/anapi/highlights_post";
var rtApiKey = YOUR_API_KEY_HERE;

var highlight = "";
var today = new Date();
var todayY = today.getFullYear().toString();
var todayM = today.getMonth().toString();
var todayD = today.getDate().toString();
var date = todayY + "-" + todayM + "-" + todayD;

function postHighlight(message) {
	var url = new URL(rtURL);
	var params = new URLSearchParams();

	params.append("key", rtApiKey);
	params.append("highlight_date", date);
	params.append("description", message);
	params.append("source", "Work Log");

	fetch(url, {
		method: "POST",
		body: params,
	})
		.then(function(res) {
			console.log("result", res);
		})
		.catch(function(err) {
			console.error("err", err);
		});
}

function makeForm() {
	var div;
	if ((div = document.getElementById("rtbkmklt"))) {
		div.innerHTML = "";
	} else {
		div = document.createElement("div");
		div.id = "rtbkmklt";
		div.style.position = "fixed";
		div.style.top = "10px";
		div.style.right = "10px";
		div.style.backgroundColor = "rgba(0,0,0,.7)";
		div.style.borderRadius = "5px";
		div.style.color = "#fff";
		div.style.padding = "6.5px 15px";
		div.style.zIndex = "999";
		div.style.transition = "1s all ease-in-out";
	}

	var hed = document.createElement("div");
	hed.style.display = "flex";
	hed.style.justifyContent = "space-between";
	hed.style.margin = "1.5vh 1.5vw";

	var h1 = document.createElement("h1");
	h1.innerText = "Post a Highlight";
	h1.style.fontSize = "16px";
	h1.style.marginBottom = "5px";

	var close = document.createElement("a");
	close.innerText = "X";
	close.style.fontSize = "1.5em";
	close.style.height = "1.2vh";
	close.style.width = "1.2vw";
	close.addEventListener("click", function(e) {
		div.remove();
	});
	hed.appendChild(h1);
	hed.appendChild(close);

	var button = document.createElement("button");
	button.style.fontSize = "18px";
	button.style.padding = "5px 2px";
	button.style.width = "100%";
	button.innerText = "Post Highlight";
	button.addEventListener("click", handleClick, false);

	var form = document.createElement("form");
	form.id = "rtbkmkltForm";
	var field = document.createElement("textarea");
	field.id = "rtbkmkltInput";
	field.rows = "5";
	field.cols = "33";
	field.placeholder = "What awesome thing did you just do?";
	field.autofocus = true;
	form.appendChild(field);

	div.appendChild(hed);
	div.appendChild(form);
	div.appendChild(button);
	document.body.appendChild(div);
}

function handleClick(e) {
	var div = document.getElementById("rtbkmklt");
	var form = document.getElementById("rtbkmkltForm");
	var el = form.elements[0];
	var val = el.value;
	console.log("form", form, "el", el, "val", val);
	div.remove();
}
