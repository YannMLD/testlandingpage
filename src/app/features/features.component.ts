import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  isQASectionActivated = false;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.isQASectionActivated = this.configService.isQASectionActivated;

  }

}
