import React from 'react';
import { HeaderContainer, HeaderContent, DownloadButton, MenuItens } from './styles';
import pp from '../../assets/pp.jpeg';

const Header = React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={pp}/>
                <nav>
                    <MenuItens>Skills</MenuItens>
                    <MenuItens>Projetos</MenuItens>
                    <MenuItens>Sobre</MenuItens>
                    <MenuItens>Contatos</MenuItens>
                    <DownloadButton>Download CV</DownloadButton>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header;