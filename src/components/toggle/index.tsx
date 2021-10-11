import React from "react";
import { Container, 
        ToggleSelector,
        ToggleLable } from "../toggle/styles";


 const Toggle: React.FC = () => (
    <Container>
        <ToggleLable>Light</ToggleLable>
        <ToggleSelector checked 
                uncheckedIcon={false}
                checkedIcon={false} 
                onChange={() => console.log('Trocou')}
                />
        
        <ToggleLable>Dark</ToggleLable>
    </Container>
)
export default Toggle;

