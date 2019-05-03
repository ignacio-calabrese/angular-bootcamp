import { Track } from './track';

export class Disc {
    disc_number: number;
    tracks: Track[];

    constructor(disc_number: number, tracks: Track[]){
        this.disc_number = disc_number;
        this.tracks = tracks;
    }
}
