

//fetch('https://raw.githubusercontent.com/mureb/damTestScript/master/damHelper.js', {mode:'cors'}).then((response) => response.text()).then((text)=>eval(text))

var damHelperComs = function(assetID, lactalisStatus){
    
    var modifiedData = {
        "edited_asset":{
            "data":{
                "metadata":[{
                    "id":"KFT.FIELD.LACTALIS_STATUS",
                    "type":"com.artesia.metadata.MetadataField",
                    "value":{
                        "value":{
                            "type":"string",
                            "value":lactalisStatus}
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
 
                 console.log(success);
 
                 setTimeout(function(){
                     AssetDetailManager.unlock(data)
                 },10000)
                 
                     
             });
             
            
         }
     });  
}


var x = function(){

    var JqueryScript = document.createElement('script');
    JqueryScript.type = 'text/javascript';
    JqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.head.appendChild(JqueryScript);


$("ot-resource").removeAttr('ot-onspecialselect');
$("ot-resource").removeAttr('onclick');
$('ot-point').remove();

$("<div class='damHelperButtons'> <br><br><br></div>").insertAfter($("ot-rendition"))

$(".damHelperButtons").prepend($("<input class='damhelper' type='button' value='Do Not Move'></input>"));
$(".damHelperButtons").prepend($("<input class='damhelper' type='button' value='Candidate'></input>"));
$(".damHelperButtons").prepend($("<input class='damhelper' type='button' value='Approved To Move'></input>"));

$('.damhelper').on('click', function(){
   
    var assetID = $(this).parents('ot-resource').attr('resourceid');
   
    var lactalisStatus = $(this).attr('value');
    
    damHelperComs(assetID, lactalisStatus);

});

console.log('version 4');

};

x();




