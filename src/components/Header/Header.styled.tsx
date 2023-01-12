import styled from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  padding: 0 30px;
  height: 100px;

  @media (min-width: 1400px) {
    padding: 0 150px;
  }
`;
export const CodeBy = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  font-size: 18px;
  height: 44px;
  padding: 0 12px;
  position: relative;
  width: 180px;
  white-space: nowrap;
  :hover {
    .credit {
      transform: rotateZ(360deg);
    }
    .franklin {
      transform: translateX(-70px);
    }
  }
  .credit {
    display: block;
    font-size: 20px;
    line-height: 20px;
    margin: 0;
    transition: 0.5s all cubic-bezier(0.7, 0, 0.3, 1);
  }
  .box {
    overflow: hidden;
  }
  .franklin {
    display: inline-block;
    padding: 0 3.36px;
    transform: translateX(0);
    transition: 0.5s all cubic-bezier(0.7, 0, 0.3, 1);
  }
`;
export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 2px;
    background: #c6adff;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }
  &:hover::before {
    width: 100%;
    left: 0;
  }
`;
