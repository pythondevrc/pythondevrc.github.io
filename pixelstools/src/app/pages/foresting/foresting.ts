import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataLandService } from '../../providers/land-data';

@Component({
  selector: 'page-foresting',
  templateUrl: 'foresting.html',
  styleUrls: ['./foresting.scss']
})
export class ForestingPage implements OnInit {
  lands: any;
  mapNumber: number = 1;
  selectedMaps: string = '1';
  mapUrl: SafeResourceUrl;
  gameUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,
    private datalandService: DataLandService) {  }

  ngOnInit() {
    this.datalandService.obtenerDatos().subscribe(data => {
      this.lands = data;
      this.loadMap(); // Cargar el mapa después de obtener los datos
    });
    this.loadGame(); // Cargar el juego en el inicio
  }

  loadMap() {
    const url = `https://play.pixels.xyz/pixels/share/${this.mapNumber}`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadGame() {
    const gamedir = 'https://play.pixels.xyz';
    this.gameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(gamedir);
  }

  nextMap() {
    do {
      this.mapNumber++;
    } while (this.mapNumber <= 5000 && !this.isMapValid(this.mapNumber));

    if (this.mapNumber <= 5000) {
      this.loadMap();
    } else if (this.mapNumber <= 0) {
      this.mapNumber = 5000;
      this.loadMap();
    } else {
      this.mapNumber = 1;
      this.loadMap();
    }
  }

  previousMap() {
    do {
      this.mapNumber--;
    } while (this.mapNumber >= 1 && !this.isMapValid(this.mapNumber));

    if (this.mapNumber >= 1) {
      this.loadMap();
    } else if (this.mapNumber >= 5000) {
      this.mapNumber = 1;
      this.loadMap();
    } else {
      this.mapNumber = 5000;
      this.loadMap();
    }
  }

  isMapValid(mapNumber: number): boolean {
    const mapInfo = this.lands.find(land => land.numero === mapNumber);
    return mapInfo && mapInfo.foresting === true;
  }
}
