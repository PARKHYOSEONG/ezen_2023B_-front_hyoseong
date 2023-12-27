// 1. 기존에 있는 자료를 select에 넣을때
const productList=['떡볶이','순대','오뎅','튀김'];

document.addEventListener('DOMContentLoaded',function(){

    //2. 어디에 무엇을 출력
    const selectBox=document.querySelector('#selectBox');
    let html='';
        for(let i=0; i<productList.length; i++){
            html+= `<option>${productList[i]}</option>`
        }
    // selectBox.textContent=html;
        // textContent 기능이 포함되지 않은 문자열 그 자체 (문자열)
    // innerHTML 기능이 포함된 문자열 (HTML형식)
    selectBox.innerHTML=html;

    // [p.343]
    // 1. 각 요소 객체로 호출
    const select=document.querySelector('select');
    const p=document.querySelector('p');

    // 2. 요소의 이벤트 [change : value 값이 바뀔때마다] 등록
    select.addEventListener('change',function(event){
        console.log(event);                         // change 이벤트 결과 정보 객체
        console.log(event.currentTarget);           // change 이벤트를 발생시킨 요소
        console.log(event.currentTarget.options);   // select 하위 요소들/배열 전환
        console.log(event.currentTarget.options.selectedIndex); // select 요소의 선택된 인덱스

        // [방법1]
        const options=event.currentTarget.options;
        const index=event.currentTarget.selectedIndex;
        p.textContent=`선택 : ${options[index].textContent}`

        // [방법2]
            console.log(select.value);
        p.textContent=`선택 : ${select.value}`;
    })

    // [p.345]
    let 현재값;
    let 변환상수=10;
    
    const select3=document.querySelector('select:nth-child(6)') // select중에서 6번째
        console.log(select3);
    const input=document.querySelector('input');
    const span=document.querySelector('span');

    // 2. 계산 출력함수 (실행조건 : 1.select 값 변경[change]되었을때, 2.input 값을 입력[keyup]했을때)
    const calculate=function(){
        span.textContent=(현재값*변환상수).toFixed(2);
            // toFixed 소수점 자르기 [반올림]
    }

    // 3. select3의 값을 change 했을때
    select3.addEventListener('change',function(event){
        const options=event.currentTarget.options
        const index=event.currentTarget.options.selectedIndex
        변환상수=Number(options[index].value);
            // 변환상수=Number(select3.value);
        calculate() // 계산 및 출력함수 실행
    })
    // 4. input의 값을 keyup했을때
    input.addEventListener('keyup',function(event){
        현재값=Number(event.currentTarget.value);
            // 현재값=Number(input.value);
        calculate()
    })
})