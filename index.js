const webhook = document.querySelector("#webhook")


function sendWebhook(content){
    let URL = `https://discordapp.com/api/webhooks/755676013874249828/GXyFopRfnAQNalYYoRun0OkAwZqXLSSxVY0FZurNfg4rIBk1MWRSTMy3fpdrVxFHmyLA`;
    fetch(URL, {
     "method":"POST",
     "headers": {"Content-Type": "application/json"},
     "body": JSON.stringify({
        "content":content
      })
    })
    .then(res=> console.log(res))
    .catch(err => console.error(err))
}