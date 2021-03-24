import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/Selectinput';
import { Container } from './style';

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


const List: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Saídas" lineColer="#E44C4E">
                <SelectInput options={months}  />
                <SelectInput options={years}  />
            </ContentHeader>
        </Container>
    );
}

export default List