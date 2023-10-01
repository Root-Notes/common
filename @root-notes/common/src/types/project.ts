import { IconRepresentation } from "..";
import { NoteRecord } from "./notes";

export type ProjectManifest = {
    id: string;
    name: string;
    icon: IconRepresentation;
};

export type Records = NoteRecord;

export type Project = {
    records: Records[];
    manifest: ProjectManifest;
};

export interface ProjectInterface {
    manifest: ProjectManifest;
    records: { [key: string]: Records };
    sync: () => Promise<void>;
    close: () => Promise<void>;
    createRecord?: (
        record: Omit<Records, "id" | "lastRevision">
    ) => Promise<Records>;
    updateRecord?: (
        record: Omit<Records, "id" | "lastRevision">
    ) => Promise<Records>;
    deleteRecord?: (recordId: string) => Promise<void>;
    updateManifest?: (newManifest: ProjectManifest) => Promise<ProjectManifest>;
}

export type ActiveProjectContextType = {
    active: true;
    interface: ProjectInterface;
};
