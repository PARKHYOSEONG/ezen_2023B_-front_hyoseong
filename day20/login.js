
// 1. 로그인 함수 : 실행조건 : 로그인 버튼을 클릭했을때
function 로그인(){
    console.log('로그인( )함수')
    // 1. [입력]
    const mid=document.querySelector('#mid').value;
    const mpw=document.querySelector('#mpw').value;
    // 2. [처리] 기존에 있던 데이터와 입력받은 데이터를 비교
        // 1.기존 가져오기 [회원가입에서 저장된 객체]
    const memberArray=JSON.parse(localStorage.getItem('memberArray')); console.log(memberArray)
        // 2.입력받은 객체 [로그인에서 입력받은 객체]
    const member={mid:mid, mpw:mpw}; console.log(member);
        // 3.비교 [(등록)아이디와 (로그인)아이디가 같고(and) (등록)비밀번호와 (로그인)비밀번호가 같으면]
        // 배열 내 요소 하나씩 출력
        for(i=0; i<memberArray.length; i++){ console.log(memberArray[i]);
            let oldmember=memberArray[i]; // i번째 회원을 변수에 저장
            if(oldmember.mid==member.mid && oldmember.mpw==member.mpw){
                alert('로그인 성공');
                location.href="step1.html"; // HTML에 있는 a태그와 동일, JS에서 페이지 전환하는 방법
                return;
            } // 찾았으면 더이상 할게 없으니까 함수 강제종료
        }
        // 모두 확인 후 끝까지 원한는 값을 못찾았을때 == 반복문이 끝났을때
        alert('동일한 회원정보가 없습니다.')
    // 3. [출력]

}