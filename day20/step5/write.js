/* 
    Day17 step3을 Day20 step5 제출
        기능별 페이지 전환
        단 localStorage 사용
        1. 글쓰기 페이지
        2. 글출력 페이지
    ================== 추가기능 ==================
        3. 글상세 페이지[글출력 페이지에서 클릭된 게시물 정보를 보여주는 상세페이지]

    ================== localStorage ==================
            .getItem : 저장된 값을 추출
            .setItem : 값을 저장
            .removeItem : 값을 삭제
            .clear : 저장된 모든 값을 삭제

*/

/*  
    글쓰기 버튼을 클릭 했을때 bWrite 함수를 실행한다.
    함수가 실행 됐을때 내가 입력했던 값을 어떠한 곳에 저장해야 한다.

    저장을 하려면 우선 값을 불러와야 한다. document.querySelector
    불러온 값을 객체로 저장한다. 변수/상수명={키:값, 키:값}
    저장한 객체를 localStorage에 boardArray키 이름으로 저장한다.
        근데 객체로 저장하면 못읽으니까 문자로 바꾸어서 localStorage에 저장한다.
        그걸 boardArray 변수로 선언한다.
    -----ing

*/

function bWrite(){
    console.log('글쓰기( )함수')
    
    // 1.입력
    const writer=document.querySelector('#writer').value;
    const password=document.querySelector('#password').value;
    const title=document.querySelector('#title').value;
    const content=document.querySelector('#content').value;

    // 2.처리
        // 입력된 값을 객체로 저장한다.
    const board={
        작성자:writer,
        비밀번호:password,
        제목:title,
        내용:content
    }
        console.log(board);

        // boardArray라는 키를 localStorage에서 추출하는것을 boardArray변수에 저장한다.
    let boardArray=JSON.parse(localStorage.getItem('boardArray'));
        console.log(boardArray); // null
    if(boardArray==null){boardArray=[]}
    boardArray.push(board);
        // 저장된 객체를 localStorage를 사용하여 넣어준다.
    localStorage.setItem('boardArray',JSON.stringify(boardArray));
}