import { IconRepresentation } from "..";

export type ProjectManifest = {
    id: string;
    name: string;
    icon: IconRepresentation;
};

export type Record = {
    type: "note";
} & {
    lastRevision: number;
    id: string;
};

export type Project = {
    records: Record[];
    manifest: ProjectManifest;
};

export interface ProjectInterface {
    manifest: ProjectManifest;
    records: { [key: string]: Record };
    sync: () => Promise<void>;
    close: () => Promise<void>;
    createRecord?: (
        record: Omit<Record, "id" | "lastRevision">
    ) => Promise<Record>;
    updateRecord?: (
        record: Omit<Record, "id" | "lastRevision">
    ) => Promise<Record>;
    deleteRecord?: (recordId: string) => Promise<void>;
    updateManifest?: (newManifest: ProjectManifest) => Promise<ProjectManifest>;
}

export type ActiveProjectContextType = {
    active: true;
    interface: ProjectInterface;
};
