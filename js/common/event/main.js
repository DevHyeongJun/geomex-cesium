
/**
 * DOCUMENT LOAD 부분만 구현한다. 
 */

 
(function(){
    "use strict";

    $( function() {
        //이벤트 버튼 생성
        //_FUNC_BUTTON_OBJECT test.html에 생성
        //버튼 클릭 함수는 _FUNC_BUTTON_OBJECT[button].callBack 참조
        
        $(document).on('keydown', function(e){
           var KeyCode = e.keyCode;
            console.log(KeyCode);
           CESIUMMAP.moveCamera(KeyCode, 50);
        });
    });

})();