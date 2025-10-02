import { createBrowserRouter, RouteObject } from "react-router";
import { App } from "./App";

const routes: RouteObject[] = [
    {
        element: <App />,
        index: true,
    }
]

export const Router = createBrowserRouter(routes);
