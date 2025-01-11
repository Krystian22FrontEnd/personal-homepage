import axios from "axios";
import { useEffect, useState } from "react";

export const useRepoData = ({username = "Krystian22FrontEnd"}) => {
  const [repoData, setRepoData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const githubAPIBaseURL = "https://api.github.com";
        const response = axios
          .get(`${githubAPIBaseURL}/users/${username}/repos`)
          .then((response) => response.data);

        setRepoData({
          status: "success",
          owner: response.data.owner,
          data: response.data,
          description: response.data.description,
          name: response.data.name,
          demo: response.data.homepage,
          code: response.data.svn_url,
        });
      } catch (error) {
        setRepoData({
          status: "error",
        });
      }
    };
    setTimeout(axiosData, 1000);
  }, [username]);

  return repoData;
};
