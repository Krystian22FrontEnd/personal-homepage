import { List, ListItem } from "./styled";
import { skillsData } from "./skillsData";

const Skillset = () => {
  return (
    <List>
      {skillsData.map((skill) => (
        <ListItem key={skill}>{skill}</ListItem>
      ))}
    </List>
  );
};

export default Skillset;
