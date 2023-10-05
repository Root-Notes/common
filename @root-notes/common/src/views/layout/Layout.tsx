import { AppShell, AppShellHeader, AppShellMain, Group } from "@mantine/core";
//@ts-ignore
import AppLogo from "../../assets/icon.svg?react";
import { MenuDropdown } from "../../components/menu/MenuDropdown";
import { useTranslation } from "react-i18next";
import {
    MdClose,
    MdCreate,
    MdCreateNewFolder,
    MdFolderOpen,
    MdSettings,
} from "react-icons/md";
import { Outlet } from "react-router-dom";
import { useAppCommands } from "../../components/root/util";

export function Layout() {
    const { t } = useTranslation();
    const { projectClose, projectCreate, projectOpen, appSettings } =
        useAppCommands();
    return (
        <AppShell className="common-shell">
            <AppShellHeader className="shell-toolbar" h={48} p={6}>
                <Group gap="md">
                    <AppLogo className="app-icon" />
                    <Group gap="sm" className="app-menu">
                        <MenuDropdown
                            name={t("common.components.menus.file.menuName")}
                            items={[
                                {
                                    name: t("common.components.menus.file.new"),
                                    icon: <MdCreateNewFolder size={20} />,
                                    onActivate: () => projectCreate(),
                                    keyboard: ["Ctrl", "Shift", "N"],
                                },
                                {
                                    name: t(
                                        "common.components.menus.file.open"
                                    ),
                                    icon: <MdFolderOpen size={20} />,
                                    onActivate: () => projectOpen(),
                                    keyboard: ["Ctrl", "O"],
                                },
                                {
                                    name: t(
                                        "common.components.menus.file.preferences"
                                    ),
                                    icon: <MdSettings size={20} />,
                                    onActivate: () => appSettings(),
                                },
                                {
                                    name: t(
                                        "common.components.menus.file.close"
                                    ),
                                    icon: <MdClose size={20} />,
                                    onActivate: () => projectClose(),
                                },
                            ]}
                        />
                        <MenuDropdown
                            name={t("common.components.menus.edit.menuName")}
                            items={[
                                {
                                    name: t(
                                        "common.components.menus.edit.properties"
                                    ),
                                    icon: <MdSettings size={20} />,
                                    onActivate: console.log,
                                },
                                {
                                    name: t(
                                        "common.components.menus.edit.createDocument"
                                    ),
                                    icon: <MdCreate size={20} />,
                                    onActivate: console.log,
                                    keyboard: ["Ctrl", "N"],
                                },
                            ]}
                        />
                    </Group>
                </Group>
            </AppShellHeader>
            <AppShellMain className="shell-content">
                <Outlet />
            </AppShellMain>
        </AppShell>
    );
}
