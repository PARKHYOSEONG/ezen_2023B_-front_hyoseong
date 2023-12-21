console.log(localStorage.getItem('이름'))
/* console.log(_object.이름);  // JS는  HTML 새로고침/바뀌면 초기화 되므로 호출X */
    // _object is not defined

// 예2
const 회원정보목록=localStorage.getItem('회원정보목록');
console.log(회원정보목록);          // [object Object],[object Object]
console.log(회원정보목록[0].이름);  // undefined

const 회원정보목록2=JSON.parse(localStorage.getItem('회원정보목록2'));
console.log(회원정보목록2);             // (2) [{…}, {…}]
console.log(회원정보목록2[0].이름);     // 유재석