import {
    ElementProps,
    Box as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import { Box } from "@mantine/core";

export function RenderBox(props: ElementProps<ElementType>) {
    return (
        <Box className="root-doc element structural box">
            <UtilityChildRenderer items={props.children} />
        </Box>
    );
}
