import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { F1APIService } from '../Services/f1-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-standings',
  templateUrl: './standings.page.html',
  styleUrls: ['./standings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonBackButton, IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, FormsModule]
})
export class StandingsPage implements OnInit {
  showConstructors = false;
  drivers: any = [];
  constructors: any = [];

  constructor(private f1Standing: F1APIService) { }

  ngOnInit(): void {
    this.f1Standing.getDriverStandings().subscribe((data) => {
      //console.log(data);
      this.drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    }
    );
    this.f1Standing.getConstructorStandings().subscribe((data) => {
      //console.log(data);
      this.constructors = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    }
    );

  }
}
