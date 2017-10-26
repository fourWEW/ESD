'use strict';

$(function(){
		var banner = $('.banner');
		var images = $('.imgBox>li');
        var list = $('.btnBox li');   
        var now = 0;
        var next = 0;
        var bw = images.innerWidth();
        // console.log(widths);
        images.css({left:bw + 'px'}).eq(0).css('left',0);
        var flag = true;
        function move(type='l'){
        	if(!flag){
				return;
			}
			flag=false;
			if(type='l'){
				next++;
				if(next >= images.length){
        			next = 0;
        		}
        		images.eq(now).css('left',0);
        		images.eq(next).css('left',bw + 'px');
        		images.eq(now).animate({left:-bw}, 500);
			}else if(type='r'){
				next--;
				if(next < 0){
        			next=images.length-1;
        		}
        		images.eq(now).css('left',0);
        		images.eq(next).css('left',-bw + 'px');
        		images.eq(now).animate({left:bw}, 500);
			}
        	images.eq(next).animate({left:0}, 500,function(){
        		flag = true;
        	});
        	list[now].classList.remove('active');
			list[next].classList.add('active');
        	now = next;
        }
        var t=setInterval(function(){
			move('l');
		},3000)

		banner.onmouseenter=function(){
			clearInterval(t);
		}
		banner.onmouseleave=function(){
			t=setInterval(function(){
				move('l');
			},3000)
		}
		Array.from(list).forEach(function(val,index){
			val.onclick=function(){
				if(now==index){
					return;
				}else if(now<index){
					next=index-1;
					move();
				}else if(now>index){
					next=index+1;
					move('r');
				}
			}
		})

})