import { NoteRecord } from "./notes";
import { ManifestRecord } from "./record";
import { PartialDeep } from "type-fest";
import { SyncRecord } from "./sync";

export type Records = NoteRecord | ManifestRecord | SyncRecord;

export interface ProjectInterface {
    records: Records[];
    set: (id: string, data: PartialDeep<Records>) => void;
    create: (data: Records) => void;
    delete: (id: string) => void;
}
