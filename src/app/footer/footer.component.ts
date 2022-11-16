import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appTitle = 'apps-landing-page';
  areSocialsActivated = false;

  constructor(
    private configService: ConfigService
  ) {

  }

  ngOnInit() {
    this.appTitle = this.configService.appTitle;
    this.areSocialsActivated = this.configService.areSocialsActivated;
  }

  goToAppStore(): void {
    window.open(this.configService.appStoreUrl, "_blank");
  }
  goToPlayStore(): void {
    window.open(this.configService.playStoreUrl, "_blank");
  }

}
