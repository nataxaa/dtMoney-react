import { toColorString } from "polished";
import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;


` 

interface CardProps{
  cha?: number | any;
  
}

export const Card = styled.div<CardProps>`

background: var(--white);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${Props => Props.theme.colors.td};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }

   

    &.total {
      background:${(props) => props.cha > 0  ? '#33CC95' : '#E62E4D'};
      color:${(props) => props.cha > 0  ? 'var(--title)' : ' #FFFFFF'};
    }



`