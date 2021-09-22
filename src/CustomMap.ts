// interface to intercept all the possible argument types
// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  // hide from the other engineer
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 1
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    // define an event listener for the click on the marker
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there'
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
