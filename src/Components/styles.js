import styled from 'styled-components';

export const HeaderContainer = styled.header` 
    height: 80px;
    background-color:  #28262e;
    border-bottom: 10px solid #ed940e;
    padding-left: 20px;
    padding-right: 20px;
`;

export const HeaderContent = styled.div`
    display: flex;
    img {
        width: 60px;
        height: 60px;
        margin-left: 20px;
        margin-top: 10px;
        margin-right: auto;
        border: 1px solid #fff;
        
    }
    nav{
        margin-top: 27px;
        margin-right: 30px;
    }
`;

export const DownloadButton = styled.a`
        background-color: #ed940e;
        color: #FFF;
        align-items: center;
        text-decoration: none;
        padding: 18px 20px;
        cursor: pointer;
        font-family: "Fira Code";
        font-size: 20px;
        box-shadow: 5px 5px 0px #a36200;
        transition: box-shadow 0.2s;

        &:active {
            box-shadow: none;
        }

`;

export const MenuItens = styled.a`

        display: inline-flex;
        align-items: center;
        margin-right: 16px;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        font-family: "Fira Code";
        font-size: 20px;

        &::before {
            content: '';
            margin-right: 10px;
            width: 10px;
            height: 10px;
            background-color:  #ed940e;
            
        }

`;