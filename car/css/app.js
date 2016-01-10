$(document).ready(function() {
        var count=1;
		var audio = document.getElementById('media');  
		//音乐播放
		$('#audio_btn').on('click',function(){
		   if($(this).hasClass('rotate')){
			 $(this).removeClass("rotate");
			 audio.pause();
		   }else{
			 $(this).addClass("rotate");
			 audio.play();
		   } 
		 });


		$('.onTouch').click(function(){
            var length=$(this).siblings('div').find('img').length;
         	$(this).siblings('div').find('img').hide();
            $(this).siblings('div').find('img:eq('+(count-1)+')').show();
            if(count==length){
            	count=1;
            }else{
            	count++;
            }
       })

		$('.onFx').click(function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});	
			//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

})
		

