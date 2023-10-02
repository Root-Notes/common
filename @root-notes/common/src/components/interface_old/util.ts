import { ProjectInterface } from "../..";
import { createContext, useContext } from "react";

export type RootNotesContextType = {
    project: ProjectInterface;
};

export const RootNotesContext = createContext<RootNotesContextType>(
    null as any
);

export function useRootProject(): ProjectInterface {
    return useContext(RootNotesContext).project;
}
