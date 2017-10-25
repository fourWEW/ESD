'use strict';

	// 获取样式的兼容性函数
	// obj哪一个对象   attr需获取的样式
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,null)[attr];
		}
	}
//************************************************
	// 获取或者设置某一元素中的内容
	// 函数名 getText
	// obj 哪一个对象  con设置的内容
	function getText(obj,con){
		if(con==undefined){
			if(obj.innerText){
				return obj.innerText;
			}else{
				return obj.textContent;
			}
		}else{
			if(obj.innerText){
				obj.innerText=con;
			}else{
				obj.textContent=con;
			}
		}
	}
//**************************************************
//获取元素的兼容性函数
//  select  obj
//  select '.box' '#aa' 'span'
//  函数的名称$

function $(select,obj){
	if(typeof select=='string'){//判断传入的实参是否为字符串
		select=select.trim();//去除字符串两端的空格
		var obj=obj||document;//设置Obj的默认值
		if(select.charAt(0)==='.'){//判断传入的字符串是否为类名
			return obj.getElementsByClassName(select.slice(1));//返回相应对象中类名为select.slice(1)的元素集合
		}else if(select.charAt(0)==='#'){//判断传入的字符串是否为ID名
			return obj.getElementById(select.slice(1));
		}else if(/^[a-z|1-6]{1,10}/.test(select)){//正则是否为标签名
			return obj.getElementsByTagName(select);
		}
	}else if(typeof select=='function'){//select是否为一个函数
		window.onload=function(){//文档加载完成后，调用所传入的函数
			select();
		}
	}
}










