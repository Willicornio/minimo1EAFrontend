import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/subject';
//import {EscuelaService} from  '../service/escuela.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student';
import {EscuelaService} from '../services/escuela';
declare var M: any;
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  
  registerForm: FormGroup;
  registerFromalumn: FormGroup;
  listasubjects: Subject[];
  submitted= false;
  submitted2= false;
  newAsi: Subject;
  newStudent: Student;
  listasCarras: string [];


  constructor(private formBuilder: FormBuilder, private escuelaservice: EscuelaService, private router: Router) { 
  }

  ngOnInit() {

    this.listasCarras = ["Telematica","Telecos","Aeros"];
        this.cargarAsignaturas();

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],

    })

    this.registerFromalumn = this.formBuilder.group({
      name: ['', Validators.required],
      adress: ['', Validators.required],
      phones: ['', Validators.required],

    })


  }

  onSubmit(añadirFrom: NgForm) {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.addSubject(añadirFrom);
  }
  onSubmit2(registerFromalumn: NgForm) {
    this.submitted2 = true;
  
    // stop here if form is invalid
    if (this.registerFromalumn.invalid) {
        return;
    }
    this.addStudent(registerFromalumn);
  }

addStudent(añadirstudent :NgForm){

  this.newStudent = new Student();
    this.newStudent.name =  añadirstudent.value.name;
    this.newStudent.adress =  añadirstudent.value.adress;
    this.newStudent.phones =  añadirstudent.value.phones;
  this.escuelaservice.postStudent(this.newStudent)
  .subscribe((res) => {
    this.cargarAsignaturas();
    M.toast({html: 'Alumno creado'})
    this.cargarAsignaturas();
    

}), ((error) => {
  console.log(error)});    

}



  addSubject(añadirFrom: NgForm){

    this.newAsi = new Subject();
    this.newAsi.name = añadirFrom.value.name;
    this.escuelaservice.postSubject(this.newAsi)
    .subscribe((res) => {
      this.cargarAsignaturas();
      M.toast({html: 'Asignatura Creada'})
      this.cargarAsignaturas();
      
  
  }), ((error) => {
    console.log(error)});    

    this.cargarAsignaturas();
  }

cargarAsignaturas(){

this.escuelaservice.getSubjects()
.subscribe(res => 
  {
    this.listasubjects = res;
  })

 }


 entrarcarrera(name: string)
 {
  this.router.navigateByUrl("carrera/" + `${name}`);
 }

entrarasignatura(name: String){

  this.router.navigateByUrl("detall/" + `${name}`);

}

get f() { return this.registerFromalumn.controls; }


get g() { return this.registerForm.controls; }

}
