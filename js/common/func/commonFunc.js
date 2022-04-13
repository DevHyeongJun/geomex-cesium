
/**
 * 버튼 생성.
 */
const createButton = (buttonObject) => {
    
    for ( const key in buttonObject ) {

        const btnObj = buttonObject[key];
        const $btn = $('<button></button');
        $btn.text(btnObj.name);
        $btn.data('key', btnObj.data);
        $btn.on('click', function(){
            btnObj.callBack(btnObj.data);
        });

        $('#btn_evt').append( $btn );

    }
};