import React from 'react';
import { personalInfo } from '../../models/personalData.class';
import Information from '../pure/form/Information';


const PersonalInformation = () => {
    
    const defaultInformation = new personalInfo('jesus', 'vergara', 'jesusmanuelv1989@gmail.com', true)

    return (
        <div>

        <Information propInfo={defaultInformation}/>
            
        </div>
    );
};


export default PersonalInformation;
