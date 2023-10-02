import { IconRepresentation } from "..";
import { AtomicEdit, Record } from "./record";

export abstract class NoteRecord<TContent = any> extends Record {
    public family = "note";
    public abstract applyEdit: (edit: AtomicEdit) => Promise<NoteRecord>;
    public abstract name: string;
    public abstract icon: IconRepresentation;
    public abstract parent: null | string;
    public abstract tags: string[];
    public abstract content: TContent;
}
