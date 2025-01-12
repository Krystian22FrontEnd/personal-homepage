import axios from "axios";
import { useEffect, useState } from "react";
import username from "./common/PorfolioSection/username";

export const useRepoData = () => {
  const [repoData, setRepoData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const githubAPIBaseURL = "https://api.github.com";
        await axios
          .get(`${githubAPIBaseURL}/users/${username}/repos`)
          .then((response) =>
            setRepoData({
              status: "success",
              data: response.data,
              name: response.data[0].name,
              url: response.data[0].html_url,
              desc: response.data[0].description
            })
          );
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
