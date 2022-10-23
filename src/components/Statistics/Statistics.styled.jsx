import styled from 'styled-components'
import getRandomHexColor from './getRandomHexColor';

export const Stat = styled.section`
    margin: 30px auto 0 auto;
    background-color: #d5d5d5;
    border-radius:  0 0 5px 5px;
    width: 500px;
` ;
export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 100%;
`;
export const StatItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0;
    width: 100%;
    background-color: ${getRandomHexColor};
`;
export const Title = styled.h2` 
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 30px 0;
    margin: 0;
`;
export const Label = styled.span`
color: white;
`;
export const Percentage = styled.span`
    margin-top: 5px;
    font-size:20px;
    font-weight: 500;
    color: white;
`;