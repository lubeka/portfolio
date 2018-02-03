import React from 'react';
//import PropTypes from 'prop-types';

const linksR = ['link3', 'link4'];
const linkListR = linksR.map((linksR) =>
    <li className="nav-item">
        <a className="nav-link active" href="#">{linksR}</a>
    </li>
);

export default linkListR;
