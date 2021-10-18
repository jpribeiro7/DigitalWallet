import React from "react";
import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./style";

const Dashboard: React.FC = () => {
    const options = [ {
        value: 'Ana',
        label: 'Ana'
    },
    {
        value: 'Maria',
        label: 'Maria'
    },
    {
        value: 'Jose',
        label: 'Jose'
    }
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;