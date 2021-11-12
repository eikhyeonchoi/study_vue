/*

vue?
MVVM 패턴의 뷰모델 레이어에 해당하는 화면단 라이브러리

view   ->    viewModel    ->      model
(dom)      (DOM Listener)      (javascript obj)

view   <-    viewModel    <-      model
(dom)      (Data Bindings)     (javascript obj)

Data Bindings example
vue의 핵심: Reactivity
데이터의 변화를 감지해서 화면에 그려줌
var div = document.querySeletor('#app');
var viewModel = {};
Object.defineProperty('대상객체', '객체속성', {
    // 정의할 내용
})

*/

Object.defineProperty(viewModel, 'str', {
    // 속성에 접근했을 때의 동작 정의
    get: function() {
        console.log('접근');
    }, 
    // 속성에 값을 할당했을 때의 동작 정의
    set: function(newValue) {
        console.log('할당', newValue);
        div.innerHTML = newValue;
    }
});