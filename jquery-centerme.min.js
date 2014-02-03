
$.fn.centerHorizontal = function () {
	this.css('left', $(window).width()/2 - $(this).width()/2);
};
$.fn.centerVertical = function () {
	this.css('top', $(window).height()/2 - $(this).height()/2);
};
$.fn.centerBoth = function () {
	this.css('left', $(window).width()/2 - $(this).width()/2);
	this.css('top', $(window).height()/2 - $(this).height()/2);
};