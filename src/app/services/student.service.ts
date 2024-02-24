import { Injectable } from '@angular/core';
import { Student } from '../student/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:5000/api';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public studentList: Student[];

  constructor(private http:HttpClient) {
    this.studentList = [];
  }

  get students(): Student[] {
    return this.studentList;
  }

  set students(value: Student[]) {
    this.studentList = value;
  }

  getStudents():Observable<any>{
    console.log(`${baseUrl}/students`);
    return this.http.get(`${baseUrl}/students`)
  }

  getStudentDetails(id: string):Observable <any> {
    return this.http.get(`${baseUrl}/students/${id}`);
  }

  saveStudentDetails(student: Student) {
    this.studentList.unshift(student);
  }

  updateStudent(id: string, updatedStd: Student) {
    const index = this.studentList.findIndex((std) => std.id === id);
    if(index > -1) {
      this.studentList[index] = updatedStd;
    }
  }
}