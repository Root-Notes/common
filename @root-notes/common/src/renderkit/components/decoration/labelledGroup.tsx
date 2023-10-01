import {
    ElementProps,
    LabelledGroup as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import { Fieldset } from "@mantine/core";

export function RenderLabelledGroup(props: ElementProps<ElementType>) {
    return (
        <Fieldset
            className="root-doc element decoration labelled-group"
            variant={props.variant ?? "default"}
            legend={(props.label as any) ?? ""}
        >
            <UtilityChildRenderer items={props.children} />
        </Fieldset>
    );
}
