import { Track } from './track';
import { Artist } from './artist';
import { URLs } from './urls';
import { Images } from './images';
import { Restrictions } from './restrictions';

export class Album {
  album_type: string;
  artists: Artist; // simplified artist objects
  available_markets: string[];
  // copyrights:	copyright; // copyright objects,
  // external_ids:IDs; // an external ID object	Known external IDs for the album.
  external_urls: URLs; // an external URL object for this album.
  genres:	string[];
  href: string;
  id:	string; // The Spotify ID for the album.
  images: Images[]; // array of image objects
  // label: string;
  name: string;
  popularity:	number;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  tracks: Track[]; // array of simplified track objects
  type: string;
  uri: string; // The Spotify URI for the album.
}
