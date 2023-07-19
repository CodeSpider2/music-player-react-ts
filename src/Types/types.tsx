export interface AuthDatatypes {
  name: string;
  email: string;
  password: string;
}
export interface SchemaTypes extends AuthDatatypes {
  confirmPassword: string;
}

export interface LoginTypes {
  email: string | undefined;
  password: string | undefined;
}
export interface WidgetProps {}

export interface AudioFile {
  name: string;
  path: string;
  cover: string;
}

export interface AudioContextType {
  audioFiles: AudioFile[];
  isPlaying: boolean;
  currentPlaying: AudioFile | null;
  playAudio: (audio: AudioFile) => void;
}
export interface MusicProviderprops {
  children: React.ReactNode;
}
export interface RootObject {
  data: Data;
  extensions: any[];
}

export interface Data {
  artist: Artist;
}

export interface Artist {
  discography: Discography;
}

export interface Discography {
  singles: Singles;
}

export interface Singles {
  items: SinglesItem[];
  totalCount: number;
}

export interface SinglesItem {
  releases: Releases;
}

export interface Releases {
  items: ReleasesItem[];
}

export interface ReleasesItem {
  coverArt: CoverArt;
  date: DateClass;
  id: string;
  name: string;
  playability: Playability;
  sharingInfo: SharingInfo;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface CoverArt {
  sources: Source[];
}

export interface Source {
  height: number;
  url: string;
  width: number;
}

export interface DateClass {
  isoString: Date;
  year: number;
}

export interface Playability {
  playable: boolean;
  reason: string;
}

export interface SharingInfo {
  shareId: string;
  shareUrl: string;
}

export interface Tracks {
  totalCount: number;
}
