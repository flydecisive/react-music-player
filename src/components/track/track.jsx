/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
// компонент для трэка
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Note } from '../../assets/img/icon/note.svg';
import { ReactComponent as Like } from '../../assets/img/icon/like.svg';
// import { ReactComponent as LightNote } from '../../assets/img/icon/light-note.svg';
import { secondsToTime } from '../../consts/helpers';
import Skeleton from '../skeleton/skeleton';
import { useThemeContext } from '../../contexts/theme';
import Dot from '../dot/dot.jsx';
import { useIsPlayingContext } from '../../contexts/isPlaying';
import { setPlayTrack } from '../../store/actions/creators/tracks';
import {
  StyledWrapper,
  StyledAlbum,
  StyledAuthor,
  StyledTime,
  StyledTitle,
  StyledTitleImage,
  StyledTitleSvg,
  StyledText,
  StyledLightText,
  StyledLikeSvg,
  StyledTimeText,
} from './track';

function Track({ item, loading, toggleLike, likesState, setTrackClick }) {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const playedTrack = useSelector((store) => store.tracks.playTrack);
  const { isPlaying, toggleIsPlaying } = useIsPlayingContext();
  const isLike = likesState[item?.id];

  const defineElement = (e) => {
    let target;
    let likeButton;
    if (e) {
      target = e.target;
    }

    if (target) {
      likeButton = target.closest('svg[id]');
    }

    return likeButton;
  };

  const trackClick = (event) => {
    const excludedButton = defineElement(event);
    if (!excludedButton) {
      dispatch(setPlayTrack(item));
      toggleIsPlaying(true);
      setTrackClick(true);
    }
  };

  return (
    <div className="track">
      {loading ? (
        <StyledWrapper>
          <StyledTitle>
            <Skeleton width="51px" height="51px" />
            <Skeleton width="145px" height="24px" />
          </StyledTitle>
          <StyledAuthor>
            <Skeleton width="200px" height="24px" />
          </StyledAuthor>
          <StyledAlbum>
            <Skeleton width="150px" height="24px" />
          </StyledAlbum>
          <StyledTime>
            <Skeleton width="50px" height="24px" />
          </StyledTime>
        </StyledWrapper>
      ) : (
        <StyledWrapper
          onClick={(e) => {
            trackClick(e);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            trackClick(e);
          }}
        >
          <StyledTitle>
            <StyledTitleImage theme={{ theme }}>
              {playedTrack && playedTrack?.id === item?.id ? (
                <Dot isPlaying={isPlaying} />
              ) : (
                <StyledTitleSvg theme={{ theme }}>
                  <Note />
                </StyledTitleSvg>
              )}
            </StyledTitleImage>
            <StyledText theme={{ theme }}>{item.author}</StyledText>
          </StyledTitle>
          <StyledAuthor>
            <StyledText theme={{ theme }}>{item.name}</StyledText>
          </StyledAuthor>
          <StyledAlbum>
            <StyledLightText t>{item.album}</StyledLightText>
          </StyledAlbum>
          <StyledTime>
            <StyledLikeSvg
              id={item?.id}
              onClick={(event) => toggleLike(event)}
              theme={{ theme }}
              className="_like-icon"
            >
              <Like
                fill={isLike ? '#ad61ff' : 'transparent'}
                stroke={isLike ? '#ad61ff' : '#696969'}
              />
            </StyledLikeSvg>
            <StyledTimeText theme={{ theme }}>
              {secondsToTime(item.duration_in_seconds)}
            </StyledTimeText>
          </StyledTime>
        </StyledWrapper>
      )}
    </div>
  );
}

export default Track;
