
// 1. 익명함수.
    // const 함수명1 = function(){}

// 2. 선언적함수
    // function 함수명2*(){}

// [p.321] 객체 이동 [document(메모리-객체1개 - 부모는 언제나 하나여야 합니다.)]
/* document.addEventListener('DOMContentLoaded',function(){ */

/*     // 1. 각 부모 요소 2개 호출
    const divA=document.querySelector('#first');
    const divB=document.querySelector('#second');

    // 2. <h1> 요소 생성
    const h1=document.createElement('h1');
    // 3. <h1> 요소에 내용 추가
    h1.textContent='이동하는 h1 태그';

    // 4. 함수1 정의 : 부모1에 h1을 대입
    const toFirst= function(){
        divA.appendChild(h1);   // 같은 dom객체를 여러번 appendChild() 하면 이동
        setTimeout(toSecond, 10000); // 10000 => 10초,  1000 => 1초
        // setTimeout(함수, 시간/밀리초(1/1000));   // 특정시간(밀리초)이 되면 자동으로 함수 실행되는 함수.
    }

    // 5. 함수2 정의
    const toSecond= function(){
        divB.appendChild(h1);
        setTimeout(toFirst, 10000);
    }

    // 6. 함수1 실행
    toFirst()

    // [p.322]
    // 원형 : setTimeout(함수, 밀리초);

    // 1. 익명함수를 상수에 대입    [재호출 O]
    const 삭제함수1 = function 삭제함수1(){}
    setTimeout(삭제함수1, 3000);

    // 2. 익명함수를 상수에 대입X   [재호출 X]
    setTimeout(function(){}, 3000);

    // 3. 선언적함수를 선언         [재호출 O]
    function 삭제함수2(){
        const h2=document.querySelector('h2')
        h2.parentNode.removeChild(h2)
    }
    setTimeout(삭제함수2(), 3000); */

    // 3초 뒤에 익명함수 실행
        // 객체명.parentNode : 해당 객체의 부모 호출 => body
/*     setTimeout(function(){
        const h2=document.querySelector('h2');
            console.log(h2.parentNode);
        h2.parentNode.removeChild(h2);
    },3000)

    // [p.323]
    let counter=0;
    const h3=document.querySelector('h3');
    h3.addEventListener('click', function(event){
        // 1. click 이벤트가 발생할때 실행되는 함수 .addEventListener
        // 2. 그 이벤트를 발생한 결과내용을 콜백함수의 매개변수로전달.
        // 왜? 클릭 이벤트에 결과에 필요한 정보가 있으면 활용해서 쓸 수 있도록 지원
        console.log(event);
        counter++
       h3.textContent=`클릭횟수 : ${counter}`
    })
 }) */


document.addEventListener('DOMContentLoaded',function(){
    // [p.325]

    // counter 변수에 0을 선언
    // isConnect 변수에 false를 선언
    let counter=0;
    let isConnect=false

    // 상수를 선언하여 문서에서 마크업 불러오기
    const h3=document.querySelector('h3');
    const p=document.querySelector('p')
    const connectButton=document.querySelector('#connect')
    const disconnectButton=document.querySelector('#disconnect')

    // listener 상수에 매개변수가 event인 익명함수 선언
    const listener=function(event){
        h3.textContent=`클릭 횟수 : ${counter++}`
    }

    connectButton.addEventListener('click', function(){
        if(isConnect===false){
            h3.addEventListener('click', listener)
            p.textContent='이벤트 연결 상태 : 연결'
            isConnect=true
        }
    })
    disconnectButton.addEventListener('click', function(){
        if(isConnect===true){
            h3.removeEventListener('click', listener)
            p.textContent='이벤트 연결 상태 : 해제'
            isConnect=false
        }
    })
})