'use strict';

$(function(){

	for(var i=0;i<1;i++){
		slideshow(i);
	}

	function slideshow(a){

		var images=$('li',$('.imgBox')[a]);
		var bw=parseInt(getComputedStyle($('.banner')[0],null)['width']);
		// var bw=parseInt(getStyle($('.banner')[0],'width'));
		var banner=$('.banner')[a];
		var list=$('li',$('.btnBox')[a]);

		for(var i=1;i<images.length;i++){
			images[i].style.left=bw+'px';
		}
		// Array.from(images).forEach(function(val,index){
		// 	if(index!=0){
		// 		val.style.left=bw+'px';
		// 	}
		// })
		
		var now=0;
		var next=0;
		var flag=true;
		function move(type='l'){
			if(!flag){
				return;
			}
			flag=false;
			if(type=='l'){
				next++;
				if(next>=images.length){
					next=0;
				}
				images[now].style.left=0+'px';
				images[next].style.left=bw+'px';
				animate(images[now],{left:-bw},300);
			}else if(type=='r'){
				next--;
				if(next<0){
					next=images.length-1;
				}
				images[now].style.left=0+'px';
				images[next].style.left=-bw+'px';
				animate(images[now],{left:bw},300);
			}
			animate(images[next],{left: 0},300,function(){
				flag=true;
			});
			list[now].classList.remove('active');
			list[next].classList.add('active');
			now=next;

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
		
	}

})