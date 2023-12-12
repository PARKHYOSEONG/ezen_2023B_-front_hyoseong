/* 
    p.174 반복문
        - 반복 작업
        - 형태
            for(let i=0; i<반복횟수; i++){
                문장
            }
            for(초기값;조건문;증감식){실행코드;}

            1. let i=0          : 반복을 시작할 때 처음 값 [초기값]
                i를 0부터 시작
            2. i < 반복횟수         : 반복을 할 수 있는 조건 [조건을 충족시 반복실행]
                i는 반복횟수보다 작으면
            3. 문장         : 반복시 실행되는 코드
            4. i++          : 1회 반복 후 실행되는 증감연산
        - 실행순서
            1. [1초기값] 변수에 처음값을 초기화
            2. [2조건문] for{ }안/반복문에 들어갈 수 있는지 검사 [T->{ }안으로, F->{ }밖으로]
            3. [3실행문] { }안에 있는 코드 모두 실행
            4. [4증감식] 실행문 후에 (초기값변수)가 증가 또는 감소
                // [초기값 1번만 실행되므로 증감식 이후 조건문으로 이동]
            5. [2조건문] 조건검사
            6. [3실행문] 실행코드
            7. [4증감식] 증감식
                //
            8. [2조건문] 조건검사
            9. [3실행문] 실행코드
            10. [4증감식] 증감식
                // 2조건문에 false 될때까지
*/

// 1. 우유 구매를 10번 출력해
console.log('우유 구매');

for(let i=1; i<=10; i++){console.log('for)우유 구매')}
            // let i는 1부터 10이하까지 1씩 증가하면서 console.log 출력할거야 [총 10회]

// p.178
    for(let i=0; i<5; i++){         // for start
        // let i는 0부터 5미만까지 1씩 증가하면서 console.log 반복실행 [0 1 2 3 4 총 5회]
        console.log(`${i}번째 반복합니다.`);
    }                               // for end

// p.179 누적합계
let output=0;
console.log('for start')
for(let i=1; i<=100; i++){          // for start
    // let i는 1부터 100이하까지 1씩 증가하면서 output에 i를 더하는 반복실행 [총 100회]
    output+=i;  // output=output+1;
    // output에 i를 더한 값을 output에 저장
    console.log(`${i}회 output:${output}+${i}`)
}   // 100회 끝남                   // for end
console.log('for end')
console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`); // 5050

// p.180 for문과 배열(인덱스:0부터~1씩증가 패턴, 배열 내 인덱스 순회/확인)의 관계
    // 0부터 마지막인덱스( <= 배열.length-1 또는 < 배열.length)까지
const todos=['우유구매','업무메일확인','필라테스수업']
    // 인덱스: 0, 1, 2 // 길이: 3
for(let i=0; i< todos.length; i++){         // vs i <= todos.length-1       // for start
// i는 0부터 todos배열의 마지막 인덱스까지 1씩 증가 하면서 console.log 반복 실행
        console.log(`${i}번째 할일 : ${todos[i]}`)
        // i는 인덱스가 아니지만 인덱스처럼 활용
        // 인덱스 대신에 i 활용

}                                                                           // for end

// p.180 역순
for(let i=todos.length-1; i>=0; i--){             // for start
// i는 마지막 인덱스부터 0까지 1씩 감소 하면서 console.log 반복실행
    console.log(`${i}번째 할일 : ${todos[i]}`)
}                                                 // for end

let outPrint=''; // 공배기 저장된 변수
// 예) 1부터 10이하까지 1씩 증가 반복 [한줄표시]

for(let i=1; i<=10; i++){                       // for start
    outPrint += `${i}`;
}                                               // for end
console.log(outPrint)

// 1부터 10이하까지 1씩 증가 반복 [ul표시]
outPrint='';        // 위에서 사용했던 변수 공백으로 수정
for(let i=1; i<=10; i++){                       // for start
    outPrint +=`<li>${i}</li>`;
}                                               // for end
// HTML 출력
document.querySelector('ul').innerHTML=outPrint;

// 1부터 10이하가지 1씩 증가 반복 [누적합계]
let sum=0;
for(let i=1; i<=10; i++){           // for start
    sum +=i;        // i를 sum에 더한 후 sum에 대입
}                                   // for end
console.log(sum)
/* 
    반복문 순서도. 모든 코드 과정을 순서로 작성
        초기값 : i=1    sum=0
        for 시작
            i       조건[i<=10]         실행문[sum+=i]              sum누계         증감식[i++]
            i=1     true                0+1 => 1                    sum=1           i=2
            i=2     true                1+2 => 3                    sum=3           i=3
            i=3     true                3+3 => 6                    sum=6           i=4
            i=4     true                6+4 => 10                   sum=10          i=5 
            i=5     true                10+5 => 15                  sum=15          i=6 
            i=6     true                15+6 => 21                  sum=21          i=7 
            i=7     true                21+7 => 28                  sum=28          i=8 
            i=8     true                28+8 => 36                  sum=36          i=9
            i=9     true                36+9 => 45                  sum=45          i=10
            i=10    true                45+10 => 55                 sum=55          i=11
            i=11    false 반복문 종료.
*/

// 1부터 100까지 7배수 누적합계
    // 1. i는 0부터 100까지 7씩 증가
sum=0;
for(let i=0; i<=100; i+=7){     // for start
    sum+=i;
}           // for end
console.log(`1~100까지 7배수 합:${sum}`);
    // 2. i는 0부터 100까지 7배수 i%7==0
for(let i=1; i<=100; i++){
    if(i%7==0){sum+=i;}
    // 만약에 i가 나누기 7을 했을때 나머지가 0이면 i는 7배수
}           // for end
console.log(sum)

// for 중첩
for(let 부모=1; 부모<=5; 부모++){                       // for start [총 5회전]
    // 부모는 1부터 5이하까지 1씩 증가 반복
    console.log(`=====부모:${부모}=====`);
    for(let 자식=1; 자식<=3; 자식++){                   // for2 start [총 3회전 => 상위for => 15회전]
        // 자식은 1부터 3이하까지 1씩 증가 반복  
        console.log(`${부모}의 자식:${자식}`);
    }       // for2 end
}           // for end


// 예6) 구구단.
    // 1. 2단
const 단=2;
for(let 곱=1; 곱<=9; 곱++){     // for start
    console.log(`${단}X${곱}=${단*곱}`);
}           // for end
    // 2. 2~9단
        // 1. 단만들기 단 : 2부터 9
for(let dan=2; dan<=9; dan++){         // for 단 start
    console.log(`단:${dan}`)
}                                   // for 단 end

        // 2. 곱만들기 곱 : 1부터 9
for(let gob=1; gob<=9; gob++){
    console.log(`곱:${gob}`)
}

        // 3. 단과 곱 합치기 [ 단 안에 곱이 들어감 단for상위, 곱for하위]
for(let dan=2; dan<=9; dan++){         // for1 단 start
    for(let gob=1; gob<=9; gob++){      // for2 곱 start
        console.log(`${dan}X${gob}:${dan*gob}`)
    }       // for2 곱 end
}           // for1 단 end
/* 
    단 * 곱 = 값
    2~9 * 1~9 = 값
    변수 * 변수
    단은 2부터 시작 2단부터 9단까지 +1증가
    곱은 1부터 시작 1곱부터 9곱까지 +1증가

    단 하나당 곱 9번 반복하고
    모여진 단 하나씩 총 8번 반복합니다.
*/


