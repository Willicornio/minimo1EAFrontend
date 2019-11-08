import {HttpClient} from '@angular/common/http'
import { Student } from '../models/student';
import { Subject } from '../models/subject';
import { Observable } from 'rxjs';
import { Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})


export class EscuelaService {

studentNew: any;
subjectNew: any;
students: Student[];
subjects: Subject[];

readonly URL_API = 'http://localhost:3000/api/minimo';

constructor(private http: HttpClient){}

getSubjects():Observable<Subject []>{
    return this.http.get<Subject []>(this.URL_API);
}

getStudents():Observable<Student []>{
    return this.http.get<Student []>(this.URL_API + '/allstudents');
}

postStudent(student: Student){
    return this.http.post(this.URL_API + '/student', student);
}

postSubject(subject: Subject){
    return this.http.post(this.URL_API + '/subject', subject);
}

getSubject(name: String):Observable<Subject>{
    return this.http.get<Subject>(this.URL_API +'/subject'+ `/${name}`);
}

getStudent(name: String):Observable<Student>{
    return this.http.get<Student>(this.URL_API +'/student'+ `/${name}`);
}

añadirStudent(name: String, student: Student){
    return this.http.put(this.URL_API+`/${name}` ,student);
}

añadirCarrera(name: String, student: Student){
    return this.http.put(this.URL_API + '/metercarrera' +`/${name}` ,student);
}

getCarrera(name: String):Observable<Student []>{
    return this.http.get<Student []>(this.URL_API + '/carrera' +`/${name}`);
}

// router.get('/carrera/:name',UsuCtrl.carreraStudent);
// router.put('/metercarrera/:name',UsuCtrl.anadirCarrera)
  

}