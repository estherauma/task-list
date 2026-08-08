import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-updated-tasks',
  templateUrl: './updated-tasks.page.html',
  styleUrls: ['./updated-tasks.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, RouterLink]
})
export class UpdatedTasksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
