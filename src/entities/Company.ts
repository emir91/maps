import faker, { fake } from "faker";
import { Mappable } from "../types/Mappable";

export class Company implements Mappable {
  companyName: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPharse = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h3>Company Name: ${this.companyName}</h3>
        <h4>Catch Phrase: ${this.catchPharse}</h4>
      </div> 
    `;
  }
}
