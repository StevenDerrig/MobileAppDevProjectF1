import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons, IonList, IonLabel, IonRadio, IonItem, IonListHeader} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-info',
  templateUrl: './current-info.page.html',
  styleUrls: ['./current-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonButtons, IonList, IonLabel, IonRadio, IonItem, IonListHeader]
})
export class CurrentInfoPage implements OnInit {
  drivers = [
    { id: '1', name: 'Max Verstappen' },
    { id: '2', name: 'Sergio Pérez' },
    { id: '3', name: 'Charles Leclerc' },
    { id: '4', name: 'Carlos Sainz' },
    { id: '5', name: 'Lando Norris' },
    { id: '6', name: 'Oscar Piastri' },
    { id: '7', name: 'George Russell' },
    { id: '8', name: 'Fernando Alonso ' },
    { id: '9', name: 'Lewis Hamilton' },
    { id: '10', name: 'Yuki Tsunoda' },
    { id: '11', name: 'Lance Stroll' },
    { id: '12', name: 'Nico Hülkenberg' },
    { id: '13', name: 'Daniel Ricciardo' },
    { id: '14', name: 'Esteban Ocon' },
    { id: '15', name: 'Kevin Magnussen' },
    { id: '16', name: 'Alexander Albon' },
    { id: '17', name: 'Guanyu Zhou' },
    { id: '18', name: 'Pierre Gasly' },
    { id: '19', name: 'Valtteri Bottas' },
    { id: '20', name: 'Logan Sargeant' },
  ];

  selectedDrivers = [];

  saveSelections() {
    localStorage.setItem('selectedDrivers', JSON.stringify(this.selectedDrivers));
  }
  constructor() { }

  ngOnInit() {
    let savedSelections = localStorage.getItem('selectedDrivers');
    if (savedSelections) {
      this.selectedDrivers = JSON.parse(savedSelections);
    }
  }
}
