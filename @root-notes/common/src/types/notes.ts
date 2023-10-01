import { IconRepresentation } from "..";
import { AtomicEdit, Record } from "./record";

export interface NoteRecord<TContent = any> extends Record {
    family: "note";
    applyEdit: (edit: AtomicEdit) => Promise<NoteRecord>;
    name: string;
    icon: IconRepresentation;
    parent: null | string;
    tags: string[];
    content: TContent;
}
