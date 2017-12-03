import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Letter from "./Letter";

const Sentence = ({letters}) => (
    <div className="App--sentence">
        {
            letters.map(({value, isVisible}, i) => (
                <Letter
                    key={`sentence-${value}-${i}`}
                    isVisible={isVisible}
                    value={value}
                />
            ))
        }
    </div>
);

Sentence.PropTypes = {
    letters: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        isVisible: PropTypes.bool
    }))
};

export default Sentence;