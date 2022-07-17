import React from "react";
import * as S from "./styles";

function repos() {
  return (
    <S.STabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.STabList>
        <S.STab>Repos</S.STab>
        <S.STab>stars</S.STab>
      </S.STabList>
      <S.STabPanel>Repos</S.STabPanel>
      <S.STabPanel>stars</S.STabPanel>
    </S.STabs>
  );
}

export default repos;
