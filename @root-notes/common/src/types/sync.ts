import { Records } from "./project";
import { AtomicEdit, Record } from "./record";
import { v4 } from "uuid";

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
    edit: (edit: AtomicEdit, record: Records | null) => Promise<void>;
    get: (id: string) => Promise<Records | null>;
    getAll: () => Promise<Records[]>;
}

export class SyncRecord<TSyncArgs = any> extends Record {
    public readonly family: string = "sync";

    constructor(
        public type: SyncTypes,
        public lastRevision: AtomicEdit | null,
        public id: string,
        public info: SyncInfo<TSyncArgs>
    ) {
        super();
    }

    public applyEdit = (edit: AtomicEdit<TSyncArgs>): SyncRecord<TSyncArgs> => {
        this.lastRevision = edit;
        if (edit.family === "builtin") {
            return this;
        } else {
            this.info.args = edit.data;
            return this;
        }
    };

    public static create<TSyncArgs = any>(
        type: SyncTypes,
        args: TSyncArgs
    ): SyncRecord<TSyncArgs> {
        const _id = v4();
        return new SyncRecord(type, null, _id, { id: _id, type, args });
    }
}
