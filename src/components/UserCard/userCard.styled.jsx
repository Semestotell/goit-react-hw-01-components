import styled from 'styled-components'

export const Card = styled.div`
    margin: 0 auto;
    width:  350px;
    background-color: #fafafa;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.41);
    border-radius: 5px;
`;
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
`;
export const Avatar = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: gray;
    `;
export const UserName = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin: 30px 0 0 0 ;
`;
export const UserInfo = styled.p`
    margin: 15px 0 0 0;
    font-size: 20px;
    font-weight: 500;
    color: gray;
`;
export const StatsList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0 0 0;
    padding: 0;
`;
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    border-top:1px solid #D2D2D2;
    background-color: #DCDCDC;
    :not(:last-child){
        border-right: 1px solid #D2D2D2;
    }
`;
export const Label = styled.span`
    color: grey;
    font-weight: 500;
`;
export const Quantity = styled.span`
    font-weight: 700;
`;
