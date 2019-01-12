import styled from 'styled-components';
import media from '../../styles/media';

export default styled.div`
    width: 100%;
    text-align: center;
    position: relative;

span {
    position: absolute;
    width: 100%;
    left: 0;
    font-weight: 400;
    font-size: 27px;
    ${media.phone`
        max-width: 416px;
        height: auto;
    `}
}

strong {
    border: 3px solid #000;
    padding: 0 15px;
    background-color: #fff;
    margin-top: 18px;
    display: inline-block;
    font-size: 35px;
    ${media.phone`
        margin-top: 18px;
        font-size: 27px;
        padding: 0 10px;
    `}
}
`