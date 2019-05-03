import { Artist } from './artist';
import { URLs } from './urls';
import { LinkedTrack } from './linkedTrack';
import { Restrictions } from './restrictions';
import { Album } from './album';

export class Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number; // The track length in milliseconds.
  explicit: boolean;	// Whether or not the track has explicit lyrics
  external_urls: URLs; // an external URL for this track.
  href: string; // A link to the Web API endpoint providing full details of the track.
  id: string;	// The Spotify ID for the track.
  is_playable: boolean;
  linked_from: LinkedTrack;
  restrictions: Restrictions;
  name: string; // The name of the track.
  preview_url: string; // A URL to a 30 second preview (MP3 format) of the track.
  track_number: number; // The number of the track. If an album has several discs, the track number is the number on the specified disc.
  type: string;
  uri: string; // The Spotify URI for the track.
  is_local: boolean; // Whether or not the track is from a local file.
}
