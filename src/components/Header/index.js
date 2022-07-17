import React, { useState } from "react";
import App from "../../App";
import useGitHub from "../../hooks/GitHubHooks";

import * as S from "./styles";

function Header() {
  const { getUser } = useGitHub();
  const [userNameForSearch, setUserNameForSearch] = useState();

  const submitGetUser = () => {
    if (!userNameForSearch) return;
    return getUser(userNameForSearch);
  };

  return (
    <header>
      <S.Container>
        <input
          type="text"
          placeholder="Digite o nome do Usuario..."
          onChange={(event) => setUserNameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          Buscar
        </button>
      </S.Container>
    </header>
  );
}

export default Header;
