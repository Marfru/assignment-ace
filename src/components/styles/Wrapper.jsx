import styled from 'styled-components';
import media from './media';


export default styled.div`
    max-width: auto;
    margin-left: 5%;
    margin-right: 5%;
    ${media.phone`
        margin-left: 0;
        margin-right: 0;
    `}
`;