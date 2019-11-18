$(function(){
            $(".leftMenu li").click(function(){
            			$(this).addClass("current").siblings().removeClass("current")
            			})
            	})
        		$('#leftF').click(function(){
                	$('.yqm').show();
					$('.msg').hide();
        		})
        		$('.fr').click(function(){
                	$('.yqm').hide();
        		})
        		$('.sure').click(function(){
					var incode = $(".yqmInp").val();
					$.ajax({
                        url:'/space/validate.shtml?incode='+incode+'&time='+new Date().getTime(),
                        type: 'get',
                        dataType: 'json',
                        success: function(data) {
							if(data.success){
                    			$.ajax({
                                    url:'/space/incode_site.shtml?incode='+incode+'&uid=84553570&fid=10905&time='+new Date().getTime(),
                                    type: 'get',
                                    dataType: 'json',
                                    success: function(json) {
                            			if(json.success){
											$('.msg').hide();
											$('.yqm').hide();
                            				window.location.href='/space/index.shtml';
                            			}
                                    }
});
			}else{
				$('.msg').show();
				$('.yqm').show();
		    }
        }
    });
})
$('iframe').iFrameResize([{log: true}]);