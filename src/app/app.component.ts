import { Component } from '@angular/core';
import { TweetService } from './tweet.service';
import { Tweet } from './tweet.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  constructor(private tweetService: TweetService) {}

  userName = '';
  tweets: Tweet[] =[];

  getTweets() {
    this.tweetService.getTweets(this.userName).subscribe(
      tweets => this.tweets = tweets,
      err => console.log(err.error)
    );
  }
}
