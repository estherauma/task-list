import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton,IonModal } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle,  IonCardContent, IonButton, IonModal, CommonModule, FormsModule, RouterLink,AddTaskModalComponent]
})
export class TasksPage implements OnInit {
  isModalOpen = false;
  constructor() { }

  ngOnInit() {
  }

  

}
