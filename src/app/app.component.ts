import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button'

import { FacebookLoginService } from './facebook-login.service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_BUTTON_DIRECTIVES],
  providers: [FacebookLoginService]
})
export class AppComponent {
  constructor(private facebookLogin: FacebookLoginService) {}
}
