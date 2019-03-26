import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 /* template: `<form #uform="ngForm" (ngSubmit)='onSubmit(uform.value)'>
            <input type="text" name="FName" ngModel/>
            <input type="text" name="LName" ngModel/>
            <input type="submit" value="Submit"/>
  </form>` */
})
export class AppComponent {
  index :boolean=false;
  checkEdit=false;
  names: string="";
  student: StudentRecord;
  EditStudent: StudentRecord;
  studentList: StudentRecord[]=[];
onSubmit(val:any){
  console.log(val);
}

  title = 'myAngular';
  constructor(){
    this.Init();
  }
  Init(){
    this.names = "hello oshin";
    this.student ={
      Name:'',
      SurName:'',
      Address:'',
      Marks:''
     }
  }
  ClickMe(){
    console.log("hello")
    console.log(this.student);
    if(this.index==false){
      this.studentList.push(this.student);
     
    }
    this.Init();
    }
  Edit(value:any){
    this.index=true;
    this.checkEdit=true; 
    this.EditStudent=this.studentList[value];
    this.Init();
  }
  ClickEdit(){

  }
}
interface StudentRecord{
  Name: string,
  SurName : string,
  Address: string,
  Marks: string
}
interface EStudentRecord{
  EditName: string,
  EditSurName : string,
  EditAddress: string,
  EditMarks: string
}
