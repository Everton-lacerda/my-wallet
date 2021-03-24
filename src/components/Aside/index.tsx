import React from 'react';

import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title } from './style'

import logoimg from '../../assets/logo.svg'

import { 
   MdDashboard,
   MdArrowDownward,
   MdArrowUpward,
   MdExitToApp 
    
} from 'react-icons/md';


const Aside: React.FC = () => {
    return (
        <Container >
            <Header>
                <LogoImg src={logoimg} alt="logo minha wallet" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard" >
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance" >
                    <MdArrowDownward />
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance" >
                    <MdArrowUpward />
                    Saidas
                </MenuItemLink>
                <MenuItemLink href="#" >
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside