import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  toggleSidemenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
