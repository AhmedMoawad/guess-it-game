import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import BlackList from "./components/BlackList";
import KeyBoard from "./components/KeyBoard";
import Sentence from "./components/Sentence";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sentenceLetters: [{value: '', isVisible: false}],
            blackList: '',
            availableKeys: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            isLoser: false,
            isWinner: false
        }

        this.handleKeyClick = this.handleKeyClick.bind(this)
    }

    componentWillMount () {
        this.setState(() => ({
            sentenceLetters: App.prepareSentenceLetters(this.props.sentence)
        }))
    }

    handleKeyClick (key) {
        this.setState((prevState) => {
            let isKeyExist = false;

            // Determine Sentence Letters State
            const sentenceLetters = prevState.sentenceLetters.map(letter => {
               if (letter.value === key.toLowerCase() ||
               letter.value === key.toUpperCase()) {
                   letter.isVisible = true;
                   isKeyExist = true;
               }
               return letter
            });

            // Update Black List
            const blackList = prevState.blackList + (isKeyExist ? '' : key);

            // Check if the User fill all the black List or not
            const isLoser = blackList.length >= 9;

            // Check If the user complete the guessing of the sentence
            const isWinner = sentenceLetters.filter(l => !l.isVisible).length === 0;

            return {
                availableKeys: prevState.availableKeys.replace(key, ''),
                blackList,
                sentenceLetters,
                isLoser,
                isWinner
            }

        })
    }

    render() {
        return (
          <div>
              {
                  (this.state.isWinner || this.state.isLoser)
                  ? <p> {this.state.isWinner ? 'Congratulations! You Win' : 'Game Over :('} </p>
                  : (
                      <div className="App">
                          <Sentence letters={this.state.sentenceLetters}/>
                          <BlackList letters={this.state.blackList}/>
                          <KeyBoard
                              availableKeys={this.state.availableKeys}
                              onKeyClick={this.handleKeyClick}
                          />
                      </div>
                  )

              }
          </div>
        );
    }

    static prepareSentenceLetters (sentence) {
        return sentence.split('').map(value => {
            return value === ' '
                ? { value: '/', isVisible: true }
                : { value, isVisible: false };
        })
    }
}

App.PropTypes = {
    sentence: PropTypes.string.isRequired
}


export default App;
