/* JQuery 이용한 현재HTML에 다른 HTML 호출방법 */
$(document).ready(function(){
    $('#header').load('/ezen/header.html')
    $('#footer').load('/ezen/footer.html')
});

// $(document).ready : HTML 코드 모두 렌더링 되었을때
// $(document).ready(function(){}) : 익명함수 실행
// $('선택자') vs document.querySelector( )
// load('불러올 파일경로')

/* 
   $(document).ready(function(){
    $('#divID').load('파일경로')
    $('#divID').load('파일경로')
}) 
*/