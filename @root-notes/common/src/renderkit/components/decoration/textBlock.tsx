import { ElementProps, TextBlock as ElementType } from "@root-notes/root-doc";
import { Text } from "@mantine/core";

export function RenderTextBlock(props: ElementProps<ElementType>) {
    return (
        <Text className="root-doc element decoration alert">
            {(props.content as any) ?? ""}
        </Text>
    );
}
