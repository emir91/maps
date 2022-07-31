/// <reference types="@types/google.maps" />
import { Mappable } from "../types/Mappable";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(el: HTMLElement) {
    this.googleMap = new google.maps.Map(el, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
      });
    });
  }
}
