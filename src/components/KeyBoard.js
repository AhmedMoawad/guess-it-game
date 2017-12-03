import React, { Component } from 'react';

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const KeyBoard = ({availableKeys, onKeyClick}) => (
    <div className="App--key-board">
        {
            alpha.map((ch, i) => {
                const props = {}
                if (!availableKeys.includes(ch)) {
                    props.disabled = true
                }
                return (
                    <button
                        key={`keyboard-${ch}-${i}`}
                        {...props}
                        className="App--key-board-item"
                        onClick={() => {onKeyClick(ch)}}
                    >
                        {ch}
                    </button>
                )
            })
        }
    </div>
);
export default KeyBoard;