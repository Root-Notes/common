import { IconRepresentation } from "..";
import { omit, set } from "lodash";

export interface AtomicEdit<TData = any, TSource = any> {
    id: string;
    family: string;
    target: string;
    data: TData;
    source: TSource;
}

export interface Record {
    family: string;
    type: string;
    id: string;
    lastRevision: AtomicEdit | null;
    applyEdit: (edit: AtomicEdit) => any;
    serialize: () => any;
    deserialize: (data: any) => Record;
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

    public deserialize(data: Partial<ManifestRecord>): ManifestRecord {
        return new ManifestRecord(
            data.lastRevision ?? null,
            data.settings ?? {
                id: "",
                meta: { name: "", icon: { family: "md", name: "MdBook" } },
            }
        );
    }
}
