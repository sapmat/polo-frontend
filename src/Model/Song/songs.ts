export enum MainSongCredits {
  MAIN_ARTIST = 'Main Artist',
  COMPOSER = 'Composer',
  PRODUCER = 'Producer',
}

export interface CreditsUser {
  id: string;
  name: string;
  role: MainSongCredits;
}

export interface Song {
  id: string;
  name: string;
  audioSrc: string;
  artists: { id: string; name: string }[];
  image: string;
  album: string;
  duration: string;
  credits: CreditsUser[];
}
