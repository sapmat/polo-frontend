export enum SongCreditsTypes {
  MAIN_ARTIST = 'Main Artist',
  COMPOSER = 'Composer',
  PRODUCER = 'Producer',
}

export interface CreditsUser {
  id: string;
  name: string;
  roles: SongCreditsTypes[];
}

export interface Song {
  id: string;
  name: string;
  audioSrc: string;
  artists: { id: string; name: string }[];
  image: string;
  // TODO CHANGE TO ALBUM ID
  album: string;
  duration: string;
  credits: CreditsUser[];
}
