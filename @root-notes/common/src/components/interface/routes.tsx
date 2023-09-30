import { Layout } from "../../views/layout/Layout";
import { createMemoryRouter } from "react-router-dom";

export const CommonRouter = createMemoryRouter([
    {
        path: "/",
        element: <Layout />,
        children: [],
    },
]);
