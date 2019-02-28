$(function(){
	var current = window.location.href;
	$('ul.navbar-nav li a').each(function(){
		var $this = $(this);
		if($this.attr('href') == cureent){
			$this.parents('li').addClass(active);
		}
	});
});