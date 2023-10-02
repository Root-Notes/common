import { Records } from "./project";
import { AtomicEdit, Record } from "./record";

export type SyncTypes = "local" | "server" | "live";

export interface SyncInfo<TSyncArgs = any> {
    id: string;
    type: SyncTypes;
    args: TSyncArgs;
}

export interface SyncProvider<TSyncArgs = any> {
    meta: SyncInfo<TSyncArgs>;
    listeners: { [key: string]: (edit: AtomicEdit) => void };
    processedEdits: string[];
    addListener: (listener: (edit: AtomicEdit) => void) => string;
    removeListener: (id: string) => void;
    edit: (edit: AtomicEdit) => Promise<void>;
    get: (id: string) => Promise<Records>;
    getAll: () => Promise<Records[]>;
}

export interface SyncRecord extends Record {
    family: "sync";
    type: SyncTypes;
    info: SyncInfo;
}
