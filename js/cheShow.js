function init() {
	requestData();
}
//发送请求
function requestData(){
	
$.getJSON("http://oa.mgogo.com/chefu/interface/get_two_type_home.php",
  {
    cateid:"1",
    subid:"8"
  },
  function(data,status){
  	listData =data;//转换为json对象 
  	
    $.each(data.data.news_data,function(idx,item){ 
//	if(idx==0){ 
//	return true;//同countinue，返回false同break 
//	} 
//	alert(item.f_id); 
//var temsk = $("img.listimg")[0];
//temsk.attr('src',item.fm_pic);
//	$('#'+ "listimg" +idx).attr('src',item.fm_pic);
//	$('#'+"listname"+idx).text(item.f_title);
//修改标题
	$("div.mainDiv div:first").children("p").text(item.f_title);
	//更新封面图
	$("div.mainDiv div:first").children("div.div-b").children("img.imgreSize").attr('src',item.fm_pic);
//	$("div.mainDiv div:last img.imgreSize").attr('src',item.fm_pic);
//	$("div.mainDiv div:last p#listname1").text(item.f_title);
	//追加模型
	$("div.mainDiv").append($("div.mainDiv div:first").clone(true));
//	var divCell = $("div.mainDiv div:last").clone(true);
//	var divNew = $(divCell).children(div.div-b).children(img).attr("id","listimg"+idx+1);
	
//	$("div.mainDiv").append("<div class="div-relative"><div class="div-b"><img id="listimg1" class="imgreSize" src="img/img15.jpg" /></div><div class="div-c"><img width="50" src="img/playGray.png" /></div><p id="listname1">昂山素季打</p></div>");
	
	
	}); 
	//删除最后一个
	$("div.mainDiv div:first").empty();
	$('#'+ "listimg" +idx).css("width", 300);
	
  	});
  	
//	$("div.div-relative").click(function(){
//		location.href="htmlSub/VideoPlay.html";//发送txt
//	}
  $(".div-relative").click(function(){
//	alert(listData.data.news_data[0].f_id);
//if(window.localStorage){
//  alert('This browser supports localStorage');
//  localStorage.fid = $('input["name"="name"]').val();
//}else{
//  alert('This browser does NOT support localStorage');
//}
   location.href="htmlSub/VideoPlay.html";//发送txt
  });
 }
$(document).ready(function(){
	var listData;
  
});
