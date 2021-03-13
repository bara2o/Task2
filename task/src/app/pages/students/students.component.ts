import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student} from 'src/app/models/student.model';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students:Student[];
  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
    this.students=this.studentService.onGet();
  }
onDelete(id:number){
  this.studentService.onDelete(id);
}
}
