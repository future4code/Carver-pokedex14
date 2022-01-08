import styled from "styled-components"



export const Card = styled.div`
    width: 51%;
    height: 360px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border-radius: 8px;
    box-shadow: 0 0 1em gray;
    margin: 0 auto;
    /* justify-content: space-around; */



    @media(min-width: 768px){
        width: 29%;
        height: 320px;
        display: flex;
        justify-content: space-around;

    }
    @media(min-width: 1000px){
        width: 21.5%;
        height: 360px;

    }

    img{
        width: 55%;
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
    

    
    `

export const Button = styled.button`
        height: 30px;
        margin: 10px 0;
        background-color: #FED049;
        border-style: hidden;
        border-radius: 8px;
`


export const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    /* height: 100vh; */
    align-items: center;
    justify-align: center;
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width: 768px){
        display: flex;
    flex-direction: row;
    }
`