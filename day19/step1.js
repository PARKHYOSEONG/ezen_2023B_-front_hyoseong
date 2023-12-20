/* 
    1. 오늘 코드 실행 체크
    2. 오늘 코드 확인/질문
    3. 개인과제 step1 하단
        [관리자 입장]
        1. 카테고리 등록
        2. 제품등록
        =============
        3. 결제구현
            1) 결제버튼 클릭하면 장바구니 제품을 결제내역으로 이동.
                    + 주문번호, 주문날짜, 주문상태
            2) 관리자 내역 table에 주문현황/결제내역을 출력
                    주문번호        주문날짜        주문상태        제품명
                    1               2023-12-20      주문완료        버거1
                    2               2023-12-20      주문완료        버거2
                    3               2023-12-20      주문완료        버거3
 */
/*
    설계
        1. 경험
        2. 기능 실행순서
            [키오스크 = 사용자입장]
                카테고리 선택 -> 제품선택 -> 장바구니담기 -> 결제
            [포스기 = 관리자입장]
                결제내역(주문상태)
                카테고리 추가/삭제 기능
                제품 추가/삭제 기능
        3. 기능에 필요한 메모리(저장-DB설계) 설계
            카테고리=['신제품(NEW)','프리미엄','와퍼&주니어','치킨&슈림프버거','올데이킹&킹모닝']
                관리자가 해당 배열을 추가/삭제
        4. 배열 안에 있는 데이터를 식별할때 기준점
            사람 = {이름:'유재석', 나이:'40세', 직업:'강사'} - 이름으로 식별시 동명이인이 존재하면 문제점 발생[중복이 없어야 한다]
            사람 = {주민등록번호:'981002-1', 이름:'유재석', 나이:'40세', 직업:'강사'} - 주민등록은 절대로 중복이 없다
               인덱스 vs *식별코드생성* vs 이름
                    '신제품(NEW)' -> {cno:1, cname:'신제품(NEW)'}
                    '프리미엄' -> {cno:2, cname:'프리미엄'}
                    '와퍼&주니어' -> {cno:3, cname:'와퍼&주니어'}
                    '치킨&슈림프버거' -> {cno:4, cname:'치킨&슈림프버거'}
                    '올데이킹&킹모닝' -> {cno:5, cname:'올데이킹&킹모닝'}
*/
/* 백엔드로 데이터를 받았다고 치고 */
/* 전역변수 */
/* 카테고리 목록 */
let cno = 5;
let categoryList=[
    {cno:1, cname:'신제품(NEW)'},
    {cno:2, cname:'프리미엄'},
    {cno:3, cname:'와퍼&주니어'},
    {cno:4, cname:'치킨&슈림프버거'},
    {cno:5, cname:'올데이킹&킹모닝'}
]

/* 제품목록(제품이미지명은 사진파일명이랑 동일하게) */
let productArray=[
    {pno:1, pname:'큐브 스테이크 와퍼', pprice:8000, pimg:'큐브스테이크와퍼.png', cno:1},
    {pno:2, pname:'더블비프불고기버거', pprice:9000, pimg:'더블비프불고기버거.png', cno:1},
    {pno:3, pname:'불양양 맥시멈3', pprice:8000, pimg:'불양양맥시멈3.png', cno:5}
]

// [함수1] : 카테고리 출력함수 (실행조건:js열렸을때, 카테고리를 클릭했을때)
printCategory(1)
function printCategory(selectCno){
    const categoryUl=document.querySelector('#header>ul');
    let html='';
    for(let i=0; i<categoryList.length; i++){
        // 만약에 i번째 카테고리의.cno와 내가선택한cno[매개변수]와 같으면
        // 만약에 클릭했을때 클릭한 i의 카테고리번호를 매개변수[클릭한 cno]로 전달

            // 인덱스번째 categoryList배열의 cno를 printCategory함수의 매개변수로 전달 //
            // 인덱스번째 categoryList배열의 cno와 selectCno가 같으면 class가 selectMenu되고 그렇지 않으면 빈칸 //
            // <li> </li>안에 인덱스번째 categoryList배열의 cname을 호출 //
        html +=`<li onclick="printCategory(${categoryList[i].cno})"
                class="${categoryList[i].cno==selectCno?'selectMenu':''}">
                ${categoryList[i].cname}</li>`}
    categoryUl.innerHTML=html;

    // printProduct함수 실행
    printProduct(selectCno);
    // 카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달
    // 제품 출력시 모든 제품 출력이 아니고 선택된 카테고리번호와 일치한 제품만 출력해야 되니까
    return;
}

