import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  

  isTeamGridActivated = false;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.isTeamGridActivated = this.configService.isTeamGridActivated;

  }

}
