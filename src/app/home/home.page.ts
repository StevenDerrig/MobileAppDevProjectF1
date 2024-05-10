import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, FormsModule, CommonModule, RouterLinkWithHref]
})
export class HomePage {
  constructor() {}

  //open browser to the formula 1 website
  async getBrowser() {
    await Browser.open({ url: 'https://www.formula1.com/' });
  }
}
