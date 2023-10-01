import {
    ElementProps,
    Grid as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import { SimpleGrid } from "@mantine/core";

export function RenderGrid(props: ElementProps<ElementType>) {
    return (
        <SimpleGrid
            className="root-doc element structural grid"
            spacing={(props.horizontalSpacing as any) ?? "md"}
            verticalSpacing={(props.verticalSpacing as any) ?? "md"}
            cols={(props.columns as any) ?? 2}
        >
            <UtilityChildRenderer items={props.children} />
        </SimpleGrid>
    );
}
