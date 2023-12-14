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

console.log('가계부JS열림')

const dateList=[ ];
const titleList=[ ];
const payList=[ ];

// pay 배열을 넘버로


// ======================= 등록함수 =======================
function submit(){console.log('서밋펑션 확인')

    // [입력] 날짜 항목 금액
    const date=document.querySelector('#date').value; console.log(date);
    const title=document.querySelector('#title').value; console.log(title);
    const pay=document.querySelector('#pay').value; console.log(pay);

    // [처리] 날짜 항목 금액
    dateList.push(date); console.log(dateList)
    titleList.push(title); console.log(titleList)
    payList.push(pay); console.log(payList)

    // [출력]
        print()
}

// ======================= 삭제함수 =======================
function listDelete(deIndex){console.log('삭제함수()실행'+deIndex)
        dateList.splice(deIndex,1);
        titleList.splice(deIndex,1);
        payList.splice(deIndex,1);

        print()
}

// ======================= 출력함수 =======================
function print(){
    const bottom=document.querySelector('#bottom'); console.log(bottom);
    let html="";
        for(let i=0; i<dateList.length; i++){console.log(html);
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
        console.log(total);
        const sumlist=document.querySelector('#sumlist');
        sumlist.innerHTML=total
    bottom.innerHTML=html;
    document.querySelector('#date').value='';
    document.querySelector('#title').value='';
    document.querySelector('#pay').value='';

}