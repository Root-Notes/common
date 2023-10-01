import {
    ElementProps,
    Row as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import { Group } from "@mantine/core";

export function RenderRow(props: ElementProps<ElementType>) {
    return (
        <Group
            className="root-doc element structural row"
            gap={(props.spacing as any) ?? "md"}
        >
            <UtilityChildRenderer items={props.children} />
        </Group>
    );
}
