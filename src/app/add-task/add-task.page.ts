import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonInput,IonItem,IonButton,IonCard,IonCardHeader,IonCardTitle,
  IonCardContent,IonCardSubtitle,IonSelect,IonSelectOption,
  IonDatetime,IonModal,IonText,IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonInput, IonItem, IonButton, IonCard, IonCardHeader, 
    IonCardTitle, IonCardContent, IonCardSubtitle, IonSelect, 
    IonSelectOption, IonDatetime, IonModal, IonText, IonLabel, CommonModule, FormsModule, RouterLink]
})
export class AddTaskPage implements OnInit {

  isDatePickerOpen = false;
  selectedDate = '';

  constructor() { }

  ngOnInit() {
  }

  openDatePicker() {
    this.isDatePickerOpen = true;
  }

  closeDatePicker() {
    this.isDatePickerOpen = false;
  }

}
