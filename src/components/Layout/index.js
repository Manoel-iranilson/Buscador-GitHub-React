import React from "react";
import useGitHub from "../../hooks/GitHubHooks";
import Header from "../Header";

import * as S from "./styles";

function Layout({ children }) {
  const { gitHub } = useGitHub();
  return (
    <S.Container>
      <Header />
      {gitHub.loading ? <p>loading</p> : }
      { children }
    </S.Container>
  );
}

export default Layout;
