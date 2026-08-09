import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonInput,IonItem,IonButton,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonCardSubtitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, CommonModule, FormsModule, RouterLink]
})
export class AddTaskPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
