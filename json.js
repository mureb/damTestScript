

var x = 

{
    "bulk_edit_request_param":{
       "bulk_edit_request":{
          "context":{
             "asset_ids":[
                "00accbfa7255c6b9fcda93c48ee9c5c82243dfa2"
             ],
             "asssetContentType":[
                "LAYOUT"
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
 }

 var correct={
    "bulk_edit_request_param":{
       "bulk_edit_request":{
          "context":{
             "asset_ids":[
                "00accbfa7255c6b9fcda93c48ee9c5c82243dfa2",
                "002eff44bafbd1ca06205f3f937d85812b1cc781"
             ],
             "asssetContentType":[
                "LAYOUT",
                "LAYOUT"
             ],
             "assetSubContentType":[
                "none",
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
 }













//right one


content-length: 617
content-type: application/json; charset=UTF-8

sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-origin
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36



x-requested-with: XMLHttpRequest



//wrong one

content-length: 1369

sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-origin
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36
x-requested-with: XMLHttpRequest










Request URL: https://dam.kraftheinzcompany.com/otmmapi/v5/assets/41481c3cf0e8fb1aa8ce0a7988ff59305d694a62

:authority: dam.kraftheinzcompany.com
:method: PATCH
:path: /otmmapi/v5/assets/41481c3cf0e8fb1aa8ce0a7988ff59305d694a62
:scheme: https
accept: */*
accept-encoding: gzip, deflate, br
accept-language: en-US,en;q=0.9,pt;q=0.8
content-length: 182
content-type: application/json; charset=UTF-8
cookie: JSESSIONID=tp4EPUet9YT3H5vCfJKo6TUYiGzSXUm7GLs4jId7.OTMMPROD1; _ga=GA1.2.157103454.1617807653; AWSALB=4r8uNyWU9zewMbiAPfBKRjz89Bk36ym16ycIy0Rtinir6wOw4gA7frrCzhHjTkaiCM/T4klTxf7XEi/MjAog+W9d3XHU7y23kXvVIGubX9xgjCn0dHycpyn/OM55; AWSALBCORS=4r8uNyWU9zewMbiAPfBKRjz89Bk36ym16ycIy0Rtinir6wOw4gA7frrCzhHjTkaiCM/T4klTxf7XEi/MjAog+W9d3XHU7y23kXvVIGubX9xgjCn0dHycpyn/OM55
origin: https://dam.kraftheinzcompany.com
referer: https://dam.kraftheinzcompany.com/
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-origin
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36
x-otmm-locale: en_US
x-requested-by: 1536986997
x-requested-with: XMLHttpRequest


{"edited_asset":{"data":{"metadata":[{"id":"KFT.FIELD.LACTALIS_STATUS","type":"com.artesia.metadata.MetadataField","value":{"value":{"type":"string","value":"Approved To Move"}}}]}}}