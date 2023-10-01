import {
    ElementProps,
    Column as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import { Stack } from "@mantine/core";

export function RenderColumn(props: ElementProps<ElementType>) {
    return (
        <Stack
            className="root-doc element structural column"
            gap={(props.spacing as any) ?? "md"}
        >
            <UtilityChildRenderer items={props.children} />
        </Stack>
    );
}
