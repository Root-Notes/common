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
