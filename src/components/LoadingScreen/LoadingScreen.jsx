import React, { Component } from 'react';
import LoadingWrapper from './styled/style';
import { ImgBackground } from './ImgBackground';
import Typed from 'react-typed';

export class LoadingScreen extends Component {
    render() {
        return (
        <LoadingWrapper>
            <ImgBackground/>
            <Typed
                strings={[
                    'We are loading your new <br/><strong>experience...</strong>',
                    'We are loading your new <br/><strong>journey...</strong>',
                    'We are loading your new <br/><strong>future...</strong>'
                ]}
                typeSpeed={50}
                backSpeed={20}
                loopCount={Infinity}
                showCursor={false}
            />
        </LoadingWrapper>
        );
    }
}

export default LoadingScreen;