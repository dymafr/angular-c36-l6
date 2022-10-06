import { Component, AfterViewInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputAddressComponent),
    },
  ],
})
export class InputAddressComponent
  implements AfterViewInit, ControlValueAccessor
{
  private accessToken =
    'pk.eyJ1IjoiZHltYWZyIiwiYSI6ImNsODNjMmp4MTAwY2UzcHA4ZWhmaG5sNDAifQ.ozVmzxmotxaZbXfnvHKYDw';
  private map!: mapboxgl.Map;
  private marker!: mapboxgl.Marker;
  private autocomplete!: MapboxGeocoder;
  public innerValue!: {
    address: string;
    lat: number;
    lng: number;
  };
  private onChange: any;
  private onTouched: any;

  constructor() {}

  writeValue(value: any) {
    this.innerValue = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {}

  ngAfterViewInit() {
    this.autocomplete = new MapboxGeocoder({
      accessToken: this.accessToken,
      mapboxgl: mapboxgl,
      placeholder: this.innerValue.address,
    });

    this.autocomplete.on('result', (e: any) => {
      if (e.result) {
        if (this.marker) {
          this.marker.remove();
        }
        this.innerValue.lat = e.result.center[1];
        this.innerValue.lng = e.result.center[0];
        this.innerValue.address = e.result.place_name;
        this.onChange(this.innerValue);
      }
    });

    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [this.innerValue.lng, this.innerValue.lat],
    });

    if (this.innerValue.lng) {
      this.marker = new mapboxgl.Marker()
        .setLngLat([this.innerValue.lng, this.innerValue.lat])
        .addTo(this.map);
    }

    this.map.addControl(this.autocomplete);
  }
}
