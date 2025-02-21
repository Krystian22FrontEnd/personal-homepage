import axios from "axios";
import { useEffect, useState } from "react";
import username from "./username";

interface RepoData {
  id: number;
  name: string;
  description: string;
  homepage: string;
  html_url: string;
}

type Status =
  | { status: "loading"; data?: RepoData }
  | { status: "success"; data: RepoData[] }
  | { status: "error" };

export const useRepoData = () => {
  const [repoData, setRepoData] = useState<Status>({
    status: "loading",
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const githubAPIBaseURL = "https://api.github.com";
        const response = await axios.get<RepoData[]>(
          `${githubAPIBaseURL}/users/${username}/repos?sort=created`
        );
        const filteredRepos = response.data.filter((repo: { name: string }) =>
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
