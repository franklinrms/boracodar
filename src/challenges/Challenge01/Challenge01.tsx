import Image from 'next/image';
import cover from './assets/unsplash.png';
import playIcon from './assets/play.svg';
import pauseIcon from './assets/pause.svg';
import backIcon from './assets/play-back.svg';
import forwardIcon from './assets/play-forward.svg';
import * as S from './Challenge01.styled';
import { useEffect, useRef, useState } from 'react';

interface PropsChallenge01 {
  noProgressBar?: boolean;
  isBigCover?: boolean;
}

export function Challenge01({
  noProgressBar,
  isBigCover,
}: PropsChallenge01): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (audioPlayer.current === null) return;
    const seconds = Math.floor(audioPlayer.current?.duration);
    setDuration(seconds);
  }, [audioPlayer.current?.onloadedmetadata, audioPlayer.current?.readyState]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(currentTime + 1);

        if (currentTime === duration) {
          setIsPlaying(false);
          setCurrentTime(0);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentTime, isPlaying]);

  const togglePlayPause = (): void => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current?.play().catch(error => {
        console.error(error);
      });
    } else audioPlayer.current?.pause();
  };
  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changeRange = (): void => {
    if (audioPlayer.current === null) return;
    audioPlayer.current.currentTime = Number(progressBar.current?.value);
    setCurrentTime(Number(progressBar.current?.value));
  };

  const backFifteen = (): void => {
    if (audioPlayer.current === null || progressBar.current === null) return;
    progressBar.current.value = String(currentTime - 15);
    changeRange();
  };

  const forwardFifteen = (): void => {
    if (audioPlayer.current === null || progressBar.current === null) return;
    progressBar.current.value = String(currentTime + 15);
    changeRange();
  };

  const coverSize = isBigCover ?? false ? 190 : 85;

  return (
    <S.Player isBigCover={isBigCover}>
      <S.Details isBigCover={isBigCover}>
        <Image
          src={cover}
          priority
          width={coverSize}
          height={coverSize}
          alt="capa"
        />
        <div>
          <h3>Acorda Devinho</h3>
          <p>Banda Rocketseat</p>
        </div>
      </S.Details>
      <S.Controls>
        <button type="button" onClick={backFifteen}>
          <Image src={backIcon} alt="voltar" />
        </button>
        <button type="button" onClick={togglePlayPause}>
          {isPlaying ? (
            <Image src={pauseIcon} width={30} height={30} alt="pause" />
          ) : (
            <Image src={playIcon} width={30} height={30} alt="play" />
          )}
        </button>
        <button type="button" onClick={forwardFifteen}>
          <Image src={forwardIcon} width={30} height={30} alt="avançar" />
        </button>
      </S.Controls>
      {!(noProgressBar ?? false) && (
        <S.ProgressBar range={(currentTime / duration) * 100}>
          <input
            type="range"
            defaultValue={0}
            max={duration}
            ref={progressBar}
            onChange={changeRange}
          />
          <div>
            <p>{calculateTime(currentTime)}</p>
            <p>{!isNaN(duration) && calculateTime(duration)}</p>
          </div>
        </S.ProgressBar>
      )}
      <audio
        ref={audioPlayer}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3"
        preload="metadata"
      ></audio>
    </S.Player>
  );
}
