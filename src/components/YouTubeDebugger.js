// Code YouTubeDebugger Component Here

import React from "react";

export default class YouTubeDebugger extends React.Component{


    state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }



     handlesBitrate = ()=>{

        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })

     }    
     
     handlesResolution=()=>{

        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                ...this.state.settings.video,
                resolution: '720p'
                }
            }
        })

     }
    
    render(){

        return (
        <div>
            <button onClick={this.handlesBitrate} className='bitrate'></button>
            <button onClick={this.handlesResolution} className='resolution'></button>
        </div>
        )
    }


}