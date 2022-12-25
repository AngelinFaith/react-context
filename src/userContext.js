// Need to store the data in the context. Then you can use it in the required component using useContext hooks.

import { createContext } from "react";

const user = {
  firstName: "SkilSafari",
  lastName: "EduKeys",
};
const UserContext = createContext(user);

const details = {
  name: 'faith',
  age: 22
};

const DetailsContext = createContext(details);

export {UserContext, DetailsContext};