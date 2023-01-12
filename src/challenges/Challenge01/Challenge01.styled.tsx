import styled from 'styled-components';

interface isBigCoverProps {
  isBigCover: boolean;
}

export const Section = styled.section`
  display: grid;
  max-width: 1024px;
  margin: 0 auto;
  background-color: #0f0d13;
  grid-template-columns: max-content max-content;
  grid-template-areas:
    'A B'
    'A C';

  gap: 32px;
  place-content: center;
  height: 80vh;
  border-radius: 24px;

  .player-1 {
    grid-area: A;
  }
  .player-2 {
    grid-area: B;
    height: fit-content;
  }
  .player-3 {
    grid-area: C;
    height: fit-content;
  }
`;

export const Player = styled.div`
  ${props => props.theme.mixins.flexCenter};
  flex-direction: column;
  gap: 28px;
  border-radius: 10px;
  background: #2a2141;
  padding: ${({ isBigCover }: isBigCoverProps) =>
    isBigCover ? '50px 38px' : '28px'};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: ${({ isBigCover }: isBigCoverProps) =>
    isBigCover ? 'column' : 'row'};
  gap: 28px;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #e1e1e6;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
    color: #d9d9d999;
  }
`;
export const Controls = styled.div`
  ${props => props.theme.mixins.flexCenter};
  gap: 50px;
  width: 100%;

  button {
    outline: none;
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const ProgressBar = styled.div`
  width: 100%;

  input[type='range'] {
    appearance: none;
    position: relative;
    margin-right: 15px;
    width: 100%;
    height: 6px;
    background: #d9d9d94c;
    border-radius: 10px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      border-radius: 10px;
      background-color: #d9d9d9b2;
      height: 6px;
      width: ${({ range }: { range: number }) => range}%;
    }
  }
  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: transparent;
    transition: background 0.3s ease-in-out;
  }
  div {
    ${props => props.theme.mixins.flexBetween};
    p {
      font-size: 0.9rem;
      font-weight: 400;
      color: #d9d9d999;
    }
  }
`;
