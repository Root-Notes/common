import { useMemo } from "react";
import { Records } from "../../types/project";
import { ProjectDescriptor, RootContext } from "./util";
import { RouterProvider, UNSAFE_LocationContext } from "react-router-dom";
import { CommonRouter } from "./routes";
import { SyncContextProvider } from "../sync/SyncContextProvider";
import { SyncInfo, SyncProvider, SyncTypes } from "../../types/sync";
import { AppCommands } from "../../types/commands";

export function RootProvider({
    descriptor,
    syncFactories,
    commands,
}: {
    descriptor: ProjectDescriptor | null;
    syncFactories: Partial<{
        [key in Partial<SyncTypes>]: (data: SyncInfo) => SyncProvider;
    }>;
    commands: AppCommands;
}) {
    const records: null | Records[] = useMemo(
        () => (descriptor ? descriptor.entrypoint() : null),
        [descriptor?.id]
    );

    if (records && descriptor) {
        return (
            <RootContext.Provider
                value={{
                    descriptor,
                    commands: commands,
                }}
            >
                <SyncContextProvider
                    records={records}
                    prototypes={syncFactories}
                >
                    <UNSAFE_LocationContext.Provider value={null as any}>
                        <RouterProvider router={CommonRouter} />
                    </UNSAFE_LocationContext.Provider>
                </SyncContextProvider>
            </RootContext.Provider>
        );
    } else {
        return <></>;
    }
}
