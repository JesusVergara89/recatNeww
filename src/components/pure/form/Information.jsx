import React from 'react';
import PropTypes from 'prop-types';
import { personalInfo } from '../../../models/personalData.class';


const Information = ({ propInfo }) => {
    return (
        <div>

            <h2>Name: {propInfo.name}</h2>
            <h3>Last name: {propInfo.lastName}</h3>
            <h4>Email: {propInfo.email}</h4>
            <h5 className={propInfo.conected ? 'ok green1':'ok '}>Connected: {propInfo.conected ? 'yes' : 'Nop'}</h5>

        </div>
    );
};


Information.propTypes = {
    propInfo: PropTypes.instanceOf(personalInfo)
};


export default Information;
