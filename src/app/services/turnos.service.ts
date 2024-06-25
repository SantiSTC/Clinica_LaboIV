import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { Observable, elementAt } from 'rxjs';
import { where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(private firestore: FirestoreService) { }

  guardarTurno(especialidad: string, dniEspecialista: string, paciente: string, dia: string, hora: string) {
    let obj = {
      especialidad: especialidad,
      especialista: dniEspecialista,
      paciente: paciente,
      dia: dia,
      hora: hora,
      estadoDelTurno: 'pendiente',
      razonCancelacion: '',
      razonRechazo: '',
      resenaDelEspecialista: '',
      resenaDelPaciente: '',
      calificacion: -1,
    }
    
    this.firestore.guardar("turnos", obj); 
  }

}
