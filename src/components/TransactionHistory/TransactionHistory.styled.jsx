import styled from "styled-components";

export const Table = styled.table`
    margin: 20px auto 0 auto;
    width: 600px;
    border-collapse:collapse;
    border-spacing: 0;
    border-radius: 10px;
    background-color: #d2d2d2;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.41);
`;

export const TableHead = styled.tr`
    height: 40px;
    background-color: #04A2FC;
    text-align: center;
    text-transform: uppercase;
    color: white;
    
    th {
        width: calc(100% / 3);

        :not(:last-child) {
        border-right: 1px solid #07ab51;
        }
    }
`;

export const TableItem = styled.tr`
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    
    &:nth-child(even) {
    background-color: #D3E2EB;
    }
    td{
        :not(:last-child){
            border-right: 1px solid #07ab51
        }
    }
`;