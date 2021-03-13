import { Injectable } from '@angular/core';
import { Student} from '../models/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
students:Student[]=[];
  constructor() { }
  onGet(){
    return this.students;
  }
  onGetStudent(id:Number){
    return this.students.find(x=>x.id===id);
  }
  onAdd(student:Student){
    this.students.push(student);
  }
  onDelete(id:Number){
    let student = this.students.find(x=>x.id);
    let index = this.students.indexOf(student,0);
    this.students.splice(index,1);
  }
  onUpdate(student:Student){
let oldstudent=this.students.find(x=>x.id===student.id);
oldstudent.name=student.name;
oldstudent.gpa=student.gpa;
oldstudent.dateOfBirth=student.dateOfBirth;
  }
}
