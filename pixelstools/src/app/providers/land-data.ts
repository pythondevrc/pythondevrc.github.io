import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataLandService {
  private localStorageKey = 'landsData';
  private jsonUrl = 'assets/data/landsdata.json';

  constructor(private http: HttpClient) { }

  private obtenerDatosDesdeLocalStorage(): any[] {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  private guardarDatosEnLocalStorage(datos: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(datos));
  }

  obtenerDatos(): Observable<any[]> {
    const localData = this.obtenerDatosDesdeLocalStorage();

    if (localData.length > 0) {
      return of(localData);
    } else {
      return this.http.get<any[]>(this.jsonUrl).pipe(
        map((data: any) => {
          this.guardarDatosEnLocalStorage(data);
          return data;
        }),
        catchError((error) => {
          console.error('Error al cargar datos desde el archivo JSON:', error);
          return of([]); // Devolver un array vacío en caso de error
        })
      );
    }
  }

  agregarInformacionTala(itemNumero: number, fellingDate: string): Observable<any> {
    return new Observable((observer) => {
      this.obtenerDatos().subscribe((data: any) => {
        const itemIndex = data.findIndex((item: any) => item.numero === itemNumero);

        if (itemIndex !== -1) {
          data[itemIndex].felling = data[itemIndex].felling || [];
          data[itemIndex].felling.push(fellingDate);
          this.guardarDatosEnLocalStorage(data);
          observer.next(data);
          observer.complete();
        } else {
          observer.error('Elemento no encontrado');
        }
      });
    });
  }

  obtenerItemsConFelling(): Observable<any[]> {
    return this.obtenerDatos().pipe(
      map((data: any) => data.filter((item: any) => item.felling && item.felling.length > 0))
    );
  }

  eliminarTiempoTala(itemNumero: number, fellingDate: string): Observable<any> {
    return new Observable((observer) => {
      this.obtenerDatos().subscribe((data: any) => {
        const itemIndex = data.findIndex((item: any) => item.numero === itemNumero);

        if (itemIndex !== -1) {
          data[itemIndex].felling = data[itemIndex].felling || [];

          // Eliminar el tiempo de tala
          const fechaIndex = data[itemIndex].felling.indexOf(fellingDate);
          if (fechaIndex !== -1) {
            data[itemIndex].felling.splice(fechaIndex, 1);
            this.guardarDatosEnLocalStorage(data);
            observer.next(data);
            observer.complete();
          } else {
            observer.error('Fecha de tala no encontrada');
          }
        } else {
          observer.error('Elemento no encontrado');
        }
      });
    });
  }

  actualizarTiempoTala(itemNumero: number, fellingDate: string): Observable<any> {
    return new Observable((observer) => {
      this.obtenerDatos().subscribe((data: any) => {
        const itemIndex = data.findIndex((item: any) => item.numero === itemNumero);

        if (itemIndex !== -1) {
          data[itemIndex].felling = data[itemIndex].felling || [];

          // Actualizar el tiempo de tala a 7.25 horas más tarde
          const fechaIndex = data[itemIndex].felling.indexOf(fellingDate);
          if (fechaIndex !== -1) {
            const fechaActual = new Date();
            const tiempoEnMilisegundos = fechaActual.getTime();
            const tiempoModificado = tiempoEnMilisegundos + (7.25 * 60 * 60 * 1000);
            data[itemIndex].felling[fechaIndex] = `${tiempoModificado}`;
            this.guardarDatosEnLocalStorage(data);
            observer.next(data);
            observer.complete();
          } else {
            observer.error('Fecha de tala no encontrada');
          }
        } else {
          observer.error('Elemento no encontrado');
        }
      });
    });
  }

  recalcularTiempoTala(itemNumero: number, fellingDate: string): Observable<any> {
    return new Observable((observer) => {
      this.obtenerDatos().subscribe((data: any) => {
        const itemIndex = data.findIndex((item: any) => item.numero === itemNumero);

        if (itemIndex !== -1) {
          data[itemIndex].felling = data[itemIndex].felling || [];

          // Actualizar el tiempo de tala a 7.25 horas más tarde
          const fechaIndex = data[itemIndex].felling.indexOf(fellingDate);
          if (fechaIndex !== -1) {
            const fechaActual = new Date(parseInt(fellingDate));
            const tiempoEnMilisegundos = fechaActual.getTime();
            const tiempoModificado = tiempoEnMilisegundos + (7.25 * 60 * 60 * 1000);
            data[itemIndex].felling[fechaIndex] = `${tiempoModificado}`;
            this.guardarDatosEnLocalStorage(data);
            observer.next(data);
            observer.complete();
          } else {
            observer.error('Fecha de tala no encontrada');
          }
        } else {
          observer.error('Elemento no encontrado');
        }
      });
    });
  }
}
