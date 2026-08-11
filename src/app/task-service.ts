import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = [
    {
      title: 'Learn Angular',
      description: 'Learn Angular description',
      dueDate: '2024-06-30',
      priority: 'High',
      status: 'Pending'
    }
  ];

  addTask(task: any) {
    this.tasks.push(task);
  }
  
}
