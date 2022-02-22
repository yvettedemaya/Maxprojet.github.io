import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const google: any;


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit, AfterViewInit {
  // title = 'My first AGM project';
  // lat = 51.678418;
  // lng = 7.809007;


  @ViewChild('mapElement', { read: ElementRef }) mapElement: any;
  public map: any;


  constructor() { }

  public ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  public initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: 5.445939, lng: 10.047155 },
      zoom: 8
    });
  }
}
