import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from './tweet.module';

@Injectable()

export class TweetService {

  constructor(private http: HttpClient) {}

  private tweetsUrl = 'http://localhost:3000/';
  private tweetsUrlHeroku = 'https://twitter-timeline-256.herokuapp.com/';

  getTweets(name): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.tweetsUrlHeroku + name);
  }
}
