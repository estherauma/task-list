import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';


@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
  standalone: true,
  imports: [IonHeader,IonToolbar,IonTitle,IonContent,IonButton]
})
export class AddTaskModalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
