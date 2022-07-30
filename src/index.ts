/// <reference types="@types/google.maps" />
// import { User } from "./User";
// import { Company } from "./Company";

// const user = new User();

// console.log(user);

// const company = new Company();

// console.log(company);

const mapRef = document.getElementById("map");
const mapEl: HTMLElement = mapRef as HTMLElement;

new google.maps.Map(mapEl, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
