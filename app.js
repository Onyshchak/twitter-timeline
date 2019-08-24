const express = require('express');
const app = express();
const cors = require('cors');
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/tweets/:name', async (req, res) => {

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

app.listen(3000);
