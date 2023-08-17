/* eslint-disable no-return-await */
/* eslint-disable import/no-extraneous-dependencies */
// блок для проигрывания трэков

import {
  StyledWrapper,
  StyledContain,
  StyledImage,
  StyledSvg,
  StyledTrack,
  StyledAuthor,
} from './track-play';
import LikeDis from './like-dis/like-dis';
import { ReactComponent as Note } from '../../assets/img/icon/note.svg';
import Skeleton from '../skeleton/skeleton';
import { useThemeContext } from '../../contexts/theme';

function TrackPlay({ loading, playTrack }) {
  // const { isPlaying } = useIsPlayingContext();
  const { theme } = useThemeContext();
  const { id } = playTrack;

  return (
    <StyledWrapper>
      <StyledContain>
        {loading ? (
          <>
            <StyledImage>
              <Skeleton width="51px" height="51px" />
            </StyledImage>
            <StyledTrack>
              <Skeleton width="40px" height="15px" />
            </StyledTrack>
            <StyledAuthor>
              <Skeleton width="40px" height="15px" />
            </StyledAuthor>
          </>
        ) : (
          <>
            <StyledImage theme={{ theme }}>
              <StyledSvg theme={{ theme }}>
                <Note />
              </StyledSvg>
            </StyledImage>
            <StyledTrack theme={{ theme }}>{playTrack?.name}</StyledTrack>
            <StyledAuthor theme={{ theme }}>{playTrack?.author}</StyledAuthor>
          </>
        )}
      </StyledContain>

      <LikeDis id={id} />
    </StyledWrapper>
  );
}

export default TrackPlay;
