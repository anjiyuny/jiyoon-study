---
description: this 키워드를 알아보자 1. 함수와 Object에서 사용하면?
---

# 😴 01. this



**1-1. 그냥 쓰거나 함수 안에서 쓰면 this는 window를 뜻한다.**

```javascript
console.log(this)

function 함수(){
    console.log(this)
}
함수();
```

위와 같이 아무것도 없는 상태에서 this를 호출하면 `window`  가 출력된다.    &#x20;



그렇다면 window 란 무엇일까??

> window는 모든 전역변수, 함수, Dom을 보관하고 관리 하는 <mark style="color:blue;">전역 객체</mark> 이다.



쉽게 얘기하자면 document, getElementById(), alert(), console.log().....\
이런 함수들을 보관하는 보관소 == 큰 { 오브젝트 } 라고 한다.



또한,

<mark style="color:blue;">이렇게 전역 변수를 만든다면, x 라는 변수는 window라는 큰 오브젝트안에 자동적으로 생성된다.</mark>

```javascript
var x = 300;
```

\*전역변수 : 코드 내 모든 곳에서 참조해서 쓸 수 있는 범용적인, 범위가 넓은 변수입니다.&#x20;

그냥 script태그 내에 쌩으로 var 변수 하나 만들면 그건 자연스레 전역변수가 됩니다.







**1-2.  strict mode일 때 함수 안에서 쓰면 this는 undefined 이다.**

```javascript
 'use strict';

  function 함수(){
    console.log(this)
  }
  함수();
```

IE 10 버전 이상에서 'use strict' 라는 키워드를 페이지 최상단에 추가하면

strict mode로 자바스크립트를 작성 할 수 있다.

strict mode 에서는 var 키워드 없이 변수를 선언하거나,

변수 arguments라는 이상한 키워드로 선언하는 실수를 방지해준다고 한다.

<mark style="color:blue;">strict mode 에서는 this 키워드를 일반 함수 안에서 불렀을때 undefinded 라는 값으로 강제로 지정한다.</mark>





**1-3.  object 자료형 내에 함수들이 있을 수 있는데 거기서 this값은 '주인님'을 뜻합니다.**

```javascript

var 오브젝트 = {
             data : 'kim',
             함수 : function(){
                console.log(this) // 나를포함하고 있는 obj
             }
        }
        오브젝트.함수();
        // object안에 있는 함수 호출하는 방법
        
        //오브젝트에 들어가는 함수들을 '메소드 method' 라고 함
        
```

위와같이 하면 콘솔창에 `{data: 'kim', 함수: ƒ}` 이런게 출력되는데, 이건 var 오브젝트 를 말하는것이다.

즉 메소드 안에서 this를 쓰면 <mark style="color:red;">**this 메소드를 가지고 있는 오브젝트**</mark>를 뜻하게 된다.



**✍️ 연습문제 : 아래의 this는 어떤걸 출력할까?**

```javascript
var 오브젝트2 = {
    data : {
        함수 : function(){
            console.log(this)
        }
    }
}
```

오브젝트의 메소드안에서 썼을 때 this는 메소드를 담고있는 주인님을 뜻하기 때문에

간지함수()를 담고있는 주인님인 **오브젝트2.data** 라는게 위의 this랑 동일한 뜻입니다.&#x20;







### &#x20; :thumbsup: 사실 위에서 배운 this는 다 같은 의미다



1번과 2번의 this는 같은 의미이다. 2번만 잘 안다면 1번도 쉽게 이해할수 있다.



우리가 함수나 변수를 스크립트 태그 안에 만들었을 때, 함수나 변수는 그냥 만들어 지는것이 아니다.

```markup
<script>
    function 함수(){
        console.log()
    }
</script>
```

위 코드에서의 함수() 는 전역변수나 전역함수를 관리하기 위한 window라는 오브젝트에 자동으로 추가된다.





```javascript
  (1)
  function 간지나는함수(){
    console.log(this)
  }

  (2)
  window.간지나는함수 = function(){ console.log() };
  //window라는 오브젝트에 함수자료 추
```

위의코드(1),(2) 는 똑같다.

<mark style="color:blue;">즉, 전역함수 만들거나 전역변수 만들게 되면   window {오브젝트} 안에 담긴다.</mark>





### :smile: 결국 this는 오브젝트 내의 매소드(함수)에서 사용했을때 상위 오브젝트를 출력해준다

