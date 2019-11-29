const line = require('@line/bot-sdk');
const express = require('express');
const lineConfig = {
  channelAccessToken:'ozaQDMIhlhC72GhocJy143j3hgEROwnvZJC+A5NbJbpQI8dp/nkUyHN+8/b/1cqEI8HjO4W6vF92NDFaDg0VSbxJAbh9XOtWbXvOc/2IhACB/lmJ+Gjm38XWTccWITI+doTPvFW2RDmy4rvuE0FEdAdB04t89/1O/w1cDnyilFU=',
  channelSecret:'79745bae1556ad61175ff8ae2fd75956'
};
const client = new line.Client(lineConfig);
const app = express();

app.listen(3000, function() {
  console.log('App now running on port', this.address().port);
});

app.post('/', line.middleware(lineConfig), function(req, res) {
  Promise
    .all(req.body.events.map(handleEvent))
    .then(function(result) {
      res.json(result);
    });
});

function handleEvent(event) {
  switch (event.type) {
    case 'join':
    case 'follow':
      return client.replyMessage(event.replyToken, {
        type: 'text',
        text: '你好請問我們認識嗎?'
      });   
    case 'message':
      switch (event.message.type) {
        case 'text':
          return client.replyMessage(event.replyToken, {
            type: 'text',
            text: (event.message.text+'~*')
          });
      }
  }
}

// var linebot = require('linebot');
// var express = require('express');

// var bot = linebot({
//   channelId:'1653541800',
//   channelSecret: '79745bae1556ad61175ff8ae2fd75956',
//  channelAccessToken:'XUMctz8O6c3f+mhl8NClaIu7MsxtQ/jir53XlpwjUDSLItGQergz1NtAoG+R6X3CI8HjO4W6vF92NDFaDg0VSbxJAbh9XOtWbXvOc/2IhADw7DjJ1/hWQ3JPxObls5oE0eEmNX8KnsrDVf+vBj72GwdB04t89/1O/w1cDnyilFU= '
// });

// bot.on('message', function(event) {
//     console.log(event); //把收到訊息的 event 印出來看看
//   });
  
//   const app = express();
//   const linebotParser = bot.parser();
//   app.post('/', linebotParser);
  
//   //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
//   var server = app.listen(process.env.PORT || 8080, function() {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });

