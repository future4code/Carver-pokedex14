import styled from "styled-components"

export const Headerstyle = styled.div`
    width: 100%;
    height: 90px;
    background-color: #950101;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`

export const Button = styled.div`
    background-color: transparent;
    width: 9rem;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    img{
        margin: 0;
        width: 100%;
        height: 80%;
    }

    @media(min-width: 768px){
        width: 12rem;
    }
`


export const Button2 = styled.button`
        height: 30px;
        margin: 10px 0;
        background-color: #FED049;
        border-style: hidden;
        border-radius: 8px;
        margin-right: 15px; 
`