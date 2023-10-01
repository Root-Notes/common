import { ElementProps, Header as ElementType } from "@root-notes/root-doc";
import { Group, Title } from "@mantine/core";
import { GenericIcon } from "src";

export function RenderHeader(props: ElementProps<ElementType>) {
    return (
        <Title
            className="root-doc element decoration header"
            order={props.size ?? 1}
        >
            <Group gap="sm">
                {props.icon && (
                    <GenericIcon
                        family={props.icon.family}
                        name={props.icon.name}
                        size={24}
                    />
                )}
                <span>{(props.content as any) ?? ""}</span>
            </Group>
        </Title>
    );
}
