import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    height: 100px;
    width: 100%;
    background-color: #d2d2d2;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.41);
    border-radius: 5px;
    padding: 0;
    :not(:first-child){
        margin-top: 20px;
    }
`;
export const Stat = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
    margin-left: 15px;
    width: 60px;
    border-radius: 5px;
`;
export const Name = styled.p`
    margin-left: 15px;
    font-size: 24px;
    font-weight: 700;
`
