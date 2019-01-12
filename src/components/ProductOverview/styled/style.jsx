import styled from 'styled-components';
import media from '../../styles/media';

export default styled.ul`
list-style-type: none;
width: 100%;
margin-block-end: 0;
padding-inline-start: 0;
margin: 9rem 0;
${media.phone`
  margin: 5.4rem 0; 
`}
${media.tablet`
  margin: 6rem 0;
`}

li {
  width: 25%;
  display: inline-block;
  text-align: center;
  position: relative;
  margin-top: 5%;
  ${media.phone`
    width: 100%; 
    margin-right: 0;
    margin-top: 0;
  `}
  ${media.tablet`
    width: 48%; 
     margin-right: 0;
  `}
}

li:nth-child(1),
li:nth-child(2),
li:nth-child(3),
li:nth-child(4) {
  margin-top: 0;
}

li:not(:nth-child(1)),
li:not(:nth-child(2)) {
  ${media.tablet`
    margin-top: 4%;
  `}
}

li:nth-child(even) {
  ${media.tablet`
    margin-left: 4%;
  `}
}

li p {
  position: absolute;
  top: 0;
  font-weight: 900;
  color: #fff;
  background-color: #000;
  padding: 10px 20px;
  ${media.phone`
    top: 28px;
    padding: 20px 34px;
    font-size: 20px;
    `}
    ${media.tablet`
    top: 28px;
    padding: 20px 34px;
    font-size: 18px;
  `}
}

li:hover > p {
  color: #000;
  background: transparent;
  border: 3px solid #000;
  padding: 7px 17px;
}

img {
  width: 90%;
  position: relative;
  ${media.phone`
    width: 100%; 
  `}
  ${media.tablet`
    width: 100%; 
  `}
}

li:hover > button {
  display: block;
}

.buttonWrapper {
  position: absolute;
  width: 90%;
  z-index: 2;
  bottom: 5%;
  left: 5%;
}

.buttonWrapper button {
  margin: 0 auto;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  border: 3px solid #000;
  padding: 5px 33px;
  font-weight: 700;
  display: none;
  ${media.phone`
    display: block;
    right: 0;
    left: initial;
  `}
  ${media.tablet`
    display: block;
    right: 0;
    left: initial;
  `}
}

.buttonWrapper button:hover {
  color: #fff;
  background-color: #000;
  transition: all .2s ease-in-out;
  transform-origin: left top;
}

li:hover > .buttonWrapper button {
  display: block;
}
`