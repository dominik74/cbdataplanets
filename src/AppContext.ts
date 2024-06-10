import { createContext } from "react";
import Planet from "./types/Planet";

interface AppContextType {
	planets: Planet[];
	setPlanets: React.Dispatch<React.SetStateAction<Planet[]>>;
}

const defaultState: AppContextType = {
	planets: [],
	setPlanets: () => {}
}

export const AppContext = createContext<AppContextType>(defaultState);

