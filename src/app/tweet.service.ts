import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from './tweet.module';

@Injectable()

export class TweetService {

  constructor(private http: HttpClient) {}

  private tweetsUrl = 'http://localhost:3000/tweets/';
  private tweetsUrlHeroku = 'https://twitter-timeline-256.herokuapp.com/tweets/';

  getTweets(name): Observable<Tweet[]> {
    console.log(this.tweetsUrl + name);
    return this.http.get<Tweet[]>(this.tweetsUrl + name);
  }
}
