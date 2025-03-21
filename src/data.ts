import { Playlist } from './Model/Playlist/playlist';
import { Song } from './Model/Song/songs';

export const songs: Song[] = [
  {
    id: '1',
    name: 'The Weekend Whip',
    artists: [{ id: '1', name: 'The Fold' }],
    audioSrc: '/Audio/The Fold - The Weekend Whip (Official Audio).mp3',
    image: '',
    album: 'LEGO NINJAGO: For the Spinners',
    duration: '3:30',
  },
  {
    id: 'd1',
    name: 'The Duck Song',
    artists: [{ id: '2', name: 'forrestfire101' }],
    audioSrc: '/Audio/The Duck Song.mp3',
    image: '/Images/theDuckSongSongCover.png',
    album: 'The Duck Songs',
    duration: '3:11',
  },
  {
    id: 'd2',
    name: 'The Duck Song 2',
    artists: [{ id: '2', name: 'forrestfire101' }],
    audioSrc: '/Audio/The Duck Song 2.mp3',
    image: '/Images/theDuckSongSongCover.png',
    album: 'The Duck Songs',
    duration: '2:35',
  },
  {
    id: 'd3',
    name: 'The Duck Song 3',
    artists: [{ id: '2', name: 'forrestfire101' }],
    audioSrc: '/Audio/The Duck Song 3.mp3',
    image: '/Images/theDuckSongSongCover.png',
    album: 'The Duck Songs',
    duration: '3:35',
  },
  {
    id: 'd4',
    name: 'The Duck Song 4',
    artists: [{ id: '2', name: 'forrestfire101' }],
    audioSrc: '/Audio/The Duck Song 4.mp3',
    image: '/Images/theDuckSongSongCover.png',
    album: 'The Duck Songs',
    duration: '2:33',
  },
  {
    id: 'd5',
    name: 'The Duck Song 5',
    artists: [{ id: '2', name: 'forrestfire101' }],
    audioSrc: '/Audio/The Duck Song 5.mp3',
    image: '/Images/theDuckSongSongCover.png',
    album: 'The Duck Songs',
    duration: '3:01',
  },
];

export const playlists: Playlist[] = [
  {
    id: '1',
    name: 'Liked Songs',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'Poloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    isPinned: true,
    isPrivate: false,
  },
  {
    id: '2',
    name: 'The Duck Songs',
    image: '/Images/theDuckSongPlaylistCover.png',
    songs: [
      { songId: 'd1', dateAdded: new Date() },
      { songId: 'd2', dateAdded: new Date() },
      { songId: 'd3', dateAdded: new Date() },
      { songId: 'd4', dateAdded: new Date() },
      { songId: 'd5', dateAdded: new Date() },
    ],
    duration: 10,
    createdBy: 'forrestfire101',
    isPinned: true,
    isPrivate: false,
  },
  {
    id: '3',
    name: 'Pinned 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'Me',
    isPinned: true,
    isPrivate: true,
  },
  {
    id: '4',
    name: 'Big Playlist',
    image: '',
    songs: [
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
      { songId: '1', dateAdded: new Date() },
    ],
    duration: 10,
    createdBy: 'Me, me, me, me, me, me, me, me, you',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '5',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '6',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '7',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '8',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '9',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '10',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '11',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '12',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '13',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
  {
    id: '14',
    name: 'PLaylist 2',
    image: '',
    songs: [{ songId: '1', dateAdded: new Date() }],
    duration: 10,
    createdBy: 'someone',
    isPinned: false,
    isPrivate: false,
  },
];
