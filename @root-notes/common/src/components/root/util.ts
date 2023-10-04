import { createContext } from "react";
import { Records } from "../../types/project";

export type ProjectDescriptor = {
    id: string;
    entrypoint: () => Records[];
    onClose: () => void;
};

export type RootContextType = {
    descriptor: ProjectDescriptor;
    close: () => void;
};

export const RootContext = createContext<RootContextType>(null as any);
