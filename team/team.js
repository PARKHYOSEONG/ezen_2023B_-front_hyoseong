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

        //유효성 검사---------------------------------------------

        if(부품1.indexOf(부품)!=-1){//동일부품 존재 시
            alert('동일한 부품이 존재합니다.');
            console.log('부품 중복');
        
            value초기화();

            return;
        }

        //빈칸검사
        if(부품==""){ alert('부품명을 입력해 주십시오.'); return; }
        if(업체==""){ alert('업체명을 입력해 주십시오.'); return; }
        if(가격==""){ alert('가격을 입력해 주십시오.'); return; }

        //가격 숫자검사
        if(isNaN(가격)){ alert('가격을 숫자로 입력해 주십시오.'); return; }

        //유효성 검사 end--------------------------------------------

    //[처리]
    부품1.push(부품);
    업체1.push(업체);
    가격1.push(가격);

    console.log(부품1);
    console.log(업체1);
    console.log(가격1);



        

    //[출력]
    출력1();
    value초기화();
    alert('등록성공!');

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
                    <div>${부품1[i]}</div>
                    <div>${업체1[i]}</div>
                    <div>${가격1[i]}</div>

                    <div>
                        <button onclick='삭제1(${i})'>X</button>
                    </div>
                 </div>`
        } 
    
    output1.innerHTML=html;

}   //f end

function value초기화(){ //vlaue값 초기화 f start
    document.querySelector("#부품").value=``;
    document.querySelector("#업체").value=``;
    document.querySelector("#가격").value=``;
}// f end
