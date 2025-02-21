import { socials } from "../socials";
import { List, Link } from "./styled";

export const SocialMedia = () => {
  return (
    <List>
      {socials.map(({ name, url, Icon }) => (
        <li key={name}>
          <Link href={url} title={name} target="_blank" rel="noreferrer">
            <Icon/>
          </Link>
        </li>
      ))}
    </List>
  );
};
