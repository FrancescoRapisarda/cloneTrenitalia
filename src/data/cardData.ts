import image from "../assets/card-img/card-9.webp"


export interface Item {
  id: number;
  title: string;
  image: string;
}

export const cardData: Item[] = [
  { id: 1, title: "PARTI ALLA SCOPERTA DI NUOVE METE", image: `${image}` },
  { id: 2, title: "VIAGGIA COMODAMENTE IN PRIMA CLASSE", image: `${image}` },
  { id: 3, title: "SCOPRI LE OFFERTE WEEKEND", image: `${image}` },
  { id: 4, title: "PROMOZIONI PER FAMIGLIE", image: `${image}` },
  { id: 5, title: "ESPLORA IL SUD ITALIA IN TRENO", image: `${image}` },
  { id: 6, title: "VIAGGI BUSINESS SU MISURA", image: `${image}` },
  { id: 7, title: "SCONTO STUDENTI E UNIVERSITARI", image: `${image}` },
  { id: 8, title: "TRENI VELOCI PER LE VACANZE", image: `${image}` },
  { id: 9, title: "SCOPRI LE CITTÀ D'ARTE", image: `${image}` },
];