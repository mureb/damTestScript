

//fetch('https://raw.githubusercontent.com/mureb/damTestScript/main/damHelper.js', {mode:'cors'}).then((response) => response.text()).then((text)=>eval(text))


var x = function(){

    var JqueryScript = document.createElement('script');
    JqueryScript.type = 'text/javascript';
    JqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.head.appendChild(JqueryScript);


$("ot-resource").removeAttr('ot-onspecialselect')
$("ot-resource").removeAttr('onclick')

$("ot-resource").on( "click", function(event) {
    console.log(this)
});

};

x();




