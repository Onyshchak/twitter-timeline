import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less']
})

export class TimelineComponent {
  @Input() tweet;
  // tweet = {
  //   id: 0,
  //   fullname: 'Yurii On',
  //   nickname: 'NoM3rcy',
  //   timePost: '22h',
  //   tweetText: '#справаГандзюк #ХтоЗамовивКатюГандзюк #АктивістиНеМішені',
  //   actionsCount: [0, 2, 3, 0]
  // };
}
