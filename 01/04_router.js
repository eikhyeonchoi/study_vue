/*

<div id="app">

    <div>
        //
        <router-link to='/login'>login</router-link>
        <router-link to='/main'>main</router-link>
    </div>

    // Vue인스턴스에 VueRouter인스턴스를 사용해지만 쓸 수 있다
    // 브라우저의 주소 창에서 URL이 변경되면 앞서 정의한 routes 속성에 따라 해당 컴포넌트가 화면에 뿌려짐
    <router-view></router-view>
</div>

var LoginComponent = {
    template: "<div>login</div>"
};

var MainComponent = {
    template: "<div>Main</div>"
};

var router = new VueRouter({
    // URL의 해쉬 값 제거 속성 보통 "history"라고 지정
    mode: 'history'
    // 라우팅 할 URL과 컴포넌트 값 지정
    routes: [
        {
            // 페이지의 url이름
            path: '/login',
            // 해당 url에서 표시될 컴포넌트
            component: LoginComponent,
        },
        {
            path: '/main',
            component: MainComponent,
        }
    ]
});


new Vue({
    el: '#app',
    router,
});

*/