import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Letter = ({isVisible, value}) => (
    <span className="App--sentence--letter">
        {isVisible ? value : '_'}
    </span>
)

Letter.defaultProps = {
    isVisible: false
};

Letter.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
};

export default Letter;
