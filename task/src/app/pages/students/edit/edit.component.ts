import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:number;
header:string;
student: Student = {
  id:0,
  name:'',
  gpa: 0 ,
  dateOfBirth : 0
}
  constructor(private router:Router , private rout :ActivatedRoute,private studentService:StudentsService) { }

  ngOnInit(): void {
   this.id= +this.rout.snapshot.paramMap.get('id');
   this.header=this.id===0? 'Add Student':'Edit Student';
   if(this.id !=0){
     this.student = this.studentService.onGetStudent(this.id);
   }
  }
onSubmit(form: NgForm){
let student:Student={
  id:form.value.id,
  name:form.value.name,
  gpa:form.value.gpa,
  dateOfBirth:form.value.dateOfBirth,
}
if(this.id===0){
this.studentService.onAdd(student);}
else{
  this.studentService.onUpdate(student);
}
this.router.navigateByUrl('');
}

}
