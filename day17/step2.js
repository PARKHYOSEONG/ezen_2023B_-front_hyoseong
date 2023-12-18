/*
    JS자료형 [ web --> node.js ]
    1. 숫자             1 vs 2
    2. 문자열           "",''
    3.불                True&False
    4.undefined        자료데이터 없다 뜻. undefined vs ''  vs 0
    5.배열          [자료, 자료,자료]
                    1. [숫자, 문자열, 불, 배열]
                    2. [숫자, 문자열, 불, 배열, 변수, 상수, 함수]

    6. 함수         function
                    1. conset/let 변수명=function(){ }
                    2. function(){}
    7.객체(Object)   {key:value, ket:value, ketvalue }
                    {key:1
                    key:"유재석",
                    key:true,
                    key:[ ],
                    key:{ },
                    key : function(){}
                    }
    */
console.log({ });   // Object : 객체

// 1. 객체를 만들어서 상수에 대입
const product={
    제품명 : '7D 건조망고', // key : '제품명', value : '7D건조망고' = 속성property
    유형 : '당절임',
    성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지 : '필리핀'
}

// 2. 객체 호출
console.log(product);

// 3. 객체 내 속성 호출 첫번째    객체명['KeyName'] : 해당하는 키의 값을 호출.
console.log(product['제품명']);
console.log(product['유형']);
console.log(product['성분']);
console.log(product['원산지']);

// 3. 객체 내 속성 호출 두번째 객체명.KeyName : 해당하는 키의 값을 호출.
console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);

// p.248 
const 객체2 = {
    number: 273,
    string: '구름',
    boolean: true,
    array: [52,273,103,32],
    method: function(){}
    // 객체3: {method2:function(){}}
}
console.log(객체2)  // console: 객체 내 log속성에 함수 호출
// document.querySelector(); // document: 객체 내 querySelector속성에 함수 호출
// .(온점) : 접근연산자 : 객체 내 속성에 접근.
객체2.method();             // 객체2내 속성(method) 호출 속성:method
// 객체2.객체3.method2();      // 객체2내 속성(객체3) 호출 속성:객체3내 속성(method2):method2

// p.249
const pet={
    name: '구름',
    eat: function(food){
        alert(`${this.name}은/는 ${food}을/를 먹습니다.`);
        // this란 함수 내에서 현재 객체내 속성을 호출할때 사용하는 키워드
        // this.key
    }
   // eat2(food){} // 함수명이 속성명을 대신한다.
}
pet.eat('밥') 

// p.249~250
// 동적으로 객체 속성 추가하기 객체={} <-비어있는 객체
    // 객체이름.속성(속성=키:밸류)=밸류
const student={}
student.이름='윤인성'
student.취미='악기'
student.장래희망='생명공학자'
console.log(student);

// 동적으로 객체 속성 제거하기
delete student.장래희망;
console.log(student);