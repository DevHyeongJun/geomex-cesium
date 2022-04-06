// 전역 변수 셋팅

let MAINMAP = null;
let CESIUMMAP = null;

//설정 값
const GLOBAL = {
    MAP :{
        OPTION : {
            INIT_LON : 126.97806,
            INIT_LAT : 37.56667
        }
    },

    CESIUM : {
        TOKEN : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZmQzODcwNC1iYWE5LTQ5ZjEtYjExYy1kZGM5YjBkNWM3OWUiLCJpZCI6ODc5MzYsImlhdCI6MTY0OTI0NTkyOX0.1ON5NNOX3cGEbmNUG0T7f-9x21XRmhOu0m4soU8GfqQ"
    }
}


let CURRENT_LATLON = [GLOBAL.MAP.OPTION.INIT_LAT, GLOBAL.MAP.OPTION.INIT_LON]