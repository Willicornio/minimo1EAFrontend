import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Subject } from '../models/subject';
import { Student } from '../models/student';
import {EscuelaService} from '../services/escuela';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
 
declare var M: any;
declare var lista1: [];

@Component({
  selector: 'app-subjectdetall',
  templateUrl: './subjectdetall.component.html',
  styleUrls: ['./subjectdetall.component.css']
})
export class SubjectdetallComponent implements OnInit {

  anadirForm: FormGroup;
  nameAsig: any;
  asignaturaActual: Subject;
  listaTodos: Student[];
  listaAlumnosActual: string [];
  submitted2= false;
  alumnoAñadido: Student;
  i: Int32Array;
  sutudentActual: Student;
 
  protected  listaTodos2: Student[] = [];
  constructor(private activatedRouter: ActivatedRoute,private formBuilder: FormBuilder, private escuelaservice: EscuelaService) { }
 
  ngOnInit() {
 

    

    this.anadirForm = this.formBuilder.group({
      name: ['', Validators.required],

    })


    
this.activatedRouter.params.subscribe(params => {
  if (typeof params['nameAsig'] !== 'undefined') {
    this.nameAsig = params['nameAsig'];
  } else {
    this.nameAsig = "No funciono >:C";
  }
});
 


this.getSubject(this.nameAsig);
 

 
  }

  get f() { return this.anadirForm.controls; }


refrescarAlumnos(lista : Student [])
{

  this.listaTodos2 = lista;
}

  onSubmit2(registerFromalumn: NgForm) {
    this.submitted2 = true;
  
    // stop here if form is invalid
    if (this.anadirForm.invalid) {
        return;
    }

    this.alumnoAñadido = new Student();
    this.alumnoAñadido.name = this.anadirForm.value.name;
    this.alumnoAñadido.adress = this.anadirForm.value.adress;
    this.alumnoAñadido.phones = this.anadirForm.value.phones;


    this.añadirAlumno(this.alumnoAñadido);
  }
 
  getSudent(name: String)
  {
    this.escuelaservice.getStudent(name)
      .subscribe(res => 
        {        

          this.sutudentActual = new Student();
          this.sutudentActual = res;
           
          this.listaTodos2.push(this.sutudentActual);
         
        })
  }
 
  getSubject(name: String)
  {
 this.listaTodos2 = [];
    this.escuelaservice.getSubject(this.nameAsig)
      .subscribe(res => 
        {        
          this.asignaturaActual = res;   
          this.listaAlumnosActual = this.asignaturaActual.students;

          this.recuperarAlumnos(this.listaAlumnosActual);

          
        })
  }
 
  añadirAlumno(student: Student)
  {
 
    this.escuelaservice.añadirStudent(this.nameAsig, student)
      .subscribe(res => 
        {        
          

          M.toast({html: 'Se ha añadido!'});    
          this.getSubject(this.nameAsig);
 

        })
 
  }


recuperarAlumnos(listaAlumnosActual: string[])
{

//   while(this.i < listaAlumnosActual.length)
//   {


// this.getSudent( this.listaAlumnosActual.substring(this.i, this.i+"1"))


//   }

this.listaAlumnosActual.forEach(element => {
  

  if (element == "" || element == null)
  {}
  else
  {
  this.getSudent( element);
  }
});

  listaAlumnosActual.length

}

 
}
