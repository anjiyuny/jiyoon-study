# ☺ 변수 연습문제

### 문제&#x20;

아래의 코드에서 var을 쓰면 0부터 4까지가 아니라 5만 다섯번 출력되는 이유는 뭘까

```javascript
for (var i = 0; i < 5; i++) { 
    // console.log(i)
  setTimeout(function() { console.log(i); }, i*1000 ); 
}
```



### 풀이



setTimeout 은 반복문이 실행됨과 동시에 실행되는 코드가 아니다.

1\~5초 후에 코드를 실행하려고 i값을 가져오려고 해도&#x20;

때문에 루프에서 i값이 5가 되어 멈추고 난 후에 `var i = 5;` 라는 전역변수로 남은&#x20;

5라는 값만 남아있기 때문에 5 가 다섯번 출력되는것이다

```javascript
var i = 5; // 루프 다돌고 전역변수로 남아버림

for (var i = 0; i < 5; i++) { 
  setTimeout(function() { console.log(i); }, i*1000 ); 
}
```

####

#### let을 사용할 경우

```javascript
for (let i = 0; i < 5; i++) { 
    let i = 0; //let은 블록 스코프 이기 때문에 이런식으로 이해하는것이 좋다
  setTimeout(function() { console.log(i); }, i*1000 ); 
}
```

let은 블록 스코프 즉 {} 여기 안에서만 참조 할 수 있다.

그렇기 때문에 n초 후에 변수를 참조할려고 보면 i 값이 for 반복문 내에 남아있기 때문에

그것을 참조해 쓰고, 0\~4 가 차례로 출력될수 있다.
