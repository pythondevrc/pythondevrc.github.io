import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataLandService } from '../../providers/land-data';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements OnInit, AfterViewInit {
  lands: any;
  mapNumbers: number[] = [1340, 3443, 3908, 4434];
  selectedMaps: number = 1;
  changeMaps: number = 1;
  intervalMaps: any;
  mapUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer,
    private datalandService: DataLandService) {}

  ngOnInit() {
    this.datalandService.obtenerDatos().subscribe(data => {
      this.lands = data;
    });
  }

  loadMaps() {
    for (let i = 0; i < this.selectedMaps; i++) {
      const url = `https://play.pixels.xyz/pixels/share/${this.mapNumbers[i]}`;
      this.mapUrls[i] = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

  changeAllMaps() {
    clearInterval(this.intervalMaps);
    let timeInterval = 0;
    switch (this.changeMaps) {
      case 2:
        timeInterval = 5000;
        break;
      case 3:
        timeInterval = 10000;
        break;
      case 4:
        timeInterval = 15000;
        break;
      case 5:
        timeInterval = 20000;
        break;
    }
    this.intervalMaps = setInterval(() => {
      for (let i = 0; i < this.selectedMaps; i++) {
        this.nextMap(i);
      }
    }, timeInterval);
  }

  nextMap(index: number) {
    do {
      this.mapNumbers[index]++;
    } while (this.mapNumbers[index] <= 5000 && !this.isMapValid(this.mapNumbers[index]));

    if (this.mapNumbers[index] <= 5000) {
      this.loadMap(index);
    } else {
      this.mapNumbers[index] = 1;
      this.loadMap(index);
    }
  }

  loadMap(index: number) {
    const url = `https://play.pixels.xyz/pixels/share/${this.mapNumbers[index]}`;
    this.mapUrls[index] = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  previousMap(index: number) {
    do {
      this.mapNumbers[index]--;
    } while (this.mapNumbers[index] >= 1 && !this.isMapValid(this.mapNumbers[index]));

    if (this.mapNumbers[index] >= 1) {
      this.loadMap(index);
    } else {
      this.mapNumbers[index] = 5000;
      this.loadMap(index);
    }
  }

  isMapValid(mapNumber: number): boolean {
    const mapInfo = this.lands.find(land => land.numero === mapNumber);
    return mapInfo && mapInfo.foresting === true;
  }

  agregarTala(itemNumero: number) {
    const fechaActual = new Date();
    const tiempoEnMilisegundos = fechaActual.getTime();
    const tiempoModificado = tiempoEnMilisegundos + (7.25 * 60 * 60 * 1000);
    const formattedDate = `${tiempoModificado}`;

    this.datalandService.agregarInformacionTala(itemNumero, formattedDate).subscribe(
      (data) => {
        console.log('Información de tala agregada correctamente', data);
      },
      (error) => {
        console.error('Error al agregar información de tala', error);
      }
    );
  }

  ngAfterViewInit(){
    this.loadMaps();
  }
}
