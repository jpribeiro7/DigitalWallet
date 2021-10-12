import React from "react";
import {MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'
import { Container,
        Header,
        LogImg,
        MenuContainer,
        MenuItemLink,
        Title
} from './styles'
import logoImg from '../../assets/logo.svg'

const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo my wallet"/>
                <Title>My wallet</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href='#'>
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowUpward/>
                    Income
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowDownward/>
                    Outcome
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdExitToApp/>
                    Exit
                </MenuItemLink>
                
            </MenuContainer>
        </Container>
    )
}

export default Aside;