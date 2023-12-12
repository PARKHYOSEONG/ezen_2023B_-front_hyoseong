/* 
JS 과제 [ 주차장 정산기]
========================= 요구사항 =========================================
        1. 입차
            - 차 번호 숫자 4자리롤 입력받기 type="text"
            - 입차시간을 type="time"
        2. 저장
            - 배열[차번호, 입차시간]에 저장
==================================================================
        3. 출차
            - 차 번호 숫자 4자리 입력받기 type="text"
            - 출차시간을 type="time"
        4. 계산
            - 해당 차 번호의 입차시간과 출차시간을 계산
            - 계산식 : 30분 내외면 무료, 10분당 1000원
        5. 출력
            - alert(요금)
                또는
                alert('입차한 내역이 없습니다.;)
========================= 추가 요구사항 =========================================
        1. 입차/출차 시 차량번호 4자리만 입력할 수 있도록 하고 아니면 입차/출차 불가능
        2. 입차/출차 시간을 입력 안했으면 입차/출차 불가능.
        3. 일별(한달) 매출현황 HTML에 출력하는 [배열추가, 함수추가]
        4. CSS 간단하게
*/

console.log('스크립트가 잘 열리는군')

const carArray=[];              
const timeArray=[];             

function entrance(){        // f start

    //[입력]
    const carNum=document.querySelector('#carNum').value;                   console.log(carNum)   
    const carTime=document.querySelector('#carTime').value;                 console.log(carTime)
    
    // [처리]

        // * [유효성검사]
        // 1. 차량번호 길이가 4자리가 아니면
        if(carNum.length!= 4){alert('차량번호 4자리 입력해주세요.'); return;}
        // 2. 입차시간을 입력 안했으면
        if(carTime===''){alert('입차시간을 선택해주세요.'); return;}

    carArray.push(carNum);                                                  console.log(carArray)       
    timeArray.push(carTime);                                                console.log(timeArray)

    // [출력]
    alert('입차를 완료하였습니다.')

        // [부가기능]
        document.querySelector('#carNum').value =''
        document.querySelector('#carTime').value =''
}                           // f end


function exit(){            // f start
    // [입력]
    const carOutNum=document.querySelector('#carOutNum').value;             console.log(carOutNum)
    const carOutTime=document.querySelector('#carOutTime').value;           console.log(carOutTime)

    // [처리]
        const outIndex=carArray.indexOf(carOutNum);                         console.log(outIndex)
        if(outIndex==-1){alert('입차한 차량이 없습니다.'); return;}

// ====================================== 입차 시간 ====================================== //
        const inTime=timeArray[outIndex];                                   console.log(inTime)
        const inMtime=(inTime.split(":")[0]*60)+Number(inTime.split(":")[1]);       console.log(inMtime)

// ====================================== 출차 시간 ====================================== //
        const outArray=carOutTime.split(":");                               console.log(outArray)
        const outH = outArray[0];                                           console.log(outH)
        const outM = outArray[1];                                           console.log(outM)
        const outMTime = (outH*60)+(outM*1);                                console.log(outMTime)

// ====================================== 출차-입차 시간 ====================================== //
        const time = outMTime-inMtime;                                      console.log('시간차이:'+time)
        if(time<0){alert('출차시간이 더 적을 수 없습니다.'); return;}
        else if(time<=30){pay=0;}
        else{pay=(parseInt((time-30)/10))*1000; }

    // [출력]
        alert(`출차완료 : ${pay}원`);

}                       // f end

