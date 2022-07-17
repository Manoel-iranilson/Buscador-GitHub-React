import { useContext } from "react";
import { GitHubContext } from "../Providers/GitHubProvider";

const useGitHub = () => {
  const { gitHub, getUser } = useContext(GitHubContext);
  return { gitHub, getUser };
};

export default useGitHub;
