import { useWindowSize } from "@uidotdev/usehooks";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export interface IApp {
  landscape: boolean;
  setLandscape: React.Dispatch<React.SetStateAction<boolean>>;
  size: { width: number | null; height: number | null }
}

export const AppContext = createContext<IApp>({
  landscape: false,
  setLandscape: () => { },
  size: { width: null, height: null }, // Initialize size
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [landscape, setLandscape] = useState<boolean>(true)
  const size = useWindowSize();

  console.log(size)

  return (
    <AppContext.Provider
      value={{
        landscape,
        setLandscape,
        size
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): IApp => {
  return useContext(AppContext);
};
