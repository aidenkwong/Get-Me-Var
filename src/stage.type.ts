import Case from "./case.enum.js";

type Stage = {
  name: string;
  choices: {
    [key: string]: Stage | Case | Case[];
  };
};

export default Stage;
