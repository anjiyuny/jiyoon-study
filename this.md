# 🥸 this 연습문제

### ✏️문제 01



위의 코드처럼 **사람.sayHi()**라고 작성하면 콘솔창에 **'안녕 나는 손흥민'** 이라는 글자가 나와야합니다.&#x20;

```javascript
var 사람 = {
  name: '손흥민',
}

사람.sayHi(); //안녕 나는 손흥민
```



```javascript
var 사람 = {
    name : '손흥민',
    sayHi : function(){
        console.log("안녕 나는 " + this.name)
    }
}
사람.sayHi(); //안녕 나는 손흥민
```





### ✏️문제 02



자료.전부더하기()라고 쓰면 **자료.data** 안에 있는 모든 숫자를 더해서 콘솔창에 출력해주어야합니다.&#x20;

```javascript
var 자료 = { 
  data : [1,2,3,4,5] 
};
자료.전부더하기();
```



```javascript
var 자료 = {
        data : [1,2,3,4,5]
    }
    자료.전부더하기 = function(){   //객체안에 전부더하기 라는 함수 추가
       
         var 합 = 0; //합을 저장할 변수
        
        this.data.forEach(function(i){
            합 = 합 + i;
            // 반복문 돌때마다 합과 i를 더함
        });
        console.log(합);
        // 반복문이 다 끝나면 배열안의 모든 숫자가더해진 15 출력
    }
자료.전부더하기();
```





### ✏️문제 03



&#x20;setTimeout을 이용해서 1초 후에 this.innerHTML을 콘솔창에 출력하고 싶다면?



```markup
<button id="버튼">버튼입니다.</button>
```

<pre class="language-javascript"><code class="lang-javascript"><strong>document.getElementById('버튼').addEventListener('click', function(){
</strong>        // console.log(this.innerHTML) //버튼입니다 출력됨
        setTimeout(()=>{
            console.log(this.innerHTML)
        },1000)
    });
</code></pre>

일반 function을 사용해서 this를 출력하면  window가 나오기 때문에&#x20;

arrow function을 사용해야 상위에 있던  this값을 그대로 받아와 `버튼입니다` 가 출력된다.

