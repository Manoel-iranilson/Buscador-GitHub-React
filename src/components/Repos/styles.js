import styled from "styled-components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export const STabs = styled(Tabs)`
  font-size: 15px;
  width: 50%;
`;
export const STabList = styled(TabList)`
  display: flex;
  list-style-type: none;
`;
export const STab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;
  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const STabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;
  &.is-selected {
    display: block;
  }
`;
