import styled from "styled-components";

export const HederWrapper = styled.div`
    // height:80px;
    background: rgba(260, 260, 260, 1);
    border-bottom: 0.5px solid silver;

`

export const ParagraphWrapper = styled.div`
color:black;
font-family: Montserrat;
font-size:32px;
font-weight:500
`

export const ButtonWrapper = styled.div`
    // height:80px;
    display:flex;
    align-item:center;
    justify-content:center;
    gap:20px;
    font-family: Montserrat;



`

export const Button = styled.button`
    color:black;
    font-size:16px;
    font-weight:500;
    line-height:19.5px;
    padding:0;
    border: 0;
    background-color:rgba(255, 255, 255, 1); &:hover{
        background-color:lightgray;
    }
    padding:12px;
    cursor: pointer;
    font-family: Montserrat;
    // height:80px;
    
`

export const HeaderDiv = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    

`