import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-current-info',
  templateUrl: './current-info.page.html',
  styleUrls: ['./current-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CurrentInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
