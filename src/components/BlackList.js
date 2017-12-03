import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BlackList = ({letters}) => {
    const lettersArr = letters.split('');
    const blackList = [
        ...lettersArr,
        ...new Array(9 - lettersArr.length)
    ]
    return (
        <div className="App--black-list">
            {
                blackList.map((value, i) => (
                    <div
                        key={`blacklist-${value}-${i}`}
                        className={`App--black-list-item ${value ? 'full' : ''}`}>
                        &nbsp;{value}&nbsp;
                    </div>
                ))
            }
        </div>
    )
};

BlackList.PropTypes = {
    letters: PropTypes.string
};

export default BlackList