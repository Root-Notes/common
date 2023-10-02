import { IconRepresentation } from "..";
import { omit, set } from "lodash";

export interface AtomicEdit<TData = any, TSource = any> {
    id: string;
    family: string;
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
    public abstract serialize: () => any;
    public static deserialize: (data: any) => Record;
}

export type ManifestSettings = {
    id: string;
    meta: {
        name: string;
        icon: IconRepresentation;
    };
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

    public serialize(): Partial<ManifestRecord> {
        return omit(this, ["applyEdit", "serialize", "deserialize"]);
    }

    public static deserialize(data: Partial<ManifestRecord>): ManifestRecord {
        return new ManifestRecord(
            data.lastRevision ?? null,
            data.settings ?? {
                id: "",
                meta: { name: "", icon: { family: "md", name: "MdBook" } },
            }
        );
    }
}
