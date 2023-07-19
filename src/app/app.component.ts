import { Component, ViewEncapsulation } from '@angular/core';
import * as africa from './africa.json';
import { Maps, Annotations} from '@syncfusion/ej2-angular-maps';
Maps.Inject(Annotations);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'myangularproject';

  public titleSettings: object = {
    text: 'Africa',
  };

  public annotations: object[] = [
    {
      content: '<div id="annotation"><p style="margin-left:10px;font-size:13px;font-weight:500">Facts about Africa</p><hr style="margin-top:-3px;margin-bottom:10px;border:0.5px solid #DDDDDD"><ul style="list-style-type:disc; margin-left:-20px;margin-bottom:2px; font-weight:400"><li>Africa is the second largest and second most populated continent in the world.</li> <li style="padding-top:5px;">Africa has 54 sovereign states and 10 non-sovereign territories.</li> <li style="padding-top:5px;">Algeria is the largest country in Africa, where as Mayotte is the smallest.</li></ul></div>',
      verticalAlignment: 'Far',
      x:'15%', y: '0%'
    },
    {
      content: '<img src="https://ej2.syncfusion.com/angular/demos/assets/maps/images/compass.svg" height="75px" width="75px"/>',
      x:'85%', y:'5%'
    }
  ]

  public layers: object[] = [
    {
      shapeData: africa,
      shapeSettings: {
        fill: 'url(#grad1)',
      }
    },
  ];
}