import { Component, OnInit } from '@angular/core';
import eventService from './event.service';
import { eventListeners } from '@popperjs/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  token! : string;

  constructor(private cookieService: CookieService) {


    eventService.listen("usuario Logou", (logou: string) => {  
      this.cookieService.deleteAll(); 
      this.cookieService.set("JWT", logou )
    });
  }



  ngOnInit(): void {

     }
}
