//1. Use stricy
//added in ES 5
// use this for valina Javascript.
'use strict';
console.log (age);
//2. Variable
// let (added in ES6)
// javaScript에서 변수를 선언할수 있는것은 딱 하나 let 이 유일

let globalName = 'global name'; // 파일 안에다 바로 정의해서 쓰는 변수는 global scope 
// 글로벌한 변수들은 어플리케이션이 실행되는 순간부터 끝날때까지 항상 메모리에 탐재되어 있기 떄문에
//최소한으로 쓰는것이 좋고, 가능하면 class 나 함수 if , for 등 필요한 순간에만 정의해서 쓰는것이 좋다.
{
    let name = 'jiyoon';
    console.log (name);
    name = 'hello';
    console.log(name);
    console.log(globalName); //global scope 은 블럭 안이든 밖이든 어느곳에서나 접근이 가능하다 
}
// block scope 사용하게 되면 더이상 블럭 밖에서는 블럭 안의 내용을 볼수 없게 된다

console.log (name); // 이렇게 블럭밖에서 name이라는 변수에  접근하게 되면 아무것도 출력되지 않는다
console.log(globalName);//global scope 은 블럭 안이든 밖이든 어느곳에서나 접근이 가능하다

// var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
// 호이스팅 ==> (끌어올려주다)어디에 선언했는지 관계없이 항상 선언을 제일 위로 끌어올려주는것을 말한다
// var has no block scope!!!


// var --> 변수를 선언한후, 값을 할당하는게 정상적인 반면 
// var 은 값을 할당하고 변수를 선언해도 console에 error가 뜨지 않는 미친짓을 할수있다
// undefined >> 변수는 정의되어있지만 값이 아직 안들어가 있네?? 라고 출력됌
{
    age = 4;
    var age;
} //var 는 block scope을 철저히 무시한다
console.log (age);
//age = 4;
//console.log (age); // 이렇게 값을 위에 주고 콘솔로그로 변수를 호출하면 값이 4로 나오는 크레이지 매직
//var age;

//name = 4;
//let name; // var과 똑같은 짓을해도 let은 error를 출력한다 이게 정상임 ㅇㅇ


//3. Contants          
//favor immutable data type always for a few reasons --> 왠만하면 값을 할당한 다음에 변경되지 않는 데이터 타입을 사용해라
//- security
//- thread safety 
//- reduce human mistakes
const dayInWeek = 7;
const maxNumber = 5; //const 는 한번 값을 설정하면 바뀔수 없다  

// 자바스크립트 안에는 mutable type-let & immutable type-const  두개의 변수를 선언할수있다 //

//4. variable type 
//primitive, single item: nember, string, boolean, null, undefiedn, symbol
//object, box container
//funtion, first-class funtion   

const count = 17; // integer(정수)
const size = 17.1; // decimal number(소수점)  // 정수와 소수점에 상관없이 콘솔에서는 type number로 출력된다
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values: infinity, -infinity, NaN(= not a Number)
const infinity = 1 / 0; // 포지티비 숫자를 0으로 나누면 infinity로 출력이 된다
const negativeInfinity = -1 / 0; // 네거티브 숫자를 0으로 나누면 네거티브인피니티로 출력이 된다
const nAn = 'not a number' / 2;  // 숫자가 아닌것은 nAn 으로 출력이 된다
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
//const bigInt = 1234567890123456789012345678901234567890n; // over (-2**52)~(2*53) 자바스크립트에서 표현가능한 숫자
//console.log('value: ${bigInt}, type: ${typeof bigInt}');

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type:' + typeof helloBob);

//boolen
//false:0, null, undefined, NaN, ''
const canRead = true; // 트루라고 바로 값을 할당해되고 3이1보다 작다 는 false니까 저런식으로 할당해도 댐
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 
let nothing = null;  // null은 텅텅비어있는값이야
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x; // 아무값도 할당되어있지 않은 상태
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for object
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); // 고유한 식별자가 필요할떄 사용 동일한 string을 사용해도 다르게 식별된다
console.log(symbol1===symbol2); // false라고 출력댐
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description을 붙여 string으로 변환해야 error가 안뜬다

//5.Dynamic typing: dynamically typed language ==> 프로그램이 동작하는 동안 할당된 타입에 따라 타입이 변한다 (시작은 string이였지만 끝은 number) 
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type:${typeof text}`); // ==> type : string
text = 1;
console.log(`value: ${text}, type:${typeof text}`); // ==> type : number
text = '7' + 5;
console.log(`value: ${text}, type:${typeof text}`); // '문자열'에 더하기가 있으니까 number 5 를 자바스크립트가 string으로 변환을 해서 string과 string을 합해주어서 값은 75 타입은 string으로 출력
text = '8' / '2';
console.log(`value: ${text}, type:${typeof text}`); // 숫자를 나눌수있는 나누기 연산자를 썼네 string안에 있는 것은 실제로는 숫자값이네 하고 자동으로 숫자로 변환해서 4를 출력 type은 number 로 출력된다
console.log(text.charAt(0)); // error 자바스크립트는 런타임으로 인식이 됨으로 중간에 type이 num으로 바뀌었기 때문에 그 이후에 charAt를 호출하면 error가 뜬다