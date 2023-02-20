// Endpoint for Watson Assistant webhook
//
g_app.post( "/asyncwrapper", function( request, response )
{
   
    var str = request.body.str ? request.body.str : "";
    
    // 1. Respond right away so the chatbot can move on
    // 2. Call the async web service
    // 3. After the web service responds, send a message to the chatbot using the chatbot web api
    
    response.status( 200 ).json( { "error_str" : "", "result" : "Success" } );
    

            
} );
