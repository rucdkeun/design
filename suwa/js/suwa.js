// JavaScript Document
 /*************************************************메뉴시작↓*********************************************/
$(function(){
	$("#kygnb li a").click(function(e) {
        $("html, body").animate({scrollTop:$($(this).attr('href')).offset().top}, 800);
		return false;
    });
	});
 /*************************************************메뉴 끝*********************************************/	
 /*************************************************배너시작↓*********************************************/
$(function(){

  var atags="";
  for(var i=0; i< $("#dataList li").length; i++){
   atags+="<a href=\"\"></a>";
  }
  $(".btns").html(atags);
  $(".btns a:eq(0)").addClass("active");
  $("#imgWrap li").width($(window).width());//화면너비에 맞춰서 할때만
 var aniW=$("#imgWrap li").width();
 //슬라이딩너비값으로  #imgWrap li 너비지정
 var count=0; //테이터순번과 버튼활성화순번으로 이용
 function aniRoll(dir){ 
  //방향지정할 수 있는 슬라이딩함수
    $("#imgWrap").stop(true, true)//클릭를 중요할때는 
  //애니메이션이 중요할때는 $("#imgWrap:not(:animated)")
  $("#imgWrap").stop(true, true).animate({"marginLeft":dir*aniW+parseInt($("#imgWrap").css("margin-left"))},1000,function(){ 
   if(dir==-1){ //왼쪽으로 
   $("#imgWrap li:first-child").appendTo($("#imgWrap"));  //li의 위치변경 (첫번째 li를 마지막 li로 만들기)
   }else{ //오른쪽으로
   $("#imgWrap li:last-child").prependTo($("#imgWrap"));  //li의 위치변경 (마지막 li를 첫번째 li로 만들기)
   }
  $("#imgWrap").css("margin-left",-aniW);
  //원래위치로
  });
 } ////aniRoll마침
function dataLoad(c, pos){//테이터를 초기화하고 넣는 함수
  //#dataList c순번인  li의 안의 태그를
  //#imgWrap 의 pos li에게 초기화하고 넣어라.
  $("#imgWrap li:"+pos+"").html($("#dataList li:eq("+c+")").html());  
}
 function btnAct(c){ // 버튼활성화 함수
  //$("#toggleBtn").prop('checked',true);
  //stop/play 토글버튼의 상태제어하기_플레이모양으로 전환
  $(".btnWrap a").removeClass("active");
  //버튼리스트모두 스타일없애라
  $(".btnWrap a:eq("+c+")").addClass("active");
  //그리고 그중한 지정된 하나만 스타일을 입혀라
 }
 
 var rollAuto=setInterval(function(){
  aniRoll(-1); //왼쪽으로 슬라이딩애니
  if(count<$("#dataList li").length-1) count++; else count=0; //count를 증가시켜서 테이터변화를 준다.
  //
    dataLoad(count, "last-child"); //변화된 테이터호출
    btnAct(count); //리스트활성화
  }, 3000); //정지하기 위해서 변수를 지정해준다.
  
   function toggleChk(){
  
    if($("#toggleBtn").hasClass("chk")){ 
 //플레이모양이라면     
    clearInterval(rollAuto); 
    // 자동롤링멈춰
     
    }else{ //일시정지모양이라면
     
      rollAuto=setInterval(function(){
        aniRoll(-1);
      if(count<$("#dataList li").length-1) count++; else count=0;
      dataLoad(count, "last-child"); //테이터호출
        btnAct(count); //리스트활성화
      }, 3000); //정지하기 위해서 변수를 지정해준다.
        //자동롤링다시 
    }
   } ////toggleChk()마침

 $(".btnL, .btnR").click(function(e) { 
 //앞뒤버튼을 클릭했다면
  
  $("#toggleBtn").addClass('chk'); 
  //play모양으로 노출(자동롤링멈춤)
  //제이쿼리  1.6이상서부터  attr과 분가함
  toggleChk(); //위의 태그때문에 자동롤링이 멈춰진다.
  if($(this).hasClass("btnR")){
    //오른쪽 버튼
   aniRoll(-1); //왼쪽방향으로 
     
  if(count<$("#dataList li").length-1){ count++;} 
  else { count=0;}
  
  dataLoad(count, "last-child"); //테이터호출
      
  }else{
   aniRoll(1); //왼쪽방향으로
  
   if(count>0){ count--;}    
   else { count=$("#dataList li").length-1; }
    
   dataLoad(count, "first-child"); //테이터호출
  }
  
  btnAct(count); //리스트활성화
        return false;  //a 태그의 href기능을 마비시켜라.
    });
 $(".btnWrap a").click(function(e) { //버튼리스트
  
   $("#toggleBtn").addClass('chk');//play버튼으로
   toggleChk();  //위의 태그로   if실행 자동롤링멈춤
   count=$(this).index(); 
  //버튼과 테이터동시 연동시킬 변수  count에 대입해서 쓴다.
   btnAct(count); //버튼활성화  
   dataLoad(count, "last-child");
   aniRoll(-1);  
   return false; 
    });
  $("#toggleBtn + label").click(function(e) {
   $("#toggleBtn").toggleClass("chk");
   toggleChk(); 
   //위에 태그에 맞춰   if  혹은   else  번갈아가면서 실행시킨다. 
  });
 /*************************************************배너끝*********************************************/
//베스트셀러
for (let element of document.querySelectorAll(".typing")) {
	let length = element.textContent.length;
	element.style.setProperty("--length", length);
} 
/*************************************************맨컬렉션 시작↓*********************************************/
 $(".ct1_r li a").click(function(e) {
					$(".ct1_l").css('background-image','url('+$("img",this).attr("src")+')');
                    return false;
                });
});////ready이벤트마침


				
