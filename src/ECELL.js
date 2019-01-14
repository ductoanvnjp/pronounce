import React, { Component } from 'react';
import {Cell} from 'fixed-data-table-2';

export default class ECELL extends Component {
  constructor(props){
    super(props);
  }
  slow(e){
        let mVoice1 = new SpeechSynthesisUtterance();
        mVoice1.voice=speechSynthesis.getVoices().filter(function(voice){
            return voice.name === "Google UK English Male"
        })[0];
        mVoice1.rate = 0.3
        mVoice1.text=this.props.CellData;
        speechSynthesis.speak(mVoice1)
  }
  fast(e){
      let fVoice2 = new SpeechSynthesisUtterance();
      fVoice2.voice=speechSynthesis.getVoices().filter(function(voice){
          return voice.name === "Google UK English Female"
      })[0];
      fVoice2.rate = 0.6
      fVoice2.text=this.props.CellData;
      speechSynthesis.speak(fVoice2)
  }
  render() {
      return (
       <Cell>
          {this.props.CellData} <br/>
          <button onClick={(e) => this.slow(e)}> SLOW </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={(e) => this.fast(e)}> FAST </button>
      </Cell>
    );
  }
}