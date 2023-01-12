import Head from 'next/head';
import { Challenge01 } from '../challenges/Challenge01';
import * as S from '../challenges/Challenge01/Challenge01.styled';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>#boraCodar | Player de musica</title>
      </Head>
      <div>
        <h1>
          <span>#boraCodar</span> um player de musica
        </h1>
      </div>
      <S.Section>
        <div className="player-1">
          <Challenge01 isBigCover />
        </div>
        <div className="player-2">
          <Challenge01 />
        </div>
        <div className="player-3">
          <Challenge01 noProgressBar />
        </div>
      </S.Section>
    </>
  );
};

export default Home;
