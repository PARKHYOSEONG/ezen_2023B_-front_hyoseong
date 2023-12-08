// p.116 자료형 변환
/* const input=prompt('message',"_default");
alert(input); */
        // 실행순서
/*          1. prompt('message',"_default") : 클라이언트에게 입력 받는 알람함수 [실행]
            2. prompt() 결과/반환/리턴된 값 [실행결과]
            3. const input = 리턴된 값  [실행 결과 저장]    */


// p.119 불 입력 [confirm() : 확인[True]/취소[False]를 반환하는 알람함수]
/* const input2=confirm('수락하시겠습니까?');
alert(input2); */

// 3. 숫자 자료형으로 변환하기 [Number() : 문자열 자료형을 숫자 자료형으로 변환 함수]
console.log(Number('273'));
console.log(Number("a"));   // NaN not a number 숫자로 표현불가
console.log(Number(true)); // true=1, false=0

// 4. 숫자 연산을 사용해 자료형 변환하기 [*단 숫자+"문자열" : 연결연산자 조심]
console.log("52"-3);    // 49 결과의 자료형이 숫자로 변환
console.log(true-1);    // 0
console.log(true+2);    // 2

// 5. 문자열 자료형으로 변환하기 [String() : 문자 자료형으로 변환 함수]
console.log(String(52.273));    // 52.273 -> "52.273"
console.log(true);              // true -> true

console.log(52.273+"");         // 52.273 -> "52.273" [연결연산자 이용]
console.log(true+"");         // true -> "true"

// 6. 불 자료형으로 변환하기 [Boolean() : 불 자료형으로 변환함수]
console.log(Boolean(0));    // flase
console.log(Boolean(NaN));  // false
console.log(Boolean(""));   // false
console.log(Boolean(null)); // false
let 변수;
console.log(Boolean(변수)); // false


// 7. 논리 부정 연산자를 사용해 자료형 변환하기
console.log(!273);  // 0 -> false 1 -> true 273-> true !273->true
console.log(!!273); // 
console.log(!!0);   // 0 : false -> true -> false

// p.124 예제
    // 프로그램 기본 : 입력 -> 처리 -> 결과
    // 웹 프로그램 기본 : 프론트엔드 HTML [<input>] -> 백엔드 JAVA -> 프론트엔드 HTML [<table>]

    // 1. [입력]
const rawInput=prompt('inch 단위의 숫자를 입력해주세요.');
    // 2. [처리]
const inch=Number(rawInput); // 연산을 통해서 자동으로 자료형이 변환 [+ 더하기는 안돼! 연결연산자]
const cm=inch*2.54;
    // 3. [출력]
alert(`${inch}inch는 ${cm}cm 입니다.`);

// 앞으로의 웹 개발 방향
function 변환기능(){
    const 인치=document.querySelector('input');
    console.log(인치);
    console.log(인치.value);
        // document : HTML뜻
        // query : 질의 / 요청
        // Selector : 선택
            // document.querySelector() : HTML에 요소 선택
            // HTML 요소를 JS의 변수/객체로 가져오기 함수
        // ---> 처리 --> java에게 통신으로 보내기
        // 결과 = input에 입력받은 value를 h3[innerHTML:마크업 사이에]에 대입
        document.querySelector('h3').innerHTML=`${인치.value*2.54}cm`
        }
    // function 함수명(매개변수){구현 할 기능 코드}
    // 변수=let, 상수=const, 함수=function 선언 약속/규칙/문법

// p.125

// - 각 생활에서 사용되는 기계/프로그램들 예시 만들기 [예시6번]

    /*  키오스크, 엘리베이터, 자율주행 자동차
            예) 라면포트기
        1. 저장/ 변수 5개 : 온도, 면 종류, 시간, 온수상태, 완료상태
        2. 기능/ 함수 5개 : 시작, 물추가, 상태변경, 조리시간추가, 면 종류 선택
        3. 경우의 수/ 논리 5개 : 용기가 있다/없다, 조리시간 완료/조리중, 상태 점검중/사용가능, 온수부족/충분, 온도 최대값

        1. 저장/ 변수 5개 : 열림, 닫힘, 층수, 경비실, 속도(일정하게?), 최대인원수에 따른 문닫힘 여부, 문 열리고 닫히는 시간
        2. 기능/ 함수 5개
            열림/닫힘을 누를 시 정해놓은 속도로 문이 열리고 닫힌다.
            층수를 누를 시 정해놓은 속도로 해당 층수로 올라가고 내려간다.
            경비실 버튼을 누를 시 해당 건물 경비실로 전화를 한다.
            정해진 중량이 되면 문이 닫히지 않으며 삐 소리가 난다.
            
        3. 경우의 수/ 논리 5개 :
        4. 1-3 시각화 그림
    */

// 3번 문제
const 센티미터=Number(prompt("cm 단위의 숫자를 입력해주세요."));
const inchch=센티미터*0.393701;
console.log(`${센티미터}cm는 ${inchch}ch입니다.`);

// 4번 문제
const 반지름=Number(prompt("원의 반지름을 입력해주세요."));
const 넓이=3.14*반지름*반지름;
const 둘레=2*3.14*반지름;

console.log(`원의 반지름 : ${반지름} 원의 넓이 : ${넓이} 원의 둘레 : ${둘레}`);

// 5번문제
const 금액 = prompt("달러 단위의 금액을 입력하세요");
const 달러 = Number(금액);
const 원화 = 달러*1207;

console.log(`달러 : ${달러} -> 원화 : ${원화}`);