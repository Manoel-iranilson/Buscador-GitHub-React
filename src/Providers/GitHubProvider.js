import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GitHubContext = createContext({
  loading: false,
  user: {},
  repositories: {},
  stars: {},
});

function GithubProvider({ children }) {
  const [gitHub, setGitHub] = useState({
    loading: false,
    user: {
      login: undefined,
      name: "Manoel Iranilson",
      location: undefined,
      avatar_url: undefined,
      HtmlUrl: "https://github.com/Manoel-iranilson",
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: {},
    stars: {},
  });

  function getUser(username) {
    setGitHub((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGitHub((prevState) => ({
          ...prevState,
          user: {
            login: data.login,
            name: data.name,
            avatar_url: data.avatar_url,
            location: data.location,
            Html_url: data.Html_url,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGitHub((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  }

  const contextValue = {
    gitHub,
    getUser: useCallback((username) => getUser(username), []),
  };

  return (
    <GitHubContext.Provider value={contextValue}>
      {children}
    </GitHubContext.Provider>
  );
}

export default GithubProvider;
