function showSubmenu(pObj) {
	var cClass = pObj.parentNode.className;
	if (cClass.indexOf("current") > -1) {
		pObj.parentNode.className = cClass.replace("current", "");
	}
	else {
		pObj.parentNode.className += " current";
	}
}