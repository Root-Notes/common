import { createContext, useContext, useMemo } from "react";
import { Records } from "../../types/project";
import { AppCommands } from "../../types/commands";
import { defaults } from "lodash";

export type ProjectDescriptor = {
    id: string;
    entrypoint: () => Records[];
};

export type RootContextType = {
    descriptor: ProjectDescriptor;
    commands: AppCommands;
};

export const RootContext = createContext<RootContextType>(null as any);

export function useAppCommands(): Required<AppCommands> {
    const defined = useContext(RootContext).commands;
    const definite: Required<AppCommands> = useMemo(
        () =>
            defaults(defined, {
                projectClose: () => {},
                projectCreate: () => {},
                projectOpen: () => {},
                appSettings: () => {},
            } as Required<AppCommands>),
        [defined]
    );
    return definite;
}
