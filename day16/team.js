/* 

부품1=[];

부품2=[];

업체1=[];

업체2=[];

가격1=[];

개수2=[];

총가격2=[];

*/

//배열 선언
const 부품1=[];
const 업체1=[];
const 가격1=[];

const 부품2=[];
const 업체2=[];
const 개수2=[];
const 총가격2=[];


function 등록1(){   //등록1 f start

console.log('등록 1 함수 실행');

//[입력]
const 부품=document.querySelector("#부품").value;
const 업체=document.querySelector("#업체").value;
const 가격=document.querySelector("#가격").value;

//유효성 검사
if(부품1.indexOf(부품)!=-1){
    alert('동일한 부품이 존재합니다.');
    console.log('부품 중복');
  
    document.querySelector("#부품").value=``;
    document.querySelector("#업체").value=``;
    document.querySelector("#가격").value=``;

    return;
}
//유효성 검사 end

//[처리]
부품1.push(부품);
업체1.push(업체);
가격1.push(가격);

console.log(부품1);
console.log(업체1);
console.log(가격1);

//[출력]
출력1();
document.querySelector("#부품").value=``;
document.querySelector("#업체").value=``;
document.querySelector("#가격").value=``;
alert('등록성공!');

const option = document.querySelector('#부품s');
let html=''
for(let i=0 ;i<부품1.length;i++){
    html+= `<option>${부품1[i]}</option>`
}
option.innerHTML = html;

}   //f end

function 삭제1(삭제1매개변수){    //삭제1 함수 start
    console.log('삭제1 함수 실행');

    let search=부품2.indexOf(부품1[삭제1매개변수]);

    부품1.splice(삭제1매개변수,1);
    업체1.splice(삭제1매개변수,1);
    가격1.splice(삭제1매개변수,1);

    if(search!=-1){
        부품2.splice(search,1);
        업체2.splice(search,1);
        개수2.splice(search,1);
        총가격2.splice(search,1);
    }

    출력1();
    출력2();
}   //f end

function 출력1(){   //등록1 f start
    console.log('출력함수 실행');
    
    const output1=document.querySelector("#출력1");

    let html=``; 

    for(let i=0; i<부품1.length; i++){
        html+=`<div>
            <span>${부품1[i]}</span>
            <span>${업체1[i]}</span>
            <span>${가격1[i]}</span>

            <button onclick='삭제1(${i})'>X</button>
            </div>`
        } 
    
    output1.innerHTML=html;

}   //f end





// 등록2 함수
function 등록2(){console.log('등록2함수실행')
    const 개수=document.querySelector('#개수').value;

    const 부품s=document.querySelector('#부품s').value;
    console.log( 부품s )

    const 업체인덱스 = 부품1.indexOf(부품s)

    부품2.push( 부품s );
    개수2.push(개수); console.log(개수2)
    업체2.push( 업체1[업체인덱스] )
    출력2();
}


function 출력2(){console.log('출력2함수실행')
    const output2=document.querySelector('#출력2')
    let html='';
// 업체2

let 부품당총가격=0;
    for(let i=0; i<가격1.length; i++){부품당총가격=가격1[i]*개수2[i]
        총가격2.push(부품당총가격);
        console.log(총가격2);
    }
    for(let i=0; i<업체2.length; i++){
        html+=`<div>
        <span>${부품2[i]}</span>
        <span>${업체2[i]}</span>
        <span>${개수2[i]}</span>
        <span>${총가격2[i]}</span>
        </div>`
    }
        total();
// 총합계
    output2.innerHTML=html;
}

function total(){
    const output3=document.querySelector("#총합계")
    let html='';
let total=0;
for(let i=0; i<총가격2.length; i++){total += Number(총가격2[i]);
    html+=`<div>
    <span>${total}</span>
    </div>`}
    output3.innerHTML=html;
}
