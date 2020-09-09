import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
data:any;
searchText:any;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.getList();
  }
getList(){
  this.dataService.getList().subscribe(res=>{
    this.data=res.tasks;
    this.data=this.data.sort((a, b) => (a.priority > b.priority) ? 1 : -1);
  },err=>{});
}
deleteList(x){
let fd:FormData=new FormData();
fd.set('taskid',x.id);
this.dataService.deleteTask(fd).subscribe(res=>{this.getList();},err=>{})
}
editTask(x){
  this.dataService.data=x;
  this.router.navigateByUrl('/edit')
}

}
