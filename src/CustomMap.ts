/// <reference types="@types/google.maps" />

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapId) {
    this.googleMap = new google.maps.Map(mapId, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
