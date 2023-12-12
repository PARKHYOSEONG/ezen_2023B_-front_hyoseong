console.log('스크립트가 잘 열리는군');

// ================== 함수 밖 ==================//
    // 모든 함수들이 같이 쓰고 저장하려고 //
    // 여러 함수들 { }에서 사용하기 때문에 선언 1번 하고 누적저장 //

const idArray = [];     // 1. 아이디 저장하는 배열
const pwArray = [];     // 2. 패스워드 저장하는 배열

// ================== 1. 회원가입 함수 ================== //
function sign(){            // f start // 선언부 // 실행조건 : 가입버튼<input type="button">을 클릭했을 때
    console.log('sign함수');
    // 1. [입력]    document.querySelector('선택자').value 문서에서 선택자의 값을 찾음
        const signId=document.querySelector('#signId').value;
        const signPw=document.querySelector('#signPw').value;

    // 2. [처리]    배열명.push(추가할 요소)
        idArray.push( signId );
        pwArray.push( signPw );   // 아이디와 패스워드 인덱스 동일하게
    // 3. [출력]
        alert('회원가입이 완료되었습니다.')
            // 성공 후 해당 input value 초기화
            document.querySelector('#signId').value =''
            document.querySelector('#signPw').value =''

}                           // f end



// ================== 2. 로그인 함수 ================== //
function login(){               // f start // 선언부 // 실행조건 : 로그인버튼을 클릭했을 때
    console.log('login함수');
    // 1. [입력]
        const loginId=document.querySelector('#loginId').value;
        const loginPw=document.querySelector('#loginPw').value;
    // 2. [처리]    배열명.indexOf(값)
        const sIndex = idArray.indexOf(loginId);
        if(sIndex >= 0 && pwArray[sIndex]==loginPw){
            // 1. 만약에 입력받은 로그인 아이디가 배열 내 존재하면
            // 2. 찾은 아이디 인덱스의 패스워드도 동일한지.
    // 3. [출력]
            alert('로그인 성공');
        }else{
            alert('동일한 정보가 없습니다.');
        }

    


}                               // f end

/* 
    변수 선언 : let 변수명 = 10;
    상수 선언 : const 상수명 = 10;
    배열 선언 : let/const 변수/상수명 = [ ]
    함수 선언 : function 함수명( ){ }

    변수 호출 : 변수명
    상수 호출 : 상수명
    배열 호출 : 변수/상수명 또는 변수/상수명[인덱스]
    함수 호출 : 함수명( )
*/