

//fetch('https://raw.githubusercontent.com/mureb/damTestScript/master/damHelper.js', {mode:'cors'}).then((response) => response.text()).then((text)=>eval(text))


var x = function(){

    var JqueryScript = document.createElement('script');
    JqueryScript.type = 'text/javascript';
    JqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.head.appendChild(JqueryScript);


$("ot-resource").removeAttr('ot-onspecialselect');
$("ot-resource").removeAttr('onclick');
$('ot-point').remove();

$("<div id='damHelperButtons'> <br><br><br></div>").insertAfter($("ot-rendition"))


$("<input class='damhelper' type='button' value='Do Not Move'></input>",{
    onclick: function(){
        console.log($(this).attr('value'))
    }
}).insertAfter($("#damHelperButtons"))

$("<input class='damhelper' type='button' value='Candidate'></input>",{
    onclick: function(){
        console.log($(this).attr('value'))
    }
}).insertAfter($("#damHelperButtons"))


$("<input class='damhelper' type='button' value='Approved To Move'></input>",{
    onclick: function(){
        console.log($(this).attr('value'))
    }
}).insertAfter($("#damHelperButtons"))


/*
$("ot-resource").on( "click", function(event) {
   
   var assetID = $(this).attr('resourceid');

   var modifiedData = {
       "edited_asset":{
           "data":{
               "metadata":[{
                   "id":"KFT.FIELD.LACTALIS_STATUS",
                   "type":"com.artesia.metadata.MetadataField",
                   "value":{
                       "value":{
                           "type":"string",
                           "value":"Approved To Move"}
                        }
                    }
                ]
            }
        }
    }

    var data = {'assetID':assetID, 'modifiedData':modifiedData}
   
    AssetDetailManager.lock (data, function(response, status, success){
        if (success){

            AssetDetailManager.update (data, function(response, status, success){

                console.log('it works');
                console.log(status);
                console.log(success);

                setTimeout(function(){
                    AssetDetailManager.unlock(data)
                },10000)
                
                    
            });
            
           
        }
    });    
}); */

};

x();




