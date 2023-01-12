import * as S from './Header.styled';
export function Header(): JSX.Element {
  return (
    <S.Header>
      <a href="https://www.codebyfranklin.cf/" target="_blank" rel="noreferrer">
        <S.CodeBy>
          <span className="credit">©</span>
          <div className="box">
            <span className="franklin">Code by Franklin Ramos</span>
          </div>
        </S.CodeBy>
      </a>
      <S.Link href="https://boracodar.dev/" target="_blank" rel="noreferrer">
        #boraCodar
      </S.Link>
    </S.Header>
  );
}
