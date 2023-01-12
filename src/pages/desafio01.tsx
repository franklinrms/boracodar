import Head from 'next/head';
import { Challenge01 } from '../challenges/Challenge01';
import * as S from '../challenges/Challenge01/Challenge01.styled';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>#boraCodar | Player de musica</title>
      </Head>
      <h1 className="big-heading">um player de musica</h1>

      <S.Section>
        <a
          href="https://github.com/franklinrms/boracodar/tree/main/src/challenges/Challenge01"
          className="repository-link"
          target="blank"
        />
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
