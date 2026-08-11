import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton,ToastController} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { TaskService } from '../task-service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle,  IonCardContent, IonButton, CommonModule, FormsModule, RouterLink]
})
export class TasksPage implements OnInit {
  constructor(private toastController: ToastController, public taskService: TaskService) { }

  ngOnInit() {
  }
  async deleteTask(index: number) {
    this.taskService.tasks.splice(index, 1);
    const toast = await this.toastController.create({
      message: 'Task deleted successfully!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
