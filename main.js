// 즉시 실행 함수, 전체 영역을 더럽히지 못하게 부분화(모듈화) 하는 것
(function(window, document) {
    'use strict'; // 엄격한 자바스크립트 문법에 의해서 작성 하겠다는 선언
    
    // HTML 요소를 담을 상수명 앞에 달러 기호를  써줘도 된다.
    const $toggles = document.querySelectorAll('.toggle'); // NodeList라는 유사 배열 형태
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', () => {
        toggleElements();
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1024) {
            offElements();
        }
    })


    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on'); // 클래스리스트는 클래스를 제어하는 속성인데 on이라는 클래스 선택자를 토클하겠다.
        });

    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });

    }
})(window, document)