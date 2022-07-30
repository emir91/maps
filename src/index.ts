import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

const mapRef = document.getElementById("map");
const mapEl: HTMLElement = mapRef as HTMLElement;

const map = new CustomMap(mapEl);
map.addMarker(user);
map.addMarker(company);
