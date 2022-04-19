
/**
 * 버튼 생성.
 */
const createElement = (objects) => {
    
    for ( const key in objects ) {

        const obj = objects[key];
        let $ele = null;
        switch (obj.type) {
            case 'checkbox' :
                $ele = createCheckBox(obj);
                break;
            default :
                $ele = createButton(obj);
                break;
        }
        const $div = $('<div class="top_content_div"></div>');
        $div.append( $ele );

        $('#top_content').append( $div );
    }
};

const createCheckBox = (obj) => {

    const $span = $('<span></span>');
    const $label = $('<label></label>');
    const $checkbox = $('<input type="checkbox">');

    $label.attr('for', obj.id);
    $label.text(obj.name);
    for ( var key in obj.data ) {
        $checkbox.data(key, obj.data[key]);
    }
    $checkbox.attr('id', obj.id);
    $checkbox.on('change', function(){
        obj.callBack(obj.data, {isChecked : $(this).prop('checked') });
    });

    $span.append($checkbox);
    $span.append($label);

    return $span;
}

const createButton = (obj) => {
    const $btn = $('<button></button');
    $btn.text(obj.name);
    $btn.attr('id', obj.id);
    $btn.data('key', obj.data);
    $btn.on('click', function(){
        obj.callBack(obj.data);
    });

    return $btn;
}