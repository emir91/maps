import { CustomMap } from "./CustomMap";
// import { User } from "./User";
// import { Company } from "./Company";

// const user = new User();

// console.log(user);

// const company = new Company();

// console.log(company);

const mapRef = document.getElementById("map");
const mapEl: HTMLElement = mapRef as HTMLElement;

const map = new CustomMap(mapEl);
