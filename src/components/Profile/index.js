/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import useGitHub from "../../hooks/GitHubHooks";
import * as S from "./styles";

function Profile() {
  const { gitHub } = useGitHub();
  const User = gitHub.user;

  useEffect(() => {}, []);

  return (
    <div>
      <S.Container>
        <S.Photo src={User.avatar_url} alt="Perfil photo" />
        <S.userInfor>
          <div>
            <a href={User.Html_url} target="_black" rel="noreferrer">
              <h1>{User.name}</h1>
            </a>

            <S.userdate>
              <h3>username:</h3>
              <h4>{User.name}</h4>
            </S.userdate>
          </div>
          <S.status>
            <div>
              <h4>followers</h4>
              <span>{User.followers}</span>
            </div>
            <div>
              <h4>Gists</h4>
              <span>{User.public_gists}</span>
            </div>
            <div>
              <h4>following</h4>
              <span>{User.following}</span>
            </div>
            <div>
              <h4>Repos</h4>
              <span>{User.public_repos}</span>
            </div>
          </S.status>
        </S.userInfor>
      </S.Container>
    </div>
  );
}

export default Profile;
