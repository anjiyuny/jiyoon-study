# ☺ 변수 연습문제

### 문제&#x20;

아래의 코드에서 var을 쓰면 0부터 4까지가 아니라 5만 다섯번 출력되는 이유는 뭘까

```javascript
for (var i = 0; i < 5; i++) { 
    // console.log(i)
  setTimeout(function() { console.log(i); }, i*1000 ); 
}
```



