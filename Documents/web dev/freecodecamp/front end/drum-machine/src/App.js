import logo from './logo.svg';
import './App.css';
import React from 'react';

// all the key notes
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];



class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      inputKey : ''
    }
    this.KeyPressed = this.KeyPressed.bind(this)
  }
  KeyPressed(value) {
    this.setState({inputKey : value});//change the state
  }
  render()
  {

    return (
      <div className="App" id="drum-machine">
        <DrumPads keyPressed={this.KeyPressed}/>
        <Display toDisplay={this.state.inputKey}/>
      </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props)
  }
  // print the name passed from props
  render() {
    return (
      <div id="display">
       {this.props.toDisplay}
      </div>
    );
  }
}

class DrumPads extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  handleKeyPress(event)
  {
    // get value of key pressed
    let pressedKey = String.fromCharCode(event.which)
    let element = {};
    for (let i=0; i<bankOne.length; i++)
    {
      if(bankOne[i].keyTrigger == pressedKey)
      {
        element = bankOne[i]
      }
    }
    let sound = document.getElementById(element.keyTrigger);
    sound.play();
    // pass key name to display 
    this.props.keyPressed(element.id);
  }
  handleClick(event) {
    // play sound
    let sound = document.getElementById(bankOne[event.target.value].keyTrigger);
    sound.play();
    // pass key name to display 
    this.props.keyPressed(bankOne[event.target.value].id);
  }
  // display the buttons
  render() {
    return (
      <div id="keyPads">
        <button className='drum-pad' value={0} onClick={this.handleClick} id={bankOne[0].id}><audio id={bankOne[0].keyTrigger} src={bankOne[0].url} className='clip'></audio>Q</button>
        <button className='drum-pad' value={1} onClick={this.handleClick} id={bankOne[1].id}><audio id={bankOne[1].keyTrigger} src={bankOne[1].url} className='clip'></audio>W</button>
        <button className='drum-pad' value={2} onClick={this.handleClick} id={bankOne[2].id}><audio id={bankOne[2].keyTrigger} src={bankOne[2].url} className='clip'></audio>E</button>
        <button className='drum-pad' value={3} onClick={this.handleClick} id={bankOne[3].id}><audio id={bankOne[3].keyTrigger} src={bankOne[3].url} className='clip'></audio>A</button>
        <button className='drum-pad' value={4} onClick={this.handleClick} id={bankOne[4].id}><audio id={bankOne[4].keyTrigger} src={bankOne[4].url} className='clip'></audio>S</button>
        <button className='drum-pad' value={5} onClick={this.handleClick} id={bankOne[5].id}><audio id={bankOne[5].keyTrigger} src={bankOne[5].url} className='clip'></audio>D</button>
        <button className='drum-pad' value={6} onClick={this.handleClick} id={bankOne[6].id}><audio id={bankOne[6].keyTrigger} src={bankOne[6].url} className='clip'></audio>Z</button>
        <button className='drum-pad' value={7} onClick={this.handleClick} id={bankOne[7].id}><audio id={bankOne[7].keyTrigger} src={bankOne[7].url} className='clip'></audio>X</button>
        <button className='drum-pad' value={8} onClick={this.handleClick} id={bankOne[8].id}><audio id={bankOne[8].keyTrigger} src={bankOne[8].url} className='clip'></audio>C</button>

      </div>
    );
  }
}
 
export default App;
