/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { CreditsUser, SongCreditsTypes } from '../../../../Model/Song/songs';
import FollowButton from '../../../Util/FollowButton/FollowButton';
import classes from './style';

interface CreditsProps {
  credit: CreditsUser;
}

const Credits = ({ credit }: CreditsProps) => {
  const [following, setFollowing] = useState<boolean>(false);

  useEffect(() => {
    // TODO SET FOLLOW DEPENDING ON CONNECTED USER
  }, []);

  return (
    <div css={classes.root}>
      <div css={classes.details}>
        <p css={classes.name}>{credit.name}</p>
        {credit.roles.map((role, index) => (
          <span key={index}>
            {index > 0 && ', '}
            <span css={classes.role}>{role}</span>
          </span>
        ))}
      </div>
      <div> {credit.roles?.includes(SongCreditsTypes.MAIN_ARTIST) ? <FollowButton /> : <></>}</div>
    </div>
  );
};

export default Credits;
