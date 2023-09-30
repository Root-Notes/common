import { Button, Group, Kbd, Menu } from "@mantine/core";
import { HotkeyItem, useHotkeys } from "@mantine/hooks";
import { isString } from "lodash";
import { ReactNode, useMemo } from "react";
import { MdArrowDropDown } from "react-icons/md";

type MenuDropdownItem = {
    name: string;
    icon: ReactNode;
    onActivate: () => void;
    keyboard?: string[];
};

type MenuDropdownProps = {
    name: string;
    items: (MenuDropdownItem | "divider" | string)[];
};

export function MenuDropdown({ name, items }: MenuDropdownProps) {
    const kbs: HotkeyItem[] = useMemo(
        () =>
            items
                .filter((i) => !isString(i) && i.keyboard)
                .map((i) => [
                    ((i as MenuDropdownItem).keyboard as string[]).join("+"),
                    (i as MenuDropdownItem).onActivate,
                ]),
        [items]
    );
    useHotkeys(kbs);

    return (
        <Menu shadow="md" position="bottom-start" offset={10} withArrow>
            <Menu.Target>
                <Button
                    className="menu-button"
                    variant="subtle"
                    rightSection={<MdArrowDropDown size={18} />}
                >
                    {name}
                </Button>
            </Menu.Target>
            <Menu.Dropdown>
                {items.map((item, k) => {
                    if (isString(item)) {
                        if (item === "divider") {
                            return <Menu.Divider key={k} />;
                        }
                        return <Menu.Label key={k}>{item}</Menu.Label>;
                    } else {
                        return (
                            <Menu.Item
                                leftSection={item.icon}
                                onClick={() => item.onActivate()}
                                key={k}
                            >
                                <Group gap="lg" justify="space-between">
                                    {item.name}
                                    {item.keyboard && (
                                        <Group gap="sm">
                                            {...item.keyboard.flatMap(
                                                (v, i) => [
                                                    i > 0 ? "+" : null,
                                                    <Kbd size="xs" key={v}>
                                                        {v}
                                                    </Kbd>,
                                                ]
                                            )}
                                        </Group>
                                    )}
                                </Group>
                            </Menu.Item>
                        );
                    }
                })}
            </Menu.Dropdown>
        </Menu>
    );
}
