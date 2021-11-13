/*

데이터바인딩: mustache
<div>{{message}}</div>
new Vue({
    data: {
        message: 'hi',
        num: 10,
        doubleNum: 0,
    },

    // 계산된 값을 사용하려면 computed 사용
    // validation or 간단한 텍스트 연산 or 클래스 속성 조작
    // 공식문서: watch보다는 computed를 사용하는것이 좋다 대부분 computed사용
    computed: {
        doubleNum: functin() {
            return this.num * 2;
        }
    },

    // num이 바뀔때마다 수행되는 함수임
    // 데이터요청등 무거운 동작에 사용하면 좋다
    watch: {
        num: function(newValue, oldValue) {

        },
    },

    // 사용할 메서드 정의 
    // event-emmit에서 이벤트를 받는 메서드를 정의할 수 도 있고
    // v-on에 할당할 메서드를 정의할 수 도 있다
    methods: {
        a: function() {

        }
    },

    // 예시
    created: function () {
    // _.debounce는 lodash가 제공하는 기능으로
    // 특히 시간이 많이 소요되는 작업을 실행할 수 있는 빈도를 제한합니다.
    // 이 경우, 우리는 yesno.wtf/api 에 액세스 하는 빈도를 제한하고,
    // 사용자가 ajax요청을 하기 전에 타이핑을 완전히 마칠 때까지 기다리길 바랍니다.
    // _.debounce 함수(또는 이와 유사한 _.throttle)에 대한
    // 자세한 내용을 보려면 https://lodash.com/docs#debounce 를 방문하세요.
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
});



디렉티브: v-
1. v-if="[부모 data속성 중 하나]" = 보이게 안보이게 제어할 수 있다(DOM을 완전히 제거)
    v-else-if="type === 'A'" 가능
    v-else 가능

2 v-show="[부모 data속성 중 하나]" = 보이게 안보이게 제어할 수 있다(DOM을 CSS로 안보이게만 한다)

3. v-bind:[원하는속성명 ex)id class || 자식컴포넌트일때, 정의한 props 중 하나]="[부모 data속성 중 하나]" = 데이터를 바인딩할 수 있다
    이게 props를 넘길땐 
    v-bind:[자식props중 하나]="[부모 data속성 중 하나]"
    이렇게해서 넘겼는데 만약 컴포넌트가 아니면 
    v-bind:[원하는 속성 ex)id, class]="[부모 data속성 중 하나]"
    이렇게 데이터바인딩을 한다

4. v-model="[부모 data속성 중 하나]" = DOM의 값들을 가지고오기 위함

5. v-on:[이벤트 ex)click, keyup || 자식컴포넌트일때, 정의한 메서드명(event-emmit할때)].[Modifiers ex) enter등] = "[부모 methods속성 중 하나]" = 이벤트를 걸 수 있다


*/