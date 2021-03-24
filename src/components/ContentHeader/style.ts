import styled from 'styled-components';

interface ITitleContainerProps {
    lineColer: string;
}


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-top: 25px;
    margin-bottom: 25px;

   
`;
export const TitleContainer = styled.div<ITitleContainerProps>` 
     > h1 {
        color: ${props => props.theme.colors.white};

        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.lineColer };
        }
    }
`;
export const Controllers = styled.div` 
    display: flex;
    align-items: center;
`;