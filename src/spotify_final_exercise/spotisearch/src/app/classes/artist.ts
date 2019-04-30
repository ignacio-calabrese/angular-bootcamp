import { URLs } from './urls';

export class Artist {
  external_urls: URLs; // Known external URLs for this artist.
  href: string; // A link to the Web API endpoint providing full details of the artist.
  id: string;	// The Spotify ID for the artist.
  name: string; // The name of the artist
  type: string; // The object type: "artist"
  uri: string; // The Spotify URI for the artist.
}

