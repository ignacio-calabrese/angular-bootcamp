import { URLs } from './urls';

export class LinkedTrack {
  external_urls: URLs; // an external  URLs for this track.
  href: string; // A link to the Web API endpoint providing full details of the track.
  id: string;	// The Spotify ID for the track.
  type: string;
  uri: string; // The Spotify URI for the track.
}
