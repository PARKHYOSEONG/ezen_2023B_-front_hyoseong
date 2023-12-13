

/* 
let output='';

// 문제1) 입력받은 수 만큼 * 출력
const value=Number(prompt('문제1 수 입력'));
for(let i=1; i<=value; i++){
    // i는 1부터 입력받은 수까지 1씩 증가
    output += '*';
}   // for end
console.log(output);

output='';  // 문제가 변경되었기 때문에 출력할 내용 공백으로 수정
// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
const value2=Number(prompt('문제2 수 입력'));
for(let i=1; i<=value2; i++){
    output += '*';
    // 만약에 i가 3배수이면 줄바꿈 처리
    if(i%3==0){output +='\n';} //   \n : 제어(이스케이프)문자
}
console.log(output); */

// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
    *
    **         
    ***      
    ****   
    *****
*/
/* output='';
const line3=Number(prompt('문제3 줄 수 입력'));
for(let i=1; i<=line3; i++){        // for1 start
    for(let o=1; o<=i; o++){        //for2 start
        output += '*';
    }   // for2 end
    output +='\n'
}   // for1 end
console.log(output); */
/*

// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
/*
    *****
    ****
    ***
    **
    *
*/
/* output='';
const line4=Number(prompt('문제4 줄 수 입력'));
    for(let s=1; s<=line4; s++){        // for1 start
        for(let p=1; p<=line4-s+1; p++){        //for2 start
            output += '*';
        }   // for2 end
        output +='\n';
}   // for1 end
console.log(output); */
// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
    *
   **
  ***
 ****
*****
*/
/* output='';
const line5=Number(prompt('문제5 줄 수 입력'));
    for(let u=1; u<=line5; u++){        // for1 start
        for(let y=1; y<=line5-u; y++){  // for2 start
            output +=' ';
        }   // for2 end
        for(let r=1; r<=u; r++){
            output +='*';
        }
        output +='\n';
    }   // for1 end
console.log(output); */
// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
*****
 ****
  ***
   **
    *
 */
/* output='';
const line6=Number(prompt('문제6 줄 수 입력'));
    for(let h=1; h<=line6; h++){
        for(let g=1; g<=h; g++){
            output +=' ';
        }
        for(let k=1; k<=line6-h+1; k++){
            output += '*';
        }
        output +='\n';
    }
console.log(output); */
// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
    *           1       1
   ***          3       1+2  
  *****         5       3+2
 *******        7       5+2
*********       9       7+2
*/
/* output='';
const line7=Number(prompt('문제7 줄 수 입력'));
    for(let f=1; f<=line7; f++){
        for(let w=1; w<=line7-f; w++){
            output += ' ';
        } // for2 end
        for(let e=1; e<=f*2-1; e++){
            output += '*';
        } // for3 end
        output +='\n';
    }
console.log(output); */
// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]22
/*
*********
 *******
  *****
   ***
    *
*/
/* output='';
const line8=Number(prompt('문제8 줄 수 입력'));
    for(let l=line8; l>=1; l--){
        for(let v=1; v<=line8-l; v++){
            output +=' ';
        }
        for(let n=1; n<=l*2-1; n++){
            output += '*';
        }
        output +='\n';
    }
console.log(output); */
// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
/*
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
*/
/* output='';
const line9=Number(prompt('문제9 줄 수 입력'));
    for(let f=1; f<=line9/2; f++){
        for(let w=1; w<=line9/2-f; w++){
            output += ' ';
        } // for2 end
        for(let e=1; e<=f*2-1; e++){
            output += '*';  
        } // for3 end
        output +='\n';
    }
    for(let l=line9/2; l>=1; l--){
        for(let v=1; v<=line9/2-l; v++){
            output +=' ';
        }
        for(let n=1; n<=l*2-1; n++){
            output += '*';
        }
        output +='\n';
    }
console.log(output); */
// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
/*
*     *        0     5       2
 *   *         1     3       2
  * *          2     1       2
   *           3     0       1
  * *               
 *   *
*     *
*/
/* output='';
const line10=Number(prompt('문제10 줄 수 입력'));

    for(let v=1; v<=line10; v++){
        for(let x=1; x<=line10; x++){
            if(v==x){output += '★';}
            else if(v+x==line10+1){output += '★'}
            else{output +='☆'}
        }
        output +='\n';
    }
console.log(output); */


function 문제9_2(){
    // [입력]
        const line9_2=Number(document.querySelector('#line9_2').value);
        let html='';
            for(let a=1; a<line9_2-2; a++){html+=`<tr>`;
                for(let b=1; b<line9_2-a-2; b++){html+=`<td> </td>`;}
                for(let c=0; c<a*2-1; c++){html+=`<td>★</td>`;}
            html +='</tr>';}
            for(let d=line9_2-3; d>1; d--){html+=`<tr>`;
                for(let e=1; e<line9_2-d-1; e++){html+=`<td> </td>`;}
                for(let f=0; f<d*2-1-2; f++){html+=`<td>★</td>`;}
            html +='</tr>';}
       
        const tableObj=document.querySelector('#table9_2');
        tableObj.innerHTML=html;
        console.log(tableObj);
}



function 문제10(){              // f start
    // [입력]
        const line10=Number(document.querySelector('#line10').value);

    // [처리]
        let html='';
            // [행]
            for(let r=1; r<=line10; r++){         // for 1 start

            // 행 시작
            html+=`<tr>`;

            //[열]
            for(let c=1; c<=line10; c++){         // for 2 start
                if(r==c){html+=`<td>★</td>`}
                else if(r+c==line10+1){html+=`<td>★</td>`}
                else{html+=`<td></td>`}
            }                                   // for 3 start

            // 줄 끝
            html+=`</tr>`;
        }           // for 1 end

    // [출력]
        const tableObj=document.querySelector('#table10');
        tableObj.innerHTML=html;
        console.log(tableObj);

}   // f end
/* 
   *
  ***
 *****
*******
 *****
  ***
   * */