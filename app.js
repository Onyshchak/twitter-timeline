const express = require('express');
const server = express();
const cors = require('cors');
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'K32wsGriavIfDSbVEOXHqJtEk',
  consumer_secret: 'ZhB0Sb8E1MVNQ4dXOCPmAwI4m31WVAbmxqtTRCyoy4g9nlilzm',
  access_token_key: '1112713784454451200-PqrsDzfRBJlt9LM9Uybwv27OJ1U018',
  access_token_secret: 'KYSA62Idn9THGYrMDwLCsgjoRkYfP11Ecx6JXV9aC7cKz'
});

// server.use(cors());
// server.use(express.urlencoded({ extended: true }));
// server.use(express.json());

server.use(express.static(__dirname + '/dist/twitter-timeline'));

server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/twitter-timeline/index.html'));
});

server.listen(process.env.PORT || 8080);

server.get('/tweets/:name', async (req, res) => {

  const params = {screen_name: req.params.name, count: 30, tweet_mode:'extended'};
  const modifTweets = [];

  try {
    client.get('statuses/user_timeline', params, function(error, tweets) {
      if (error)
        throw error;
      tweets.forEach(tweet => {
        if (!!tweet.entities.user_mentions.length) return;

        let image = null;
        if (!!tweet.entities.media)
          image = tweet.entities.media[0].media_url;

        const modifTweet = {
          fullName: tweet.user.name,
          nickname: tweet.user.screen_name,
          img: tweet.user.profile_image_url,
          timePost: tweet.created_at.split(' ').slice(1, 3).join(' '),
          tweetText: tweet.full_text.substring(0, tweet.full_text.lastIndexOf(' ')),
          tweetImg: image,
          actionsCount: [tweet.retweet_count, tweet.favorite_count]
        };
        modifTweets.push(modifTweet);
      });
      res.json(modifTweets);
    });
  } catch (e) {
    res.json({message: e});
  }
});

// server.listen(3000);
