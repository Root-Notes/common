import { IconRepresentation } from "..";
import { set } from "lodash";
import { SyncInfo } from "./sync";

export interface AtomicEdit<TData = any, TSource = any> {
    id: string;
    family: string | "_replace";
    target: string;
    data: TData;
    source: TSource;
}

export abstract class Record {
    public abstract family: string;
    public abstract type: string;
    public abstract id: string;
    public abstract lastRevision: AtomicEdit | null;
    public abstract applyEdit: (edit: AtomicEdit) => any;
}

export type ManifestSettings = {
    id: string;
    meta: {
        name: string;
        icon: IconRepresentation;
    };
    sync: SyncInfo[];
};

export class ManifestRecord implements Record {
    public readonly family = "manifest";
    public readonly type = "manifest";
    public readonly id = "manifest";
    constructor(
        public lastRevision: AtomicEdit | null,
        public settings: ManifestSettings
    ) {}

    public applyEdit(
        edit: AtomicEdit<{ setting: string; value: any }>
    ): ManifestRecord {
        set(this.settings, edit.data.setting, edit.data.value);
        this.lastRevision = edit;
        return this;
    }
}
