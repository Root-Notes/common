import {
    ElementProps,
    Paper as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import { Paper } from "@mantine/core";

export function RenderPaper(props: ElementProps<ElementType>) {
    return (
        <Paper
            className="root-doc element structural paper"
            withBorder
            p="md"
            shadow="md"
        >
            <UtilityChildRenderer items={props.children} />
        </Paper>
    );
}
