import React, { Component, RefObject } from "react";

interface Track {
  src: string;
  name: string;
}

interface AudioPlayerState {
  playing: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  currentTrack: number;
  tracks: Track[];
}

class AudioPlayer extends Component<{}, AudioPlayerState> {
  private audioRef: RefObject<HTMLAudioElement> = React.createRef();

  state: AudioPlayerState = {
    playing: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    currentTrack: 0,
    tracks: [],
  };

  componentDidMount() {
    // this.setState({ tracks: this.props.tracks });
  }

  handlePlay = (): void => {
    if (this.audioRef.current) {
      this.audioRef.current.play();
      this.setState({ playing: true });
    }
  };

  handlePause = (): void => {
    if (this.audioRef.current) {
      this.audioRef.current.pause();
      this.setState({ playing: false });
    }
  };

  handleTimeUpdate = (): void => {
    if (this.audioRef.current) {
      this.setState({
        currentTime: this.audioRef.current.currentTime,
        duration: this.audioRef.current.duration,
      });
    }
  };

  handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const volume = parseFloat(e.target.value);
    this.setState({ volume });
    if (this.audioRef.current) {
      this.audioRef.current.volume = volume;
    }
  };

  handleSeek = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const currentTime = parseFloat(e.target.value);
    if (this.audioRef.current) {
      this.audioRef.current.currentTime = currentTime;
    }
  };

  handleNextTrack = (): void => {
    const { currentTrack, tracks } = this.state;
    if (currentTrack < tracks.length - 1) {
      this.setState((prevState) => ({
        currentTrack: prevState.currentTrack + 1,
      }));
    }
  };

  handlePrevTrack = (): void => {
    const { currentTrack } = this.state;
    if (currentTrack > 0) {
      this.setState((prevState) => ({
        currentTrack: prevState.currentTrack - 1,
      }));
    }
  };

  render() {
    const { playing, currentTime, duration, volume, currentTrack, tracks } =
      this.state;

    return (
      <div>
        <audio
          ref={this.audioRef}
          src={tracks[currentTrack].src}
          onTimeUpdate={this.handleTimeUpdate}
          onEnded={this.handleNextTrack}
        />
        <div>
          <button onClick={this.handlePrevTrack}>Prev</button>
          <button onClick={playing ? this.handlePause : this.handlePlay}>
            {playing ? "Pause" : "Play"}
          </button>
          <button onClick={this.handleNextTrack}>Next</button>
          <p>{tracks[currentTrack].name}</p>
        </div>
        <div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={this.handleVolumeChange}
          />
          <input
            type="range"
            min={0}
            max={duration}
            step={0.01}
            value={currentTime}
            onChange={this.handleSeek}
          />
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
