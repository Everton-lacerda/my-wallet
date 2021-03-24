import React from 'react';
import { Container } from './style';

import ContentHeader from '../../components/ContentHeader'; 
import SelectInput from '../../components/Selectinput';

const months = [
    {value: '1', label: 'Janeiro'},
    {value: '2', label: 'Fevereiro'},
    {value: '3', label: 'Março'},
]

const years = [
    {value: '2021', label: '2021'},
    {value: '2020', label: '2020'},
    {value: '2019', label: '2019'},
]

const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColer="#fff">
                <SelectInput options={months}  />
                <SelectInput options={years}  />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard