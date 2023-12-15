/* 
주제 : 가계부
[조건] 배열 3개 사용.
    등록함수    출력함수    삭제함수
[1.입력]
    날짜    항목    금액
    3가지 항목 입력 후 등록 버튼 클릭하면 저장
[2.출력]
    날짜    항목    금액 출력
    저장된 배열내 모든 요소
[3.삭제]
    선택한 항목을 삭제
[4.총합계]
    총합계
======== 추가 요구사항 ========
1.  CSS간단하게
2.  천단위 쉼표 만들어주는 함수 [JS에서 제공하는 함수X]
3.  날짜를 무작위로 등록해도 오름차순으로 출력해주는 함수/로직
*/

const dateList=[ ];
const titleList=[ ];
const payList=[ ];

// pay 배열을 넘버로


// ======================= 등록함수 =======================
function submit(){

    // [입력] 날짜 항목 금액
    const date=document.querySelector('#date').value;
    const title=document.querySelector('#title').value;
    const pay=document.querySelector('#pay').value;

    // [처리] 날짜 항목 금액
    dateList.push(date);
    titleList.push(title);
    payList.push(pay);

    // [출력]
        print()
}

// ======================= 삭제함수 =======================
function listDelete(deIndex){
        dateList.splice(deIndex,1);
        titleList.splice(deIndex,1);
        payList.splice(deIndex,1);

        print()
}

// ======================= 출력함수 =======================
function print(){
    const bottom=document.querySelector('#bottom');
    let html="";
        for(let i=0; i<dateList.length; i++){
            html +=`
            <div class=td>
                <div>${dateList[i]}</div>
                <div>${titleList[i]}</div>
                <div>${payList[i]}</div>
                <input onclick="listDelete(${i})" type="button" value="삭제">
            </div>`
            }
    let total=0;
        for(let i=0; i<payList.length; i++){total += Number(payList[i]);}

    const sumlist=document.querySelector('#sumlist');
    sumlist.innerHTML=total
    bottom.innerHTML=html;

    document.querySelector('#date').value='';
    document.querySelector('#title').value='';
    document.querySelector('#pay').value='';

}

function 천단위(){
    let i=0
    let payIndex=payList.indexOf(1); console.log(payIndex)
    let coma=payIndex[1].push(','); console.log(coma)
    for(let element of payList){
        if(parseInt(element/1000)<11){payIndex[1].push(',')}
    }
}
