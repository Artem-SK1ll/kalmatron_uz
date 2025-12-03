
; /* Start:"a:4:{s:4:"full";s:83:"/local/templates/kalmatron/components/bitrix/news/documents/script.js?1733145030403";s:6:"source";s:69:"/local/templates/kalmatron/components/bitrix/news/documents/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){
	
	$('#documentQueryInput').on('keyup', debounce(function(e){
		$('[data-loading]').addClass('sending');
		$.ajax({
			url: window.location.pathname,
			method: 'GET',
			data: {query:e.target.value},
		}).done(function(html){
			$('.files').html(html);
			$('.bottom_nav').show();
		}).always(function(){
			$('[data-loading]').removeClass('sending');
		})
	}, 400));
	
})
/* End */
;; /* /local/templates/kalmatron/components/bitrix/news/documents/script.js?1733145030403*/
