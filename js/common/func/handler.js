
/**
 * 이벤트 핸들러 구현.
 * 
 */
const Handler = {
    getFunc : (code) => {
        switch(code) {
            //레이어추가
            case FUNC_CODE_LAYER_ADD :

                break;
            //레이어삭제
             case FUNC_CODE_LAYER_REMOVE :

                break;
             //카메라 자동 회전
            case FUNC_CODE_CAMERA_AUTO :
               
                break;
            default :
                alert('미개발~');
                break;
        }
    }
}