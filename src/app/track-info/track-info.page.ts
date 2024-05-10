import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { F1APIService } from '../Services/f1-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.page.html',
  styleUrls: ['./track-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle]
})
export class TrackInfoPage implements OnInit {
  tracks: any = [];

  constructor(private f1Circuits: F1APIService) { }

  ngOnInit(): void {
    this.f1Circuits.getTrackInfo().subscribe((data) => {
      this.tracks = data.MRData.RaceTable.Races;
    }
    );

  }
}