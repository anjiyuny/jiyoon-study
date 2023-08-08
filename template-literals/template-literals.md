# 👩🏫 Template literals

### :thumbsup:Template literals



#### 01. 문자 중간에 엔터키 입력 가능

```javascript
var dev = `안녕 
하세요.`;
```



#### 02. 문자중간에 변수 넣을때 간단

```javascript
var dev = "손흥민";
var dev2 = `안녕하세요 ${dev} 입니다`;

// (안녕하세요 손흥민 입니다) 출력됨
```





### :thumbsup:**Tagged Literals**



ES6는 함수로 <mark style="color:red;">문자 해체분석기능</mark>을 만들어 줄 수 있다 그것이 **Tagged Literals** 이라고 한다.

```javascript
var 변수 = '손흥민';

function 해체분석기(문자들, 변수들){
  console.log(문자들);
  console.log(변수들);
}

해체분석기`안녕하세요 ${변수} 입니다`;
```

* 첫째 파라미터 <mark style="color:blue;">**문자들**</mark>은 \`백틱\` 내의 문자만 골라서 Array로 만들어놓은 파라미터이다.
* 둘째 파라미터 <mark style="color:blue;">**변수들**</mark>은 \`백틱\` 내의 ${} 변수를 담는 파라미터이다.