// [함수2] : 상품 출력함수 (실행조건 : 카테고리 출력 후)
    // 내가 선택한 카테고리의 제품만
function printProduct(selectCno){
    console.log(selectCno);
    const productBox=document.querySelector('#productBox');
    let html='';
    // 자식요소에서 내가 선택한 카테고리번호와 일치한 제품을 찾아서 div화
    for(let i=0; i<productArray.length; i++){
        // 만약 i번째 제품cno와 내가 선택한 cno와 같으면.
        // 천단위쉼표 함수 : 데이터.toLocalString()
        if(productArray[i].cno==selectCno){
            html += `<div onclick="setCart(${productArray[i].pno})" class="product">
                        <img src="img/${productArray[i].pimg}"/>
                        <div class="pinfo">
                            <div class="ppname">${productArray[i].pname}</div>
                            <div class="pprice">${productArray[i].pprice.toLocaleString()}원</div>
                        </div>
                    </div>`
        }
    }
    productBox.innerHTML=html;
    return;
}

let cartArray=[];
// [함수3] : 제품 선택시 카트에 출력해주는함수 (실행조건 : 카테고리의 상품을 클릭했을때 )
function setCart(selectPno){    console.log("setCart()")
    // [입력], [처리]
    cartArray.push(selectPno);   console.log(cartArray)
    // [출력]
    printCart()
    return;
}

// [함수4] : 카트에 담겨있는 제품 삭제하는 함수
function cartDelete(deleteIndex){   console.log('cartDelete()')
    // [입력]-->deleteIndex = i <span onclick=cartDelete(${i})>
    // [처리]
    cartArray.splice(deleteIndex,1);  console.log(cartArray);
    // [출력]
    printCart()
}

// [함수5] 카트의 현재상태를 출력하는 함수(실행조건 : 1.제품을 클릭했을때, 2.제품을 삭제했을때)
function printCart(){
    // HTML안 id이름이 carBottom인 곳에 carBottom라는 상수이름으로 저장
    const cartBottom=document.querySelector('#cartBottom');

    let html='';
    let totalPrice=0;
    let cartCount=cartArray.length;
    // cartArray배열에 있는 모든 제품번호를 출력
    for(let i=0; i<cartArray.length; i++){
        // 해당 i번째 pno 제품의 정보 찾기
        for(j=0; j<productArray.length; j++){
            if(cartArray[i]==productArray[j].pno){
            html += `<div class="citem">
                        <div>${productArray[j].pname}</div>
                        <div>${productArray[j].pprice.toLocaleString()}</div>
                        <span onclick=cartDelete(${i})>X</span>
                    </div>`
                    totalPrice += productArray[j].pprice;
            }      
        }
    }
    cartBottom.innerHTML=html;
    document.querySelector('#cartCount').innerHTML=cartCount;
    document.querySelector('#totalPrice').innerHTML=totalPrice.toLocaleString()+"원";
}


// =============================================================================================== //

function addCategory(){ console.log('addCategory()')
    // 등록하기 버튼을 클릭 했을때
    // 카테고리 번호의 값을 불러와 숫자로 변환한다.
        let newCategoryNum=document.querySelector('#newCategoryNum').value; 
        newCategoryNum=Number(newCategoryNum); console.log(newCategoryNum);
    // 카테고리 이름의 값을 불러온다.
        const newCategoryName=document.querySelector('#newCategoryName').value; console.log(newCategoryName)
    // categoryList 배열에 번호와 이름의 값을 객체로 저장한다.
            const addCategoryTitle={cno: newCategoryNum, cname: newCategoryName};console.log(addCategoryTitle);
            for(i=0; i<categoryList.length; i++){
                const addCategoryTitle={cno: categoryList.length, cname: newCategoryName}
                categoryList.push(addCategoryTitle); break;
            }   
            console.log(categoryList)
        // 근데 categoryList 배열안에 cno와 번호가 겹치면 안되고 순서대로 저장되어야 한다.
            
        printAddCategory()       
}

function printAddCategory(){
    const newCategoryList=document.querySelector('#newCategoryList')

    let html='';
    for(i=0; i<categoryList.length; i++){
        html += `<tr>
                <td>${categoryList[i].cno}</td>
                <td>${categoryList[i].cname}</td>
        </tr>`
    }
    newCategoryList.innerHTML=html;
}