import styled from "styled-components";


export const Button = styled.button`
    font-size:16px;
    font-family:Montserrat;
    border:0;
    height: 28px;
    padding: 4px;
    background-color: white; &:hover{
        background-color:lightgray;
    };
    cursor: pointer;
    border:0.5px solid silver;
`

export const CrudText = styled.div`
    font-size:16px;
    font-family:Montserrat;
    font-weight:500;
    font-size:32px;
`


export const CrudTextWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:0px 48px;
    align-items:center;
`

export const ButtonWrapper = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:18px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border: 1px solid black;
    padding: 10px;
    font-family: Montserrat;
    font-size:12px;
    width:350px;
    gap:2px;
`

export const DetailWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  
`