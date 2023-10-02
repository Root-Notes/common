import { ReactNode, useMemo } from "react";
import { Records } from "src";
import { SyncInfo, SyncProvider, SyncRecord, SyncTypes } from "src/types/sync";
import { SyncContext } from "./util";

export function SyncContextProvider({
    children,
    records,
    prototypes,
}: {
    children?: ReactNode | ReactNode[];
    records: Records[];
    prototypes: { [key in SyncTypes]: (data: SyncInfo) => SyncProvider };
}) {
    const syncs = useMemo(
        () =>
            (records.filter((r) => r.family === "sync") as SyncRecord[]).map(
                (v) => prototypes[v.type](v.info)
            ),
        [records]
    );
    return (
        <SyncContext.Provider value={syncs}>{children}</SyncContext.Provider>
    );
}
