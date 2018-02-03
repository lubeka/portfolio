import React from 'react';
//import PropTypes from 'prop-types';

const linksL = ['Link1', 'link2'];
const linkListL = linksL.map((linksL) =>
    <li className="nav-item">
        <a className="nav-link active" href="#">{linksL}</a>
    </li>
);

export default linkListL;
