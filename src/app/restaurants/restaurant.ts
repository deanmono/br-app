export interface Restaurant {
  name: string;
  backgroundImageURL: string;
  category: string;
  contact: Object;
  location: {
    address: string,
    crossStreet: string,
    lat: number,
    lng: number,
    postalCode: string,
    cc: string,
    city: string,
    state: string,
    country: string,
    formattedAddress: Array<any>
  };
}
