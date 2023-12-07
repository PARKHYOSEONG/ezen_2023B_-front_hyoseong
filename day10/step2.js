// p.102 상수와 변수

// 1. 상수만들기 [4단계] const 이름=값
    // 1. const 키워드 작성 (식별용)
    // 2. 상수명 이름[식별자] (구분용)
    // 3. = 대입연산자 [값을 변수에 넣는 역할] (오른쪽 값을 왼쪽에 대입)
    // 4. 자료 저장할 값

const pi=3.141592;

// 2. 상수를 호출하는 방법 [상수 이름 작성]
console.log(pi); // 상수 출력
/* console.log(박효성); // 박효성 is not defined */

// 3. 상수의 값을 변경하는 방법[호출해서 다시 대입] *불가능*
/* pi=3.97; Assignment to constant variable. */

const r=10;

// 4. 상수의 연산
console.log(2*pi*r); //곱하기 먼저인지 상수인지 값 호출 먼저인지
// pi라는 상수[상자]안에 있는 값을 꺼내기 우선 = 상수 호출

// 5. 동일한 상수명 사용 [상수명은 식별용이므로 중복(동일한 범위)이 불가능]
/* const pi=3.97 Uncaught SyntaxError: Identifier 'pi' has already been declared */

// 6. 상수의 값 대입을 안했을때[상수 만들때[처음에] 값[초기값]을 넣는 과정 = 초기화, 초기화가 없으면 오류발생]
/* const pi2; Missing initializer in const declaration */ 

// p.105 변수 만들기
    // 1. let 키워드 작성
    // 2. 변수명 이름
    // 3. = 대입연산자
    // 4. 자료 저장할 값
let pi3=3.141592

// 2. 변수를 호출하는 방법 [변수 호출 시에는 키워드[let,const]사용 x]
console.log(pi3)
console.log('pi3 : '+pi3) // 연결연산자 : "문자열"+변수의 값(숫자) -> 문자열
console.log(`pi3 : ${pi3}`) // 템플릿 문자열 `문자열${변수/상수/값}` 백틱사용

// 3. 변수의 값 변경[값 변경시에도 변수 호출 후 다시 대입]
pi3=3.15;

// 4. 변수의 연산
let r3=10;
console.log(2*pi3*r3);

// var와 let 키워드 차이
let value1=10;
//let value1=10; 불가능, 초기화 1번 [동일한 변수명으로 선언시 선언불가]

var value2=10;
var value2=10; // 가능, 초기화 여러번 [동일한 변수명으로 선언시 동일한 이름이 있을경우 덮어쓴다]

// p.108 복합 대입 연산자
let value=10;

    //컴퓨터는 동시에 다발적으로 연산을 처리X 연산 하나씩 처리
value += 10;
    //vs 같은 결과를 얻는 표현방법
value=value+10; // 문장
    // = 기준으로 오른쪽 연산
        // value + 10 중에서 변수 호출
        // 1. 10 호출
        // 2. 10+10 연산
        // 3. 20 연산 결과
        // 4. = 연산 후 대입
        // 5. value = 20
console.log(value);

// JS에서 HTML(문자열 자료형)을 작성할 때
let list=``; // 'list'변수에 빈 문자열 넣은 상태로 선언

list += `<ul>`;
list += `   <li>Hello</li>`
list += `   <li>JavaScripit<li>`
list += `</ul>`;

document.write(list);

// 예제1 : 2개의 숫자를 입력받아 더한 결과 값을 html에 <h3> 안에 출력
    // 입력받은 예) 3,5
    // HTML 출력 예) 예제1 결과 : 8

    // 1. prompt("출력하고싶은말"); : 입력[input] 제공한느 알람 함수
        // input 입력된 결과를 반환 [10+10 -> 20]

let prom1=prompt("숫자1");
    // 만약에 10 입력시 let prom1 = 10
let prom2=prompt("숫자2");

// number(변수/상수) 숫자로 변환, parseInt(prom1)
prom1=Number(prom1);
prom2=Number(prom2);

let ok=prom1+prom2;
let h3=`<h3>예제1결과 : ${ok}</h3>`;
document.write(h3);


// 예제2 : 2개의 숫자를 입력받아 더 큰 수를 html에 <h3> 안에 출력
    // 입력받은 예) 3,5
    // HTML 출력 예) 예제2 결과 : 5

let num1= Number(prompt("예제2 1번째 숫자 입력하세요."));
let num2= Number(prompt("예제2 2번째 숫자 입력하세요."));

document.write(`<h3> 예제2 결과 : ${num1>num2 ? num1:num2 }</h3>`);
/* 
단항연산자 [피연산자1개] / 이항연산자 [피연산자2개] / 삼항연산자 [피연산자3개]
삼항연산자 -> 조건 ? 참 : 거짓
*/