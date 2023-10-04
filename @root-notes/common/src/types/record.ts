import { IconRepresentation } from "..";
import { set } from "lodash";

export type AtomicEdit<TData = any, TSource = any> =
    | {
          id: string;
          family: "specific";
          target: string;
          data: TData;
          source: TSource;
      }
    | ((
          | {
                command: "delete";
                target: string;
            }
          | { command: "create"; data: TData }
          | { command: "replace"; target: string; data: TData }
      ) & { id: string; family: "builtin"; source: TSource });

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
        if (edit.family === "builtin") {
            return this;
        } else {
            set(this.settings, edit.data.setting, edit.data.value);
            this.lastRevision = edit;
            return this;
        }
    }

    public static create(settings: ManifestSettings): ManifestRecord {
        return new ManifestRecord(null, settings);
    }
}
