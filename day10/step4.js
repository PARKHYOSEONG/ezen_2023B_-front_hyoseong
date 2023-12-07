/* 연산자 연습문제 */
// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력
/* let kor=Number(prompt("국어"));
let eng=Number(prompt("영어"));
let mat=Number(prompt("수학"));

let tot=kor+eng+mat;
let avr=(kor+eng+mat)/3;

console.log(`총점${tot}평균${avr}`)
document.write(`총점${tot}평균${avr}<br/>`);


// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
let rad=Number(prompt("반지름"));
console.log(`원넓이${rad*rad*3.14}`);
document.write(`원넓이${rad*rad*3.14}<br/>`);

// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력[- 54.5   84.3 두 실수 입력시   결과 : 64%]
let num1=Number(prompt("실수1"));
let num2=Number(prompt("실수2"));

console.log(`백분율:${parseInt(num1/num2*100)}`);
document.write(`백분율:${parseInt(num1/num2*100)}`);

// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
let num3=parseInt(prompt("정수"));

console.log(num3/2!==parseInt(num3/2) ? "홀수":"짝수");
document.write(num3/2!==parseInt(num3/2) ? "홀수":"짝수");

// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력
let num4=parseInt(prompt("정수"));

console.log(num4%7==0?"True":"False");
document.write(num4%7==0?"True":"False");

// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]
let mon=Number(prompt("돈"));

let hunTh=parseInt(mon/100000);
let tenTh=parseInt(mon/10000);
let tho=parseInt(mon/1000);

console.log(`십만원권${hunTh}장 만원권${tenTh}장 천원권${tho}장`);
document.write(`십만원권${hunTh}장 만원권${tenTh}장 천원권${tho}장`);

// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]
let id=prompt("아이디");
let pw=prompt("비밀번호");

console.log(id=="admin" && pw=="1234" ? "True" : "False");
document.write(id=="admin" && pw=="1234" ? "True" : "False");

// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
let num5=parseInt(prompt("정수"));

console.log((num5%7==0)&&(num5%2==1)?"True":"False");
document.write((num5%7==0)&&(num5%2==1)?"True":"False");

// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력
let num6=parseInt(prompt("정수"));
let num7=parseInt(prompt("정수"));

console.log(num6>num7?num6:num7)
document.write(num6>num7?num6:num7)


// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 

let num8=Number(prompt("정수"));
let num9=Number(prompt("정수"));
let num10=Number(prompt("정수"));

let max=num8                    // 1. 가장 큰 수를 가지는 변수를 선언해서 첫번째 수를 넣어둔다.
max=max < num9? num9: max;      // 2. 두번째 수가 max보다 크면 max에 두번째 수를 대입
max=max < num10? num10: max;    // 3. 세번째 수가 max보다 크면 max에 세번째 수를 대입

console.log(max);
document.write(max); */

// [ JS 연산자 과제1 ]
    // 문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]
    let num11=Number(prompt("정수"));   //7
    let num12=Number(prompt("정수"));   //5
    let num13=Number(prompt("정수"));   //9

// 자릿수 각 비교해서 스왑하는 방법 [추후에 제어문/반복문 이용한 효율적인 방법]

    // 첫번째 자리 비교 [비교 2번]
    let temp=num11>num12? num12: num11;     // num12 -> temp
    //      5      7   5     *5      7
    num12=num11>num12? num11: num12;          // num11 -> num12
   // 7       7   5       *7       5
    num11=num11>num12? temp: num12;          // temp -> num11
   //   7     7     7   5       *7
   

    temp=num11>num13? num13: num11;
   //  7      7   9       9       *7
    num13=num11>num13? num11: num13;
    //   9     7   9       7   *9
    num11=num11>num13? temp: num11;
   //   7    7   9      7       *7

    // 두번째 자리 비교 [비교 1번]
    temp=num12>num13? num13: num12;
    //   7    7        9       9   7
    num13=num12>num13? num12: num13;
    //  9      7       9   7       9
    num12=num12>num13? temp: num12;
    //  7     7     9       7      7

     /*  num11 5
      num12 7
      num13 9 */

      console.log(`${num11},${num12},${num13}`);


    // 세번째 자리비교 X [비교 0번]

// 최대값, 최소값, 미들값 구해서 계산하는 방법[효율적인 방법]

    /* 
    오름차순 하는 방법 [정렬]
        7   5   9
        a   b   c
        
    1. a 와 b를 비교    a > b   a가 더 크면 자리바꾸기[스왑]
        -- 모든 자리 수 마다 비교 --
        a자리는 b, c와 비교
        b자리는 c와 비교    [a와 비교를 안하는 이유 : 비교 당해서]
        c자리는 X           [a,b자리와 비교를 안하는 이유 : 비교 당해서]
        변수와 변수의 값을 바꾸는 방법 [스왑]
        a와 b를 스왑
        1) a에 b를 대입
            a = b           [문제점 : a의 값은 사라짐..? 변수는 1개 밖에 저장을 못해서]
                주면서 받기 불가능

        2) b에 a를 대입

        -스왑 하는 방법[임의 변수 활용]
            1. temp 임의[임시저장소] 생성
            2. temp에 a를 대입
            3. a에 b를 대입
            4. b에 temp를 대입

            a <--직거래x--> b
    */

  /*  문제12 : [ 가위바위보 게임 ] 
   - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   - 승리자 판단과 무승부 경우의수를 출력하시오.
   [입력]
      플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   [경우의수 판단]
      플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      비겼을경우 '무승부' 출력 */

/*       let player1 = Number(prompt('플레이어1'))
      let player2 = Number(prompt('플레이어2'))
      let answer = player1==player2 ? 
                          '무승부' :  player1==(player2+1)%3 ? 
                                      '플레이어1 승리' :  '플레이어2 승리';
      console.log( answer ) */

      /* 
        플레이어1 이기는 경우의 수
            플레이어1 == 가위일때 플레이어2 == 보
            플레이어1 == 바위일때 플레이어2 == 가위
            플레이어1 == 보일때 플레이어2 == 바위

            (플레이어1 == 0 && 플레이어2 ==)
      */