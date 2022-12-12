import styled from 'styled-components';
import { variables, mixins } from '@splunk/themes';

const StyledContainer = styled.div`
    height: 100%;
    align-items: center;
`;

const TopDiv = styled.div`
    display: flex;
    background: red;
    width: 100%;
    height: 20%;
`;

const TopRightDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: green;
    width: 50%;
`;
const TopLeftDiv = styled.div`
    background: yellow;
    width: 50%;
`;

const StyledGreeting = styled.div`
    font-weight: bold;
    color: ${variables.brandColor};
    font-size: ${variables.fontSizeXXLarge};
`;

export { StyledContainer, TopDiv, TopRightDiv, TopLeftDiv, StyledGreeting };
