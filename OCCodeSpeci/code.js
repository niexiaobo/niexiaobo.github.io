$(document).ready(function(){

 	$("#menu ul li").each(function(){
 		
     	$(this).	hover(function(){
     		var index1 = $(this).index();
     		
     		$("#menu ul li").each(function(){
     			var index0 = $(this).index();
     			if (index0 == index1) {
     				$(this).css("color","red");
     				$(this).css("background-color","red");
     				$(this).children().css("color","white");
     			} else{
     				$(this).css("color","black");
     				$(this).css("background-color","white");
     				$(this).children().css("color","black");
     			}
     		});
     		
     		
     		
     		$("#main div").each(function(){
     			var index2 = $(this).index();
     			if (index2 == index1) {
//   				alert(2);
     				$(this).show();
     			} else{
     				$(this).hide();
     			}
     		});
   		});
 	});
			});