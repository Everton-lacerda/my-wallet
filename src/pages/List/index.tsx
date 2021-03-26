import React, {useMemo, useState, useEffect} from 'react';
import { match } from 'react-router';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/Selectinput';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import { Container, Content, Filters } from './style';
interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}
const List: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    
    const { type } = match.params;

    const header = useMemo(() => {
        return type === 
        'entry-balance' ? {
            title: 'Entradas',
            lineColor: '#F7931B'
        } : {
            title:'Saídas',
            lineColor: '#E44C4E'
        } 
    },[type]);

    const listData = useMemo(()=> {
        return type === 'entry-balance' ? gains : expenses;
    },[type])

    useEffect(() => {

        const res = listData.map((item) => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted:  formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41f0' :'#E44C4E'
            }
        })

        setData(res) 
    },[])

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

    return (
        <Container>
            <ContentHeader title={header.title} lineColer={header.lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)}  defaultValue={monthSelected}/>
                <SelectInput options={years}  onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter recurrent"
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard 
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List