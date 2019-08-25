import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from './tweet.module';

@Injectable()

export class TweetService {

  constructor(private http: HttpClient) {}

  private tweetsUrlHeroku = 'https://twitter-timeline-256.herokuapp.com/tweets/';

  getTweets(name): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.tweetsUrlHeroku + name);
  }
}
