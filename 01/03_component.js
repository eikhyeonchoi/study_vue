/*

<div id="app">
    <app-header></app-header>
</div>

선언시 Root 컴포넌트임
new Vue({
    el: '#app'
});

(전역)컴포넌트 등록: 모든 인스턴스에 등록됨(Vue인스턴스가 여러개 일 수 있음), 사용할 경우 거의 없음
Vue.component('컴포넌트이름', 내용);
ex) Vue.component('app-header', {
    templdate: '<h1>Header</h1>'
});

지역컴포넌트
new Vue({
    el: '#app',
    // 지역컴포넌트
    components: {
        // key-컴포넌트이름: value-컴포넌트내용
        'app-footer': {
            template: '<footer>footer</footer>'
        }
    },
});



컴포넌트통신
각각 고유한 데이터 유효범위를 갖는다
n방향통신은 추적이 힘들기 때문

상위 컴포넌트 ->   props   -> 하위컴포넌트
상위 컴포넌트 <- 이벤트발생 <- 하위컴포넌트
=> 위에서 아래 props, 아래에서 위 event

{
    props 예제 및 코드해석

    :: code ::
    <div id="app">
        <하위컴포넌트이름 v-bind:하위컴포넌트 props중 하나="상위컴포넌트 data속성 중 하나"></하위컴포넌트이름>
        <app-header v-bind:data="message"></app-header>
        <app-content v-bind:data1="num"></app-header>
    </div>
    var appContent = {
        template: '<div v-bind:id={{}}>Content{{data1}}</div>',
        props: ['data1']
    }

    new Vue({
        el: '#app',
        components: {
            'app-header': appHeader,
            'app-content': appContent,
        },
        data: {
            message: 'hi',
            num: 10,
        }
    });

    :: 해석 ::
    일단 사전지식은 props는 전개방향이 위에서 아래임
    components 속성으로 루트컴포넌트 밑에 하위 컴포넌트를 만들고 
    하위 컴포넌트에 props(데이터)를 전달하려면 하위 DOM에 v-bind(디렉티브)를 사용해
    data객체에서 선언한 속성들을 넣음 
    예시 v-bind:(하위컴포넌트의 props배열의 요소중 하나)="(상위컴포넌트의 data속성)"
    이렇게 상위 컴포넌트에서 받은 props를 mustach {{}}를 사용해 값을 참조할 수 있다
    props는 reactivity의 근거(?)한 것
}

{
    event-emit 예제 및 코드해석

    :: code ::
    <div id="app">
        <!-- <app-header v-on:하위컴포넌트에서 발생한 이름='상위 컴포넌트의 메서드이름'></app-header> -->
        <app-header v-on:pass='logText'></app-header>
    </div>
    var appHeader = {
        template: '<button v-on:click="passEvent">Click me</button>',
        methods: {
            passEvent: function() {
                this.$emit('pass');
            }
        }
    };
    new Vue({
        el: '#app',
        components: {
            'app-header': appHeader
        },
        methods: {
            logText: function() {
                console.log('hi');
            }
        }
    });

    :: 해석 ::
    사전지식은 event-emit은 아래에서 위 방향임
}

짧은 지식
props, event-emit이든 
하위컴포넌트의
key-attribute는 다 하위컴포넌트에 관련된 것이고
value는 다 상위컴포넌트에 관련된 것
<app-content v-bind:data1="num"></app-header>
:: 위에서 아래! props인데 이건 v-bind:data1의 data1은 하위컴포넌트에서 props 속성으로 정의한 배열 중 한 요소이며
   num은 상위컴포넌트의 data속성의 num을 참조한것이다, reactivity는 항상 기억할 것

<app-content v-on:add='addNum'></app-content>
:: 아래에서 위! event-emit의 경우도 마찬가지로 add는 하위컴포넌트의 methods 속성의 정의한 함수에서 this.$emit('add')을 emmit한 함수이며
   addNum은 상위컴포넌트의 methods 속성의 정의된 addNum함수이다



Vue인스턴스(new Vue())에서의 this는 Vue인스턴스를 가르킨다

*/