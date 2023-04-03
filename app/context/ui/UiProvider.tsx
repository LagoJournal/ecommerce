import { FC, useReducer } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
  sidemenuOpen: boolean;
}

export const UI_INITIAL_STATE: UiState = {
  sidemenuOpen: false,
};

type Props = {
  children?: React.ReactNode;
};

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSidemenu = () => {
    dispatch({ type: "Ui - ToggleMenu" });
  };
  return (
    <UiContext.Provider
      value={{
        ...state,
        toggleSidemenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
