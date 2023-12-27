document.addEventListener('DOMContentLoaded',function(){

    // 1. 값을 가져와서 객체화
    const input=document.querySelector('#todo');
    const addButton=document.querySelector('#addButton');
    const todoList=document.querySelector('#todoList');

    // 2. 변수 선언
    let keyCount=0

    // 3. 함수 선언
    const addTodo=function(){

        // 만약 input의 값의 앞뒤 공백을 제거한것과 공백이 같다면
            // 조건문을 활용해서 
        if(input.value.trim()===''){
            alert('할 일을 입력해주세요.');
            return; // 함수 강제종료
        }
        // addTodo 함수가 실행되었을때 if 조건문이 실행되지 않은경우 밑으로 실행
            // HTML에 요소를 생성한다.
        /* 
            <div dataKey="key">
                <input type="checkbox"/>
                <span></span>
                <button></button>
            </div>
        */
        const item=document.createElement('div');
        const checkbox=document.createElement('input');
        const text=document.createElement('span');
        const button=document.createElement('button');

        // keyCount의 초기값은 0이고 1씩 증가
        const key=keyCount;
        keyCount++;

        // 새로 생성한 item=div 요소의 속성 이름을 dataKey로 하고 1씩 증가하는 keyCount 값을 넣는다.
        item.setAttribute('dataKey',key);
        // 자식요소에 checkbox, text, button 추가
        item.appendChild(checkbox); // <input/>
        item.appendChild(text);     // <span></span>
        item.appendChild(button);   // <button></button>
        // todoList=HTML의 div 자식요소에 item을 추가
        todoList.appendChild(item);

        // checkbox의 타입을 'checkbox'형태로 지정
        checkbox.type='checkbox';
        // checkbox에 이벤트를 연결한다 (실행조건 : 변경될때 익명함수 실행)
        checkbox.addEventListener('change',function(event){

            // checkbox가 변경되면 item의 스타일을 바꾼다
                // 체크가 되었을경우 취소선 그렇지 않으면 공백?
            item.style.textDecoration=event.target.checked?'line-through':''
        })

        // <span><input id="todo">에 입력한 값</span>
        text.textContent=input.value;

        // <button>제거하기</button> << 이렇게 추가
        button.textContent='제거하기'

        // button에 이벤트 연결( 실행조건 : 클릭했을 때 익명함수 실행)
        button.addEventListener('click',function(){
            // removeTodo 함수실행
            removeTodo(key);
        })

        // <input id="todo"> 값 초기화
        input.value=''
    }
        // removeTodo 선언
    const removeTodo=function(key){
        // <div dataKey="key">를 item상수로 선언
        const item=document.querySelector(`[dataKey="${key}"]`)
        // todoList의 자식요소 <div dataKey="key">를 제거
        todoList.removeChild(item)
    }

    // addButton에 이벤트 연결 (실행조건 : 버튼을 클릭했을때 addTodo함수를 실행)
    addButton.addEventListener('click',addTodo);
    // input에 이벤트 연결 (실행조건 : 키보드가 키에서 떨어질때 익명함수 실행)
    input.addEventListener('keyup',function(event){
        const Enter=13
        // 엔터의 키코드는 13
        console.log(event.keyCode)
        // 이벤트가 발생했을때 키코드가 13과 같으면 addTodo함수 실행
        if(event.keyCode===Enter){
            addTodo()
        }
    })
})