

//fetch('https://raw.githubusercontent.com/mureb/damTestScript/master/damHelper.js', {mode:'cors'}).then((response) => response.text()).then((text)=>eval(text))


var x = function(){

    var JqueryScript = document.createElement('script');
    JqueryScript.type = 'text/javascript';
    JqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.head.appendChild(JqueryScript);


$("ot-resource").removeAttr('ot-onspecialselect')
$("ot-resource").removeAttr('onclick')

$("ot-resource").on( "click", function(event) {
   
   var assetId = $(this).attr('resourceid');

   var editJson = {
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
   
   
    /* 
   var data = {
        "bulk_edit_request_param":{
           "bulk_edit_request":{
              "context":{
                 "asset_ids":[ $(this).attr('resourceid')
                 ],
                 "asssetContentType":[$(this).attr('resourcetype')
                 ],
                 "assetSubContentType":[
                    "none"
                 ],
                 "type":"com.artesia.asset.selection.AssetIdsSelectionContext",
                 "include_descendants":"NONE",
                 "include_deleted_assets":false
              },
              "metadata_values":{
                 "metadata_edit_id_value_list":[
                    {
                       "field_id_value_entries":[
                          {
                             "metadata_field_id":"KFT.FIELD.LACTALIS_STATUS",
                             "metadata_value":{
                                "value":{
                                   "type":"string",
                                   "value":"Approved To Move"
                                }
                             }
                          }
                       ],
                       "metadata_section_id":"METADATA_MISC_EDIT_SECTION"
                    }
                 ]
              }
           }
        }
     };*/

     $.ajax({
        headers : {
            'Accept' : '*/*',
            'Content-Type' : 'application/json, charset=UTF-8',
            'x-otmm-locale': 'en_US',
            'x-requested-by': 1536986997
        },
        url : '/otmmapi/v5/assets/' + assetId,
        type : 'PATCH',
        data : JSON.stringify(editJson),
        success : function(response, textStatus, jqXhr) {
            console.log("Success!!");
        },
        error : function(jqXHR, textStatus, errorThrown) {
            // log the error to the console
            console.log("The following error occured: " + textStatus, errorThrown);
        },
        complete : function() {
            console.log("Code ran!!");
        }
    });

});

};

x();




