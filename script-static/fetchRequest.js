export function fetchRequest(url, method, bodyRequest, headersRequest){
    return fetch(`https://todo-app-back.herokuapp.com/${url}`, {
        method: method,
        body: 
            JSON.stringify(bodyRequest),
        headers: headersRequest
    });
}