import { Component } from '@angular/core';
import * as SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}

const ui = SwaggerUI({
  dom_id: '#swagger-ui',
  spec: null
});
