import { Song } from './song';
export class Album {
  private id: string;
    private name: string;
    private year:Date;
    private imageURL: string;
    private songs: Array<Song>;

   constructor(id: string, name: string, year: Date, imageURL: string,  songs: Array<Song>) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.imageURL = imageURL;
    this.songs = songs;
  }
}
