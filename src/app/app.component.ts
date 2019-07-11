import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent {
  tweets = [
    {
      id: 0,
      fullname: 'Yurii On',
      nickname: 'NoM3rcy',
      img: 'https://pbs.twimg.com/profile_images/622151044831776768/BQ5ifWI__400x400.png',
      timePost: '22h',
      tweetText: 'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web',
      actionsCount: [0, 2, 3, 0]
    },
    {
      id: 0,
      fullname: 'Пані Н(адійка)',
      nickname: 'NadiykaBlomqvi1',
      img: 'https://pbs.twimg.com/profile_images/991407020560568320/-zZ_Dwos_400x400.jpg',
      timePost: 'Jul 7',
      tweetText: 'JavaScript enables interactive web pages and is an essential part of web applications',
      actionsCount: [1, 0, 4, 5]
    },
    {
      id: 0,
      fullname: 'Пан 3й т ⭕ст™',
      nickname: 'DFENS3000',
      img: 'https://pbs.twimg.com/profile_images/1124174021619343361/q1Lohr8g_400x400.jpg',
      timePost: '2h',
      tweetText: `Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of
                  host software, including server-side in web servers and databases, and in non-web programs such as word processors and
                  PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, 
                  including desktop widgets`,
      actionsCount: [1, 0, 0, 5]
    }
  ];
}

