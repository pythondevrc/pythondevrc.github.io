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
  mapNumber1: number = 1340;
  mapNumber2: number = 3443;
  mapNumber3: number = 3908;
  mapNumber4: number = 4434;
  selectedMaps: string = '1';
  changeMaps: string = '1';
  intervalMaps: any;
  mapUrl1: SafeResourceUrl;
  mapUrl2: SafeResourceUrl;
  mapUrl3: SafeResourceUrl;
  mapUrl4: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,
    private datalandService: DataLandService) {}

  ngOnInit() {
    this.datalandService.obtenerDatos().subscribe(data => {
      this.lands = data;
    });
  }

  loadMap1() {
    const url1 = `https://play.pixels.xyz/pixels/share/${this.mapNumber1}`;
    this.mapUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
  }

  loadMap2() {
    const url2 = `https://play.pixels.xyz/pixels/share/${this.mapNumber2}`;
    this.mapUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(url2);
  }

  loadMap3() {
    const url3 = `https://play.pixels.xyz/pixels/share/${this.mapNumber3}`;
    this.mapUrl3 = this.sanitizer.bypassSecurityTrustResourceUrl(url3);
  }

  loadMap4() {
    const url4 = `https://play.pixels.xyz/pixels/share/${this.mapNumber4}`;
    this.mapUrl4 = this.sanitizer.bypassSecurityTrustResourceUrl(url4);
  }

  nextMap1() {
    do {
      this.mapNumber1++;
    } while (this.mapNumber1 <= 5000 && !this.isMapValid(this.mapNumber1));

    if (this.mapNumber1 <= 5000) {
      this.loadMap1();
    } else {
      this.mapNumber1 = 1;
      this.loadMap1();
    }
  }

  nextMap2() {
    do {
      this.mapNumber2++;
    } while (this.mapNumber2 <= 5000 && !this.isMapValid(this.mapNumber2));

    if (this.mapNumber2 <= 5000) {
      this.loadMap2();
    } else {
      this.mapNumber2 = 1;
      this.loadMap2();
    }
  }

  nextMap3() {
    do {
      this.mapNumber3++;
    } while (this.mapNumber3 <= 5000 && !this.isMapValid(this.mapNumber3));

    if (this.mapNumber3 <= 5000) {
      this.loadMap3();
    } else {
      this.mapNumber3 = 1;
      this.loadMap3();
    }
  }

  nextMap4() {
    do {
      this.mapNumber4++;
    } while (this.mapNumber4 <= 5000 && !this.isMapValid(this.mapNumber4));

    if (this.mapNumber4 <= 5000) {
      this.loadMap4();
    } else {
      this.mapNumber4 = 1;
      this.loadMap4();
    }
  }

  previousMap1() {
    do {
      this.mapNumber1--;
    } while (this.mapNumber1 >= 1 && !this.isMapValid(this.mapNumber1));

    if (this.mapNumber1 >= 1) {
      this.loadMap1();
    } else {
      this.mapNumber1 = 5000;
      this.loadMap1();
    }
  }

  previousMap2() {
    do {
      this.mapNumber2--;
    } while (this.mapNumber2 >= 1 && !this.isMapValid(this.mapNumber2));

    if (this.mapNumber2 >= 1) {
      this.loadMap2();
    } else {
      this.mapNumber2 = 5000;
      this.loadMap2();
    }
  }

  previousMap3() {
    do {
      this.mapNumber3--;
    } while (this.mapNumber3 >= 1 && !this.isMapValid(this.mapNumber3));

    if (this.mapNumber3 >= 1) {
      this.loadMap3();
    } else {
      this.mapNumber3 = 5000;
      this.loadMap3();
    }
  }

  previousMap4() {
    do {
      this.mapNumber4--;
    } while (this.mapNumber4 >= 1 && !this.isMapValid(this.mapNumber4));

    if (this.mapNumber4 >= 1) {
      this.loadMap4();
    } else {
      this.mapNumber4 = 5000;
      this.loadMap4();
    }
  }

  isMapValid(mapNumber: number): boolean {
    const mapInfo = this.lands.find(land => land.numero === mapNumber);
    return mapInfo && mapInfo.foresting === true;
  }

  loadAllMap(){
    this.loadMap1();
    if (this.selectedMaps === '2') {
      this.loadMap2();
    }
    if (this.selectedMaps === '4') {
      this.loadMap2();
      this.loadMap3();
      this.loadMap4();
    }
  }

  changeAllMap(){
    clearInterval(this.intervalMaps);
    let timeinterval = 0;
    if (this.changeMaps === '1') {
      return
    } else if (this.changeMaps === '2') {
      timeinterval = 5000;
    } else if (this.changeMaps === '3') {
      timeinterval = 10000;
    } else if (this.changeMaps === '4') {
      timeinterval = 15000;
    } else if (this.changeMaps === '5') {
      timeinterval = 20000;
    }
    this.intervalMaps = setInterval(() => {
      this.nextMap1();
      if (this.selectedMaps === '2') {
        this.nextMap2();
      }
      if (this.selectedMaps === '4') {
        this.nextMap2();
        this.nextMap3();
        this.nextMap4();
      }
    }, timeinterval);
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

  async ngAfterViewInit(){
    this.loadAllMap();
  }
}
