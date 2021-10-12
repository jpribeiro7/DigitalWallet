import React,
       {useState} from "react";
import { Container, 
        ToggleSelector,
        ToggleLable } from "../toggle/styles";



const Toggle: React.FC = () => {
    
    const [switchChecked, setStateChecked] = useState(false);
    const handleChange = (state:boolean) => {
        setStateChecked(state);
    };

    return (
        <Container>
            <ToggleLable>Light</ToggleLable>
            <ToggleSelector 
                    checked={switchChecked}
                    uncheckedIcon={false}
                    checkedIcon={false} 
                    onChange={handleChange}
                    
            />
            
            <ToggleLable>Dark</ToggleLable>
        </Container>
    )
}
export default Toggle;

