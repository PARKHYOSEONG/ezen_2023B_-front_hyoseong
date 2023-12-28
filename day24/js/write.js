// [1] 피드/게시물 등록함수 {피드 게시버튼을 클릭했을때}
function 피드등록(){
    // 1.[입력] 각 요소의 입력 값을 호출
    const fpwd=document.querySelector('input').value;
    const fcontent=document.querySelector('textarea').value;
   
        // 유효성검사
        if(fpwd.length<1){alert('패스워드를 입력해주세요.'); return;}
        if(fcontent.length<1){alert('내용을 입력해주세요.'); return;}
        if(imgByte==''){alert('대표이미지를 등록해주세요.'); return;}

    // 3. 기존 localStorage 호출 [!! : localStorage 문자열만 저장이 가능]
    let feedList=JSON.parse(localStorage.getItem('feedList'));
    if(feedList==null){feedList=[]};    // 만약에 localStorage에 값이 없으면 배열 선언

    // 2. 객체화[설계]
    const feed=
    {
        fno: feedList.length>=1?feedList[feedList.length-1].fno+1:1, // [!] 게시물번호를 자동으로 순차적으로 배정 [마지막게시물의 fno]
        fimg: imgByte, // [!] input file로 등록된 사진
        fdate: new Date(),      // new Date() : 현재날짜.시간 호출
        fcontent: fcontent.replaceAll('\n','<br/>'),    // 문자열.replaceAll('교체할문자', '새로운문자')
        fgood: 0,
        fbad: 0,
        fpwd: fpwd
    }

    // 4. 피드 목록에 등록할 피드
    feedList.push(feed);
    
    // 5. localStorage에 저장
    localStorage.setItem('feedList',JSON.stringify(feedList));

    // 6. 등록 성공 시
    alert('피드게시 성공'); location.href='index.html';
}   // f end

// 전역변수로 선언
let imgByte='';

// [2] 이미지 등록함수 (input(file)에서 첨부파일을 등록할때마다.)
function 이미지등록(event){
    // [!] event : 이벤트를 발생한 결과정보객체
    console.log(event.target.files[0]);    // input type file 속성 일때만 가능한 속성

    // [1] 첨부파일 input에 등록된 파일을 바이트 가져오기
        // 1. 파일 읽기 클래스[객체 설계도]. new FileReader()
    let 파일읽기객체=new FileReader(); // 파일 읽기 객체 생성
        // 2. 파일을 JS로 읽어들이기.
    파일읽기객체.readAsDataURL(event.target.files[0]);
        // 3. 읽어온 바이트를 img태그에 출력
    파일읽기객체.onload=function(){
        document.querySelector('#fileImg').src=파일읽기객체.result;
        imgByte=파일읽기객체.result;    // 이미지바이트를 전역변수로 대입
    }
}