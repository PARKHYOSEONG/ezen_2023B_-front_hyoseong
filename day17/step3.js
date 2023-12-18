// 0. 전역변수 [배열]
    //  - 속성[상태] 마다 배열 하나씩 만들면 배열이 너무 많아져 관리 힘들어..
    // 객체지향 나오기전... 여러 속성들을 하나의 배열에서 관리하고 싶다.
        // 1. boardArray = [ ]
            // 하나의 서로다른 유형의 4가지의 데이터 저장하면 인덱스관리가 힘들다.
        // 2. boardArray = ['작성자/비밀번호/제목/내용', '작성자/비밀번호/제목/내용', 작성자/비밀번호/제목/내용']
            // 기준문자 추가해서 여러개의 데이터를 저장한다. // 파일처리
            // 여러 유형의 4가지의 데이터를 하나로 문자열 묶음 *단 구분이 있어야함 [구분문자는 개발자마음]
            // 입력 데이터는 구분 문자가 포함되면 안된다.
            // 단점 분해하고 
/* const writerArray=[];
const passwordArray=[];
const titleArray=[];
const contentArray=[]; */

// 배열안 
const boardArray=[];

// 1.[C] 글쓰기 [글쓰기 버튼을 클릭했을때.]
function 글쓰기(){  // 매개변수 : X // 리턴값 : X
        // § 글쓰기라는 함수를 선언 §
    
    // 1.HTML로 부터 입력받은 값 가져오기
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    // ※ id #~의 밸류값을 불러와서 글쓰기 함수 내 상수명으로 저장

    // 2.배열에 저장하기 
/*  writerArray.push(writer);   console.log(writerArray);
    passwordArray.push(password); console.log(passwordArray);
    titleArray.push(title);    console.log(titleArray);
    contentArray.push(content);  console.log(contentArray); */
    // 한번에 저장하는 방법
    // 순서 : 작성자/비밀번호/제목/내용, 작성자/비밀번호/제목/내용

    // 직접 /로 구분에서 하나로 만들었고 이제는 객체 하나로 만들기
    const board = {작성자 : writer, 비밀번호 : password, 제목 : title, 내용 : content};
    // 객체 내 속성 추가
    board.조회수=0;     // 객체 내 없는 key 호출할때 key 생성   // 이제 등록했으니까 조회수는 0부터 시작


    // 백틱을 사용하고 작성자가 나눌 기준을 설정 위에서 상수명으로 저장한 값을 board 상수에 저장
    boardArray.push(board);      console.log(boardArray);
    // 상수board를 전역배열boardArray에 저장

    // 입력칸 빈칸 만들기
    document.querySelector('#writer').value='';
    document.querySelector('#password').value='';
    document.querySelector('#title').value='';
    document.querySelector('#content').value='';

    // ※ 모든글출력이라는 함수를 호출
    // (등록 버튼을 눌렀을때 글쓰기 함수를 호출하고 글쓰기 함수 내에서 모든글 출력 함수 호출)
    // 3. 배열에 HTML에 출력하기
    모든글출력();
    return;
}
// 2-1.[R] 모든글출력 [1.JS가 열렸을때 2.글쓰기/글수정/글삭제 처리 했을때 새로고침.]
function 모든글출력(){  // 매개변수 : X // 리턴값 : X
    const tableBody = document.querySelector('table>tbody');
        // HTML의 <tbody> 구역을 tableBody라는 이름으로 저장
    let html='';
        // 변수명html을 빈칸으로
        // i의 초기값은 0이고 boardArray배열의 길이가 i보다 크면 아래구문을 반복하며 i값은 1씩 늘어난다.
        // for문과 배열의 인덱스번호 순서는 같음
        // for i는 0에서 시작 ex i가 1일때 boardArray 인덱스도 1
    for(let i=0; i<boardArray.length; i++){
        console.log(boardArray[i]);
        
        console.log(boardArray[i].제목)
            // <tr> 온클릭 개별글출력 함수를 호출
            // <th> for 반복문 안에 있는 i값 = boardArray배열안 인덱스번호
            // 배열[i]를 /기준으로 쪼개고 3번째 값을 불러옴 제목
            // 배열[i]를 /기준으로 쪼개고 0번째 값을 불러옴 작성자
            // 작성자/비밀번호/제목/내용
        html += `<tr onclick="개별글출력(${i})">
                    <th>${i}</th>
                    <th>${boardArray[i].제목}</th>
                    <th>${boardArray[i].작성자}</th>
                    <th>${boardArray[i].조회수}</th>
                </tr>`
        }
    tableBody.innerHTML=html;
    return;

}
// 2-2.[R] 개별글출력 [해당 글을 선택했을때.]
function 개별글출력(index){  // 매개변수 : (대상)보고자하는 번호 // 리턴값 : X
    console.log(index);

    // *조회수 증가
    boardArray[index].조회수 +=1; 모든글출력();
    const borderBox=document.querySelector('#borderBox');
    // - repaceAll('교체할문자열', '새로운문자열')
    // - \n을 <br/>로 변경한다.
    console.log(boardArray[index].내용.replaceAll('\n','<br/>'));
    let html=`<div>작성자 :${boardArray[index].작성자} 조회수 :${boardArray[index].조회수}</div>
                <div>제목 :${boardArray[index].제목}</div>
                <div>내용 :${boardArray[index].내용.replaceAll('\n','<br/>')}</div>
                <input onclick='글수정(${index})' type="button" value="수정">
                <input onclick='글삭제(${index})' type="button" value="삭제">`;
    borderBox.innerHTML=html;
    console.log(borderBox);
    return;

}
// 3.[U]글수정 [글수정 버튼을 클릭했을때.]
function 글수정(index){  // (대상)수정할 식별번호 // 리턴값 : X
    console.log(index);
    // 1. 검증[유효성검사] - 패스워드를 입력받아 해당 게시물의 패스워드와 동일하면
    const checkPw=prompt('비밀번호');
    if(checkPw==boardArray[index].비밀번호){
        const updateTitle=prompt('수정할제목')
        const updateContent=prompt('수정할내용')
        // 수정처리[기존데이터와 새로운데이터 다시 합쳐서 수정]
        console.log(boardArray[index])
        boardArray[index].제목=updateTitle;
        boardArray[index].내용=updateContent;
        alert('수정 성공');
        // 새로고침
        모든글출력();
        개별글출력(index);
    }else{alert('패스워드가 다릅니다. 수정 불가.')}
    return;

}
// 4.[D]글삭제 [글삭제 버튼을 클릭했을때.]
function 글삭제(index){ // (대상)삭제할 식별번호 // 리턴값 : X}
    console.log(index);
    const checkPw=prompt('비밀번호');
    if(checkPw==boardArray[index].비밀번호){
        // 삭제처리
        boardArray.splice(index,1);
        alert('삭제 성공');
        // 새로고침
        모든글출력();
        document.querySelector('#borderBox').innerHTML=''; // 개별글 보기 구역 초기화

    }
    else{alert('패스워드가 다릅니다. 삭제 불가.')}
    return;

}
/* 
    함수 만들때 고민할점
        1. 언제 실행하는 함수인지? 
        2. 함수 안으로 넣을 매개변수?
        3. 함수 밖으로 반환할 값?
        4. 무엇을 실행 하는지?
*/