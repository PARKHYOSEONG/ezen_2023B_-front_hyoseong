// p.131 if조건문
    //  조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    //  가장 일반적인 조건문 if

    /* 
        형태
        1. 참일때만 실행
         if(T/F){참/T 일때 실행코드;}

        2. 참 또는 거짓일때 실행
            if(T/F){참/T 일때 실행코드;}
            else{거짓/F 일때 실행코드;}

        3. 참
            if(T/F){
                if(T/F){ }
                else{ }
            }else{
                if(T/F){ }
                essle
            }

        4. 다수 조건 일때 결과 1개              다수 조건일때. 결과 여러개
            if(조건1){ }                            if(조건1){ }
            else if(조건1){ }                       if(조건1){ }
            else if(조건2){ }                       if(조건1){ }
            else if(조건3){ }                       if(조건1){ }
            else if(조건4){ }                       if(조건1){ }
            else { }                                 if(조건1){ }
*/

// 1. if(조건) : 조건 결과가 참이면 { }안으로 들어가고 아니면 { } 못들어감
if(273<100){     // if start, 273이 100보다 미만이면
    console.log(`273<100 => true`); // 실행 X [조건이 false이므로] [false이면 실행이 되지 않음]
}  // if end

console.log('1종료'); // 실행O [조건문과 상관이 없어요. 왜 {} 밖이니까]

// 2.
const date = new Date(); // new Date(); 현재 시간을 알려주는 코드[클래스]
console.log(date);

const hour = date.getHours(); // 현재시간 .getHours() : 현재 시간에서 시 만 반환 함수.
console.log(hour);

    // 1. 만약에 현재 시가 12보다 작으면 오전
if(hour<12){console.log('오전입니다.');}
    // 2. 만약에 현재 시가 12보다 크거나 같으면 오후
if(hour>=12){console.log('오후입니다.');}

// 3. p.134
if(hour<12){console.log('오전입니다.');}
else{console.log('오후입니다.');}

// 4. p.135
if(hour<11){console.log('아침 먹을 시간입니다.');}
 else{if(hour<15){console.log('점심 먹을 시간입니다.');}
else{console.log('저녁 먹을 시간입니다.');}}


// 5. p.137
if(hour<11){console.log('아침 먹을 시간입니다.');}
else if(hour<15){console.log('점심 먹을 시간입니다.');}
else{console.log('저녁 먹을 시간입니다.');}

// p.126~127
const a=Number(prompt('숫자를 입력해주세요.',''))
    if(a>0){console.log('입력한 숫자는 양수입니다.')}
    else if(a==0){console.log('입력한 숫자는 0입니다.')}
    else{console.log('입력한 숫자는 음수입니다.')}

    if(a%2==0){console.log("짝수입니다.")}
    else{console.log('홀수입니다.')}

    if(a>2&&a<6){console.log('봄')}
    else if(a>5&&a<9){console.log('여름')}
    else if(a>8&&a<12){console.log('가을')}
    else{console.log('겨울')}

/* 
team과제 (엘레베이터)
if(중량>최대허용무게){알림음
                    문 닫기X}
*/