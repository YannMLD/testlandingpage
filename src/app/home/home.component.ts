import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appTitle = 'apps-landing-page';
  isTrustedSliderActivated = false;
  isPricePannelActivated = false;
  isSatisfiedUsersPannelActicated = false;
  isFaqActivated = false;
  isFeaturesSectionActivated = false;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.appTitle = this.configService.appTitle;
    this.isTrustedSliderActivated = this.configService.isTrustedSliderActivated;
    this.isPricePannelActivated = this.configService.isPricePannelActivated;
    this.isSatisfiedUsersPannelActicated = this.configService.isSatisfiedUsersPannelActicated;
    this.isFaqActivated = this.configService.isFaqActivated;
    this.isFeaturesSectionActivated = this.configService.isFeaturesSectionActivated;
  }

  goToAppStore(): void {
    window.open(this.configService.appStoreUrl, "_blank");
  }
  goToPlayStore(): void {
    window.open(this.configService.playStoreUrl, "_blank");
  }

}
