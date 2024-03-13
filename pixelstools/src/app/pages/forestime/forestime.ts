import { Component, OnInit } from '@angular/core';
import { DataLandService } from '../../providers/land-data';
import * as moment from 'moment';

@Component({
  selector: 'page-forestime',
  templateUrl: 'forestime.html',
  styleUrls: ['./forestime.scss'],
})
export class ForestimePage implements OnInit {
  lands: any[] = [];

  constructor(private dataLandService: DataLandService) {
    moment.locale('es');
  }

  ngOnInit() {
    this.obtenerItemsConFelling();
  }

  formatDate(timestamp: any){
    const fechaAlmacenada = moment(timestamp, 'x');
    return fechaAlmacenada.fromNow()
  }

  obtenerItemsConFelling() {
    this.dataLandService.obtenerItemsConFelling().subscribe(
      (items) => {
        console.log('Items con información de tala obtenidos correctamente', items);
        this.lands = items.sort((a, b) => {
          const fechaA = this.obtenerFechaMasTemprana(a.felling);
          const fechaB = this.obtenerFechaMasTemprana(b.felling);
          return fechaA - fechaB;
        });
      },
      (error) => {
        console.error('Error al obtener items con información de tala', error);
      }
    );
  }

  private obtenerFechaMasTemprana(felling: number[]): number {
    if (!felling || felling.length === 0) {
      return Infinity; // Si no hay fechas, colocar al final
    }
    // Encontrar la fecha más temprana en el array 'felling'
    return Math.min(...felling);
  }

  eliminarTiempoTala(landNumber:number, timestamp:string){
    this.dataLandService.eliminarTiempoTala(landNumber, timestamp).subscribe(
      (data) => {
        console.log('Datos actualizados:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  actualizarTiempoTala(landNumber:number, timestamp:string){
    this.dataLandService.actualizarTiempoTala(landNumber, timestamp).subscribe(
      (data) => {
        console.log('Datos actualizados:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
