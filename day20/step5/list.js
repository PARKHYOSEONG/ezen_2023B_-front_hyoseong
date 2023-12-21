list()
function list(){    //실행조건 : JS가 열렸을때
        console.log('list함수')
    // 1.입력
    const board=document.querySelector('#board');
    // 2.처리
    let html='';
    let boardArray=JSON.parse(localStorage.getItem('boardArray'));
    for(i=0; i<boardArray.length; i++){ console.log(boardArray[i])
        html+=`<div>
                    ${boardArray[i].제목}
                    ${boardArray[i].작성자}
                    ${boardArray[i].내용}
                </div>`}
    board.innerHTML=html;
}