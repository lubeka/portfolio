import React from 'react';
import {SectionsContainer, Section} from 'react-fullpage';

class Sections extends React.Component {
    render() {
        let options = {
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
        };

        return (
            <SectionsContainer {...options}>
                <Section>Page 1</Section>
                <Section>Page 2</Section>
                <Section>Page 3</Section>
            </SectionsContainer>
        );
    }
}

export default Sections;