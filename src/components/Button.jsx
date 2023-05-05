import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import '../css1/style.scss';
import { Link } from 'react-scroll';


Button.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
};

function Button(props) {
    const {title} = props;
    return (
        <a href="http://client.1cloud.digital" target="_blank" className="tf-button btn-effect outline-none heading" >   
            <span className="boder-fade"></span>                                     
            <span className="effect">{title}</span>
        </a>
    );
}

export default Button;