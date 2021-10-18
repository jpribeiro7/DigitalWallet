import React from "react";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./style";
const List: React.FC = () => {
    const options = [
        {value:'Lista1',label:'Lista1'},
        {value:'Maria',label:'Joana'},
    ]
    return (
        <Container>
            <ContentHeader title='List' lineColor='#fff'>
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default List;