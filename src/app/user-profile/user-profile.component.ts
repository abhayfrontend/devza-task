import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
cars:any=[];
selectedCars2:any=[];
title:any;
btnName:any;
data:FormData=new FormData();
params:any={
  message:'',
  due_date:new Date,
  priority:1,
  assigned_to:1
}
users:any;
  constructor(private router:Router,private dataService:DataService) {

   }

  ngOnInit() {
    if(this.router.url=="/create"){
      this.title="Create Task"
      this.btnName="Create";
    }
    if(this.router.url=="/edit"){
      this.title="Edit Task";
      this.btnName="Update"
      let x=this.dataService.data
      this.params={
        message:x.message,
        due_data:x.due_date,
        priority:x.priority,
        assigned_to:x.assigned_to
        
      }
      this.params['id']=x.id;
      console.log(this.dataService.data)
    }
    this.getUsers();
  
  }
  updateTask(){
    this.data.set('message',this.params.message)
    this.data.set('due_date',this.params.due_date)
    this.data.set('priority',this.params.priority)
    this.data.set('assigned_to',this.params.assigned_to)
    this.data.set('taskid',this.params.id)
this.dataService.updateTask(this.data).subscribe(res=>{
  this.clearField();
},err=>{})
  }
  createTask(){
    this.data.set('message',this.params.message)
    this.data.set('due_date',this.params.due_date)
    this.data.set('priority',this.params.priority)
    this.data.set('assigned_to',this.params.assigned_to)

this.dataService.createTask(this.data).subscribe(res=>{
  this.clearField();
},err=>{})
  }
  getUsers(){
    this.dataService.getUsers().subscribe(res=>{

      this.users=res.users;
    },err=>{})
  }

clearField(){
  this.params={
    message:'',
    due_date:new Date,
    priority:1,
    assigned_to:1
  }
}
addTask(){
  if(this.btnName=="Create"){
    this.createTask();
  }
  else if(this.btnName=="Update"){
    this.updateTask();
  }
}
}
