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
