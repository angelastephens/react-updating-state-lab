// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Initial state is defined
    this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        } 
    }

  // when handleClick is called, setState will update
  settingBitrate = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
    })
  }

  settingResolution = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
            ...this.state.settings.video,
            resolution: '720p'
            }
        }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.settingResolution} className= " resolution"> Change Resolution</button>
        <button onClick={this.settingBitrate} className= " bitrate"> Change Bitrate</button>
      </div>
    );
  }
}

export default YouTubeDebugger;