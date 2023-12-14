console.log('js열림');
// 전역 자료 [함수밖에서 선언]
const 할일목록=[ ];     // 할일의 내용을 저장 
const 상태목록=[ ];     // 할일의 상태를 저장
// 지역 자료 [함수안에서 선언]

// 1. 등록 함수 선언 : 매개변수X, 리턴값
function 등록함수(){console.log('등록함수() 실행');              // function start
                    // HTML에서 onclick으로 호출

    //[1. 입력] : HTML input으로부터 입력된 값을 가져온다.
    const content=document.querySelector('#content').value; console.log(content);
        // 등록함수 안 상수content를 HTML input의 값을 불러와서 저장 // 등록함수 안 상수content가 잘나오는지 확인

    //[2. 처리] : 입력받은 값을 배열에 저장
    할일목록.push(content); console.log(할일목록)
        // 할일목록 배열에 content 값을 저장 // 할일목록 배열이 잘 나오고 추가가 되는지 확인

    상태목록.push(false); console.log(상태목록)// 할일의 상태를 입력받지 않고 초기값을 임의로 false
        // 상태목록 배열에 false를 저장 // 상태목록 배열이 잘 나오고 추가가 되는지 확인

    //[3. HTML에 DIV형식 출력]
    출력함수()

}                                           // function end

// 2. 변경 함수 선언 : 매개변수=변경할인덱스, 리턴값X
function 변경함수(변경할인덱스){
    console.log('변경함수() 실행'+변경할인덱스);
    //[1. 입력] X
    //[2. 처리] false -> ture / true -> false
    상태목록[변경할인덱스]=!상태목록[변경할인덱스]; // 기존에 반대를 대입한다.
    console.log(상태목록)
    //[3. 출력] 현재 위에서 처리된 배열의 최신 상태를 다시 HTML에 적용 재렌더링
    출력함수()
}   // f end

// 3. 삭제 함수 선언 : 매개변수=삭제할인덱스, 리턴값X
function 삭제함수(삭제할인덱스){
    console.log('삭제함수() 실행'+삭제할인덱스);
    //[1. 입력] X
    //[2. 처리] 배열에서 요소 삭제 .splice( )
    할일목록.splice(삭제할인덱스,1);    // 할일목록도 1개 삭제
    상태목록.splice(삭제할인덱스,1);    // 상태목록도 1개 삭제
    //[3. 출력]
    출력함수()
}   // f end

// 4. 출력 함수 [등록후, 변경후, 삭제후 = 배열의 최신상태를 HTML에 대입]
function 출력함수(){
        // [어디에] todoBottom에
        const todoBottom=document.querySelector('#todoBottom');

        // [무엇을] 배열에 있는 여러 요소들을           JS입장에서 HTML코드는 문자열
        let html="";   // 초기값은 빈문자열.  // 변수 html의 초기값을 빈 문자열로 선언

            // 배열내 모든 요소를 하나씩 꺼내기
            for(let i=0; i<할일목록.length; i++){          // for start
                        // i는 0부터 마지막인덱스까지 1씩증가
                html +=`<div class="todo ${상태목록[i] ? 'success' : ''}">
                        <div class="content">${할일목록[i]}</div>
                        <div class="btnBox">
                            <input onclick="변경함수(${i})" type="button" value="변경"/>
                            <input onclick="삭제함수(${i})" type="button" value="삭제">
                        </div>
                        </div>`
                }                                               // for end
        // [대입] innerHTML에 저장된 변수를 대입
        todoBottom.innerHTML=html;

        // 완료 후 입력상자 초기화 하고 알림.
        document.querySelector('#content').value=''; alert('등록성공');

}