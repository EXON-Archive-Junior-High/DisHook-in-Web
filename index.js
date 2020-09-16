const webhookContent = document.querySelector("#webhook-content")

function sendWebhook(url, content, name, avatar_url){
    
    fetch(url, {
        "method":"POST",
        "headers": {"Content-Type" : "application/json"},
        "body": JSON.stringify({
            "content":content,
            "username":name,
            "avatar_url":avatar_url
        })
    })
    .then(res=> console.log(res))
    .catch(err => console.error(err))
}