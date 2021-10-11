import React, {useMemo} from "react";
import emojis from "../../utils/emojis";

import { Container,
        Profile, 
        Welcome, 
        UserName } from './styles'
import  Toggle  from '../toggle/index'


const MainHeader: React.FC = () => {
    const emoji = useMemo( () => {
        const indice = Math.floor(Math.random() * emojis.length)-1
        return emojis[indice]
    }, [])
    return(
        <Container>
            <Toggle/>
            <Profile>
                <Welcome>Hi {emoji}</Welcome>
                <UserName>user</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;