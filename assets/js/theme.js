

function setTheme(theme) {
    if(theme == null)
        return;
    
	Cookies.set("theme",theme);
    $("#stylesheet").attr("href", "assets/css/minified/"+ theme +".css");
    // console.log(getTheme());
}

function getTheme() {
    var t = Cookies.get("theme");
    if(t == null || t == "")
    return "modern";
	return t;
}

$(document).ready(function() {
    // console.log(getTheme());
    setTheme(getTheme());
});