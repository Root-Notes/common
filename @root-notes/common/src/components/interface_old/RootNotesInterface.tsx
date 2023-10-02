import { ProjectInterface } from "@/index";
import { RootNotesContext } from "./util";
import { RouterProvider, UNSAFE_LocationContext } from "react-router-dom";
import { CommonRouter } from "./routes";

export function RootNotesInterface({
    project,
}: {
    project: ProjectInterface | null;
}) {
    return project ? (
        <RootNotesContext.Provider value={{ project }}>
            <UNSAFE_LocationContext.Provider value={null as any}>
                <RouterProvider router={CommonRouter} />
            </UNSAFE_LocationContext.Provider>
        </RootNotesContext.Provider>
    ) : (
        <></>
    );
}
