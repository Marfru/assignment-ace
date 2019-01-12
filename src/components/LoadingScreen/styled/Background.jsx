import styled from 'styled-components';
import media from '../../styles/media';
import img from '../images/glasses-vector.png';

export default styled.div`
    height: 600px;
    width: 100%;
    background: url(${img});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    ${media.phone`
        height: 300px;
        background-size: contain;
        margin: 69px auto 0 auto;
        width: 90%;
    `}

`