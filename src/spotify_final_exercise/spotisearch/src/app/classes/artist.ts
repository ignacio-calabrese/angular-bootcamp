import { Album } from './album';
export class Artist {
    private id: string;
    private name: string;
    private gender: string;
    private logoURL: string;
    private albums: Array<Album>;

    constructor(id: string, name: string, gender: string, logoURL: string, albums: Array<Album>) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.logoURL = logoURL;
      this.albums = albums;
    }
  }
