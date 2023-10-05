export type AppCommands = Partial<{
    projectClose: () => void;
    projectCreate: () => void;
    projectOpen: () => void;
    appSettings: () => void;
}>;
