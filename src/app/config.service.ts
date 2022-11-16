import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(){}

  public appTitle = "AppTitle";
  public appStoreUrl = "https://travote.com";
  public playStoreUrl = "https://travote.com";

  // Home
  isTrustedSliderActivated = true;
  isPricePannelActivated = true;
  isSatisfiedUsersPannelActicated = true;
  isFaqActivated = true;
  isFeaturesSectionActivated = true;

  // About
  isTeamGridActivated = true;

  // Features
  isQASectionActivated = true;

  // Contact
  ourEmail = "hello@cancanne.com";
  ourPhoneNumber = "06.49.59.37.72";

  // Footer
  areSocialsActivated = false;


  //Using any
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
  this.messageSource.next(message)
  }

}
