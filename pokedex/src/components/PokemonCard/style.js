import styled from "styled-components"


export const Card = styled.div`
    width: 42%;
    height: flex;
    display: flex;
    flex-direction: column;
    margin: 15px;
    border-radius: 8px;
    box-shadow: 0 0 1em gray;
    @media(min-width: 768px){
        width: 29%;
    }
    @media(min-width: 1000px){
        width: 21.5%;
    }

    img{
        width: 95%;
        height: 70%;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 8px;
    }

    h2{
        margin: 0 auto;
    }
`

export const Buttons = styled.div`
    text-align: center;
    width: 100%;
    height: flex;
    flex-direction: row;
    

    button{
        height: 30px;
        margin: 10px 0;
        background-color: #FED049;
        border-style: hidden;
        border-radius: 8px;

    }
    `