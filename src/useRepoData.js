import axios from "axios";
import { useEffect, useState } from "react";
import username from "./common/PersonalData/username";

export const useRepoData = () => {
  const [repoData, setRepoData] = useState({
    status: "loading",
    data: [],
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const githubAPIBaseURL = "https://api.github.com";
        const response = await axios.get(
          `${githubAPIBaseURL}/users/${username}/repos?sort=created`
        );
        const filteredRepos = response.data.filter((repo) =>
          [
            "movie-browser",
            "personal-homepage",
            "CurrencyConverter-React",
            "To-do-list-React",
            "Tasks-List",
            "CurrencyConventer",
            "Homepage",
          ].includes(repo.name)
        );

        setRepoData({
          status: "success",
          data: filteredRepos,
        });
      } catch (error) {
        setRepoData({
          status: "error",
        });
      }
    };
    setTimeout(axiosData, 1000);
  }, []);

  return repoData;
};
