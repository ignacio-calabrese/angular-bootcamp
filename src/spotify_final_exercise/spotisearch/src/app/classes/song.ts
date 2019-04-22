import { Time } from '@angular/common';

export class Song {
  private id: string;
    private name: string;
    private duration: Time;

    constructor(id: string, name: string, duration: Time) {
      this.id = id;
      this.name = name;
      this.duration = duration;
    }
}
