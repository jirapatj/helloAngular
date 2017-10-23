import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: string;
  private age: number;
  private email: string;

  // dictionary
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }

  private todoList: Todo[];
  private skills: string[];
  private isEditable: boolean = true;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.name = "Jirapat Jantsakool";
    this.age = 28;
    this.email = "jewel.jirapat@gmail.com";

    this.address = {
      street: "242 Bangwa",
      city: "Bangkok",
      province: "Bangkok",
      postcode: "10160"
    }


    this.skills = ["Programming", "Basketball", "Playing"];

    // call service
    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response;
    })
  }

  addSkill(skill) {
    this.skills.unshift(skill);
    return false;
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }

  toggleEdit() {
    this.isEditable =! this.isEditable;
  }
}


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}