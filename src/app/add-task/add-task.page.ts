import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonInput,IonItem,IonButton,IonCard,IonCardHeader,IonCardTitle,
  IonCardContent,IonCardSubtitle,IonSelect,IonSelectOption,
  IonDatetime,IonModal,IonText,IonLabel,ToastController } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { TaskService } from '../task-service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonInput, IonItem, IonButton, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonCardSubtitle, IonSelect, 
    IonSelectOption, IonDatetime, IonModal, IonText, IonLabel,
     CommonModule, FormsModule, RouterLink]
})
export class AddTaskPage implements OnInit {

  isDatePickerOpen = false;
  selectedDate = '';

  task = {
  title: '',
  description: '',
  dueDate: '',
  priority: '',
  status: ''
};

  constructor(private toastController: ToastController, private taskService: TaskService) { }

  ngOnInit() {
  }

  openDatePicker() {
    this.isDatePickerOpen = true;
  }

  closeDatePicker() {
    this.isDatePickerOpen = false;
  }

  async saveTask() {
    this.task.dueDate = this.selectedDate;
    this.taskService.addTask(this.task);
    const toast = await this.toastController.create({
      message: 'Task saved successfully!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
