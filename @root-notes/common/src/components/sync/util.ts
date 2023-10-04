import { createContext, useContext } from "react";
import { SyncProvider } from "src/types/sync";

export const SyncContext = createContext<SyncProvider[]>([]);

export function useSyncProvider<T = any>(id: string): SyncProvider<T> | null {
    const syncContext = useContext(SyncContext);
    return syncContext.find((v) => v.meta.id === id) ?? null;
}
