import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'apps-landing-page';

  constructor(
    private configService: ConfigService
  ) {

  }

  ngOnInit() {
    this.appTitle = this.configService.appTitle;
  }

  goToAppStore(): void {
    window.open(this.configService.appStoreUrl, "_blank");
  }
  goToPlayStore(): void {
    window.open(this.configService.playStoreUrl, "_blank");
  }

}
