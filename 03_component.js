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


*/