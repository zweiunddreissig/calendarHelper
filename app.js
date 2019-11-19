// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
    channelId:'1653541800',
    channelSecret: '79745bae1556ad61175ff8ae2fd75956',
   channelAccessToken:'ozaQDMIhlhC72GhocJy143j3hgEROwnvZJC+A5NbJbpQI8dp/nkUyHN+8/b/1cqEI8HjO4W6vF92NDFaDg0VSbxJAbh9XOtWbXvOc/2IhACB/lmJ+Gjm38XWTccWITI+doTPvFW2RDmy4rvuE0FEdAdB04t89/1O/w1cDnyilFU='
  });
var answer=['True mastery of any skill takes a lifetime. 對任何技能的掌握，都需要一生的刻苦操練。', ' Sweat is the lubricant of success. 汗水是成功的潤滑劑。'
,'If you are doing your best,you will not have to worry about failure.如果你竭盡全力，你就不用擔心失敗。',`Energy and persistence conquer all things.
能量和堅持可以征服一切事情。`,
`Bravery never goes out of fashion.
勇敢永遠不過時！`,
`Those who turn back never reach the summit.
回頭的人永遠到不了最高峰！`,
`Proper preparation solves 80 percent of life’s problems.
適當的準備能解決生活中80%的問題。`,
`Winners do what losers don’t want to do.
勝利者做失敗者不願意做的事！`,
`Every noble work is at first impossible.
每一個偉大的工程最初看起來都是不可能做到的！`,
`We improve ourselves by victories over ourselves. There must be contests, and we must win.
我們通過戰勝自己來改進自我。 那裡一定有競賽，我們一定要贏！`,
`Giving is a reward in itself.
給予本身就是一個獎賞。`,
`Never underestimate your power to change yourself!
永遠不要低估改變自我的能力！`,
`A man is not old as long as he is seeking something. A man is not old until regrets take the place of dreams. (J. Barrymore)
只要一個人還有追求，他就沒有老。直到後悔取代了夢想，一個人才算老。（巴里摩爾）`,
`You have to believe in yourself . That’s the secret of success.(Charles Chaplin , American actor )
人必須相信自己，這是成功的秘訣。 (美國演員 卓別林. C.)`,
`One’s real value first lies in to what degree and what sense he set himself.(Einstein Germany)
一個人的真正價值首先決定於他在什麼程度上和在什麼意義上從自我解放出來。（愛因斯坦德國） `,
`Live beautifully, dream passionately, love completely.
活要活得美好，夢要夢得熱烈，愛要愛得完整。　`,
`Albert Einstein: Logic will get you from A to B. Imagination will take you everywhere.
愛因斯坦：邏輯會帶你從A點到達B點，想像力將把你帶到任何地方。`,
`The greatest test of courage on earth is to bear defeat without losing heart.
世界上對勇氣的最大考驗是忍受失敗而不喪失信心。`,
`A man’s best friends are his ten fingers.
人最好的朋友是自己的十個手指。(靠自己最實在)`,
`Only they who fulfill their duties in everyday matters will fulfill them on  great occasions.
只有在日常生活中盡責的人才會在重大時刻盡責。`,
`The shortest way to do many things is to only one thing at a time.
做許多事情的捷徑就是一次只做一件一件事。`,
`All things in their being are good for something.
天生我才必有用。`,
`There’s only one corner of the universe you can be sure of improving, and that’s your own self.
這個宇宙中只有一個角落你肯定可以改進，那就是你自己。`,
`Difficult circumstances serve as a textbook of life for people.
困難坎坷是人們的生活教科書。`,
`The world is like a mirror: Frown at itand it frowns at you; smile, and it smiles too.
世界猶如一面鏡子：朝它皺眉它就朝你皺眉，朝它微笑它也朝你微笑。`,
`Failure is the mother of success. – Thomas Paine
失敗乃成功之母。`,
`The reason why a great man is great is that he resolves to be a great man.
偉人之所以偉大，是因為他立志要成為偉大的人。`,
`The unexamined life is not worth living. — Socrates
混混噩噩的生活不值得過。 — 蘇格拉底`,
`Suffering is the most powerful teacher of life.
苦難是人生最偉大的老師。`,
`一個人總要走陌生的路，看陌生的風景，聽陌生的歌，然後在某個不經意的瞬間，你會發現，原本是費盡心機想要忘記的事情真的就那麼忘記了。
One is always on a strange road, watching strange scenery and listeningto strange music、 Then one day, you will find that the things you tryhard to forget are already gone.
`,
`幸福，不是長生不老，不是大魚大肉，不是權傾朝野。幸福是每一個微小的生活願望達成。當你想吃的時候有得吃，想被愛的時候有人來愛你。
Happiness is not about being immortal nor having food or rights inone’s hand、 It’s about having each tiny wish come true, or havingsomething to eat when you are hungry or having someone’s love when youneed love.`,
`愛情是燈，友情是影子，當燈滅了，你會發現你的周圍都是影子。朋友，是在最後可以給你力量的人。
Love is a lamp, while friendship is the shadow、 When the lamp is off,you will find the shadow everywhere、 Friend is who can give youstrength at last.`,
`我愛你不是因為你是誰，而是我在你面前可以是誰。I love you not for who you are, but for who I am before you.`,
`愛情，要麼讓人成熟，要麼讓人墮落。
Love makes man grow up or sink down.`,
`舉得起放得下的叫舉重，舉得起放不下的叫負重。可惜，大多數人的愛情，都是負重的。
If you can hold something up and put it down, it is calledweight-lifting; if you can hold something up but can never put it down,it’s called burden-bearing、 Pitifully, most of people are bearing heavyburdens when they are in love.`,
`我們每個人都生活在各自的過去中，人們會用一分鐘的時間去認識一個人，用一小時的時間去喜歡一個人，再用一天的時間去愛上一個人，到最後呢，卻要用一輩子的時間去忘記一個人。
We all live in the past、 We take a minute to know someone, one hour tolike someone, and one day to love someone, but the whole life to forgetsomeone.`,
`一個人一生可以愛上很多的人，等你獲得真正屬於你的幸福之後，你就會明白一起的傷痛其實是一種財富，它讓你學會更好地去把握和珍惜你愛的人。
One may fall in love with many people during the lifetime、 When youfinally get your own happiness, you will understand the previoussadness is kind of treasure, which makes you better to hold and cherishthe people you love.`,
`年輕的時候會想要談很多次戀愛，但是隨著年齡的增長，終於領悟到愛一個人，就算用一輩子的時間，還是會嫌不夠。慢慢地去瞭解這個人，體諒這個人，直到愛上為止，是需要有非常寬大的胸襟才行。
When you are young, you may want several love experiences、 But as timegoes on, you will realize that if you really love someone, the wholelife will not be enough.
You need time to know, to forgive and to love、All this needs a very big mind.`,
`當明天變成了今天成為了昨天，最後成為記憶裡不再重要的某一天，我們突然發現自己在不知不覺中已被時間推著向前走，這不是靜止火車裡，與相鄰列車交錯時，仿佛自己在前進的錯覺，而是我們真實的在成長，在這件事裡成了另一個自己。
When tomorrow turns in today, yesterday, and someday that no moreimportant in your memory, we suddenly realize that we r pushed forwardby time、 This is not a train in still in which you may feel forwardwhen another train goes by、 It is the truth that we’ve all grown up、And we become different.`,
`A man is not old until regrets take the place of dreams.
當後悔取代了夢想，一個人才算老了。`,
`Don’t let a little dispute break up a great friendship.
不要讓小小的爭端損毀了一場偉大的友誼。`,
`Johan Wolfgang Goethe: Man errs so long as he strives.
德國詩人、劇作家歌德：只要奮鬥，人就會犯錯。`,
`Do not keep anything for a special occasion, because every day that you live is a special occasion.
不要將你的東西為了某一個特別的時刻而預留著，因為你生活的每一天都是那麼特別。`,
`It’s not easy to change friendship into love. But it’s even harder to turn love into friendship.
讓友情變成愛情不是件容易的事，而讓愛情變成友情卻更困難。`,
`Michael Jackson 《You Are Not Alone》: I can hear your prayers. Your burdens I will bear. But first I need your hand then forever can begin.
MJ的歌《你並不孤單》：我聽到了你的祈願，我願肩承你的負擔，但我需要先牽著你的手，才能告訴你什麼是永遠。`,
`When I thought I couldn’t go on, I forced myself to keep going. My success is based on persistence, not luck.
當我以為我無法繼續走下去時，我強迫自己要繼續前進。我的成功是基於我的堅持，並非運氣。`,
`The better to have loved and lost; Than never to have loved at all.
寧肯愛過而又失去，也不要做一個從未愛過的人。`,
`Dreaming in the memory is not as good as waiting for the paradise in the hell.
在回憶裡繼續夢幻，不如在地獄裡等待天堂。`,
`If I had a single flower for every time I think about you, I could walk forever in my garden.
假如每次想起你我都會得到一朵鮮花，那麼我將永遠在花叢中徜徉。
`];
// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  let text=event.message.text;
  let replyMsg;
  let l=answer.length;
  switch(text){
      case '+':

            replyMsg = answer[Math.floor((Math.random())*l)];
            // replyMsg=answer.length.toString()
      break    
      default:
            replyMsg=`Hello你剛才說的是:${event.message.text}`;
  }

  
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
    
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理

  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 8000, function () {
    console.log('[BOT已準備就緒]');
});