import imageRegionale from "../assets/card-img-train/regionale.jpg"
import imageFrecciarossa from "../assets/card-img-train/frecciarossa.jpg"
import imageFrecciabianca from "../assets/card-img-train/frecciabianca.jpeg"


export interface Item {
  id: number;
  departure: string;
  destination: string;
  time: string;
  routeTime?: string;
  price?: number;
  tipology?: string;
  img: string;
}

export const trainData: Item[] = [
  { id: 1, departure: "Acireale", destination: "Catania", time: "5/12/2024, 09:00", routeTime: "10m", price: 3.30, tipology: "Regionale Veloce", img: `${imageRegionale}` },
  { id: 2, departure: "Acireale", destination: "Catania", time: "5/12/2024, 11:30", routeTime: "10m", price: 3.30, tipology: "Regionale Veloce", img: `${imageRegionale}` },
  { id: 3, departure: "Acireale", destination: "Catania", time: "5/12/2024, 12:10", routeTime: "10m", price: 3.30, tipology: "Regionale", img: `${imageRegionale}` },
  { id: 4, departure: "Acireale", destination: "Catania", time: "5/12/2024, 14:15", routeTime: "10m", price: 3.30, tipology: "Regionale Veloce", img: `${imageRegionale}` },
  { id: 5, departure: "Catania", destination: "Acireale", time: "5/12/2024, 09:00", routeTime: "10m", price: 3.30, tipology: "Regionale", img: `${imageRegionale}` },
  { id: 6, departure: "Catania", destination: "Acireale", time: "5/12/2024, 11:30", routeTime: "10m", price: 3.30, tipology: "Regionale", img: `${imageRegionale}` },
  { id: 7, departure: "Catania", destination: "Acireale", time: "5/12/2024, 12:10", routeTime: "10m", price: 3.30, tipology: "Regionale Veloce", img: `${imageRegionale}` },
  { id: 8, departure: "Catania", destination: "Acireale", time: "5/12/2024, 14:15", routeTime: "10m", price: 3.30, tipology: "Regionale Veloce", img: `${imageRegionale}` },
  { id: 9, departure: "Milano", destination: "Napoli", time: "5/12/2024, 14:00", routeTime: "10m", price: 43.60, tipology: "Frecciarossa", img:  `${imageFrecciarossa}` },
  { id: 10, departure: "Roma", destination: "Napoli", time: "5/12/2024, 16:30", routeTime: "10m", price: 20.90, tipology: "Frecciabianca", img:  `${imageFrecciabianca}` },
];