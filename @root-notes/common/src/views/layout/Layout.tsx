import { AppShell, AppShellMain } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <AppShell className="common-shell">
            <AppShellMain className="shell-content">
                <Outlet />
            </AppShellMain>
        </AppShell>
    );
}
