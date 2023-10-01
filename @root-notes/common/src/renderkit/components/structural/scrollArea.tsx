import {
    ElementProps,
    ScrollArea as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import { ScrollArea } from "@mantine/core";

export function RenderScrollArea(props: ElementProps<ElementType>) {
    return (
        <ScrollArea
            className="root-doc element structural scroll-area"
            type="scroll"
            mah={props.maxHeight}
        >
            <UtilityChildRenderer items={props.children} />
        </ScrollArea>
    );
}
