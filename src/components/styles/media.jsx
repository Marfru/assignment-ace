import { css } from 'styled-components';

const sizes = {
    phone: 416,
    tablet: 768,
    tabletPro: 1024
};

function phone(...args) {
    return css`
        @media(max-width: ${sizes.phone}px) {
            ${css(...args)}
        }
    `;
}

function tablet(...args) {
    return css`
        @media(min-width: ${sizes.tablet}px) and (max-width: ${sizes.tabletPro}px) {
            ${css(...args)}
        }
    `;
}

const media = {
    phone,
    tablet
};

export default media;