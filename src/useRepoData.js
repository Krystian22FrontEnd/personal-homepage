import axios from "axios";
import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export const useRepoData = ({ username }) => {
  const [repoData, setRepoData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const axiosData = async () => {
      try {
        const octokit = new Octokit({
          auth: "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",
        });

        const response = await octokit.request("GET /repos/{owner}/{repo}", {
          owner: "Krystian22FrontEnd",
          repo: "Homepage",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
        setRepoData({
          status: "success",
          owner: response.data.owner,
          data: response.data,
          description: response.data.description,
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
