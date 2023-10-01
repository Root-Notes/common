import { IconRepresentation } from "..";

export interface AtomicEdit<TData = any, TSource = any> {
    id: string;
    noteId: string;
    time: number;
    source: TSource;
    data: TData;
}

export abstract class NoteRecord<TContentType = any> {
    public static family = "note";
    public static type = null;
    constructor(
        public id: string,
        public lastRevision: AtomicEdit,
        public content: TContentType,
        public name: string,
        public icon: IconRepresentation,
        public tags: string[]
    ) {}

    public abstract applyEdit(edit: AtomicEdit): Promise<TContentType>;
}
