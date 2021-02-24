// Setting up a list control for the settings property 'theme' w/ callbacks
var settingThemeNames = ["(none)", "Bright Lights", "Charcoal", "Midnight", "Tinsel City"];
var settingThemeHandler = function () {
	// cache the jQuery-wrapped <html> element
	var $html = $("html");

	// remove any existing theme class
	$html.removeClass("theme-bright-lights theme-charcoal theme-midnight theme-tinsel-city");

	// switch on the theme name to add the requested theme class
	switch (settings.theme) {
	case "Bright Lights":
		$html.addClass("theme-bright-lights");
		break;
	case "Charcoal":
		$html.addClass("theme-charcoal");
		break;
	case "Midnight":
		$html.addClass("theme-midnight");
		break;
	case "Tinsel City":
		$html.addClass("theme-tinsel-city");
		break;
	}
};
Setting.addList("theme", {
	label    : "Choose a theme.",
	list     : settingThemeNames,
	onInit   : settingThemeHandler,
	onChange : settingThemeHandler
}); // default value not defined, so the first array member "(none)" is used


//Changing of Fonts
var settingFontNames = ["Default", "Comic Sans", "Verdana", "OpenDyslexic"];
var settingFontHandler = function () {
    var $html = $("html");

    $html.removeClass("font-comicsans font-verdana font-opendyslexic");

	switch (settings.font) {
    case "ComicSans":
        $html.addClass("comicsans");
        break;
    case "Verdana":
        $html.addClass("verdana");
        break;
    case "OpenDyslexic":
        $html.addClass("opendyslexic");
        break;
    }
};
Setting.addList("font", {
label    : "Change the font",
list     : settingFontNames,
onInit   : settingFontHandler,
onChange : settingFontHandler
});



//Change Font Size
var settingFontSizeNames = ["Default", "Medium", "Large"];
var settingFontSizeHandler = function () {
var $html = $("html");

    $html.removeClass("fontsize-medium fontsize-large fontsize-very-large");

    switch (settings.fontsize) {
    case "Medium":
        $html.addClass("fontsize-medium");
        break;
    case "Large":
        $html.addClass("fontsize-large");
        break;
}
};
Setting.addList("fontsize", {
label    : "Change the font size",
list     : settingFontSizeNames,
onInit   : settingFontSizeHandler,
onChange : settingFontSizeHandler
}); 
