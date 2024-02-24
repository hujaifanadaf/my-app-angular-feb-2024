import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Student } from './model';
import { ActivatedRoute, Router } from '@angular/router';

const STUDENT = [
  {
      name: 'manthan',
      age: 32,
      email: 'test@test.com',
      number: '12457654'
  },
  {
      name: 'prem',
      age: 12,
      email: 'test@test.com',
      number: '12457654'
  },
  {
      name: 'sachin',
      age: 23,
      email: 'test@test.com',
      number: '12457654'
  },
  {
      name: 'rahul',
      age: 38,
      email: 'test@test.com',
      number: '12457654'
  },
  {
      name: 'shubham',
      age: 18,
      email: 'test@test.com',
      number: '12457654'
  }
];
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [NgFor,NgIf,NgClass,FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit{

  public studentList!:Student[];
  public ShowTable:boolean=true;
  public searchName:string="";
  public student!:Student;
  
  
  constructor(private studentService:StudentService,private router:Router)
  {
    this.initStudent();
  }

  ngOnInit(): void {
    this.studentList=this.studentService.students;
  }
  initStudent()
  {
    this.student=  {
      id:'',
      name: '',
      age: 0,
      email: '',
      number: '',
  };
  }

  toggleTable()
  {
    this.ShowTable=!this.ShowTable;
  }

  deleteStudent(index:number)
  {
    this.studentList.splice(index,1);
  }

  // SearchByName()
  // {
  //   this.studentList=STUDENT.filter((std:any)=>{
  //     return std.name.toLowerCase().includes(this.searchName.toLowerCase())
  //   })
  // }

  addStudent()
  {
    this.studentList.unshift(this.student);
    this.initStudent();
  
  }

  goTo()
  {
      this.router.navigate(['new-student']);
  }

  goToDetail(id:string)
  {
    this.router.navigate(['view-student',id]);//dynamic query paramater

  }
  goToUpdate(id:string)
  {
    this.router.navigate(['update-student',id]);

  }
}
