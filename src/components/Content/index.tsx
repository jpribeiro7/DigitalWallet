import React from "react";
import ContentHeader from "../contentHeader";
import { Container } from './styles'

const Content: React.FC = ({ children }) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default Content;