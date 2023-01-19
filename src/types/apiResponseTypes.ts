export interface HomepageData {
  albums: Album[];
  playlists: Playlist[];
  charts: Chart[];
  trending: Trending;
}

export interface Album {
  id: string;
  name: string;
  year: string;
  type: AlbumType;
  playCount: string;
  language: Language;
  explicitContent: string;
  url: string;
  primaryArtists: PrimaryArtistElement[];
  featuredArtists: any[];
  artists: PrimaryArtistElement[];
  image: ImageElement[];
  songs: any[];
  songCount?: string;
}

export interface PrimaryArtistElement {
  id: string;
  name: string;
  url: string;
  image: ImageElement[] | boolean;
  type: ArtistType;
  role: Role;
}

export interface ImageElement {
  quality: Quality;
  link: string;
}

export enum Quality {
  The150X150 = "150x150",
  The500X500 = "500x500",
  The50X50 = "50x50",
}

export enum Role {
  Empty = "",
  Music = "music",
  Singer = "singer",
}

export enum ArtistType {
  Artist = "artist",
}

export enum Language {
  English = "english",
  Korean = "korean",
  Spanish = "spanish",
  Unknown = "unknown",
}

export enum AlbumType {
  Album = "album",
  Song = "song",
}

export interface Chart {
  id: string;
  title: string;
  subtitle: Firstname;
  type: ChartType;
  image: ImageElement[];
  url: string;
  firstname: Firstname;
  explicitContent: string;
  language: Language;
}

export enum Firstname {
  JioSaavn = "JioSaavn",
}

export enum ChartType {
  Playlist = "playlist",
}

export interface Playlist {
  id: string;
  userId: UserID;
  title: string;
  subtitle: string;
  type: ChartType;
  image: ImageElement[];
  url: string;
  songCount: string;
  firstname: Firstname;
  followerCount: string;
  lastUpdated: string;
  explicitContent: string;
}

export enum UserID {
  PhulkiUser = "phulki_user",
}

export interface Trending {
  songs: SongElement[];
  albums: SongElement[];
}

export interface SongElement {
  id: string;
  name: string;
  type: AlbumType;
  year: string;
  releaseDate: Date;
  playCount: string;
  language: Language;
  explicitContent: string;
  songCount?: string;
  url: string;
  primaryArtists: PrimaryArtistElement[];
  featuredArtists: any[];
  artists?: PurpleArtist[];
  image: ImageElement[];
  album?: AlbumAlbum;
  duration?: string;
  label?: string;
}

export interface AlbumAlbum {
  id: string;
  name: string;
  url: string;
}

export interface PurpleArtist {
  id: string;
  name: string;
  url: string;
  image: ImageElement[];
  type: ArtistType;
  role: string;
}

export interface SongDetails {
  id: string;
  name: string;
  type: string;
  album: Album;
  year: string;
  releaseDate: Date;
  duration: string;
  label: string;
  primaryArtists: string;
  primaryArtistsId: string;
  featuredArtists: string;
  featuredArtistsId: string;
  explicitContent: number;
  playCount: number;
  language: string;
  hasLyrics: string;
  url: string;
  copyright: string;
  image: DownloadURL[];
  downloadUrl: DownloadURL[];
}

export interface DownloadURL {
  quality: string;
  link: string;
}
