const webhookContent = document.querySelector("#webhook-content")

function sendWebhook(url, content){
    
    fetch(url, {
     "method":"POST",
     "headers": {"Content-Type" : "application/json"},
     "body": JSON.stringify({
        "content":content
      })
    })
    .then(res=> console.log(res))
    .catch(err => console.error(err))
}