import { StyledIcon } from "./styled";
import { ReactComponent as LinkedinIcon } from "../../icons/LinkedIN_black.svg";
import { ReactComponent as GitIcon } from "../../icons/mark-github.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Krystian22FrontEnd",
    Icon: StyledIcon(LinkedinIcon),
  },

  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/krystian-krupi%C5%84ski-4ab044347/",
    Icon: StyledIcon(GitIcon),
  },
];
