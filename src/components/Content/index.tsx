import React from "react";
import ContentHeader from "../contentHeader";
import { Container } from './styles'

const Content: React.FC = ({ children }) => {
    return(
        <Container>
            <ContentHeader> { children }</ContentHeader>
            
        </Container>
    )
}

export default Content;