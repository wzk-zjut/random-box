// JavaScript Document
//生成10个方块
var container = document.getElementById('container');
var array = [];
for(var i=0;i<10;i++){
	var r = Tools.getRandom(0,255);
	var g = Tools.getRandom(0,255);
	var b = Tools.getRandom(0,255);
	var box = new Box(container,{
		backgroundColor : 'rgb('+r+','+g+','+b+')'
	});
	array.push(box);
}

setInterval(randomBox,500);
randomBox();
function randomBox(){
	for(var i=0;i<array.length;i++){
		var box = array[i];
		box.random();
	}
}