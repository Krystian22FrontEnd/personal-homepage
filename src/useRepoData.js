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
          name: response.data.name,
          demo: response.data.homepage,
          code: response.data.svn_url
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
