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

  saveStudentDetails(student: Student):Observable <any> {
    return this.http.post(`${baseUrl}/students`,student);
  }

  updateStudent(id: string, updatedStd: Student) {
    return this.http.patch(`${baseUrl}/students/${id}`,updatedStd);
    }

  deleteStudent(id:string):Observable <any> {
    return this.http.delete(`${baseUrl}/students/${id}`);
  }
  }
