import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ourEmail = "";
  ourPhoneNumber = "";


  constructor(private configService:ConfigService) { }

  ngOnInit(): void {
    this.ourEmail = this.configService.ourEmail;
    this.ourPhoneNumber = this.configService.ourPhoneNumber;

  }

}
