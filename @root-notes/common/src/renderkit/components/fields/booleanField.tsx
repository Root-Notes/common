import { Checkbox, Switch } from "@mantine/core";
import { FieldProps, BooleanField as ElementType } from "@root-notes/root-doc";

export function RenderBooleanField(props: FieldProps<ElementType>) {
    if (props.variant === "check") {
        return (
            <Checkbox
                className="root-doc element field boolean-field checkbox"
                checked={props.value}
                onChange={(event) => props.onChange(event.target.checked)}
                label={(props.label as any) ?? undefined}
                description={(props.description as any) ?? undefined}
                required={props.required}
            />
        );
    } else {
        return (
            <Switch
                className="root-doc element field boolean-field switch"
                checked={props.value}
                onChange={(event) => props.onChange(event.target.checked)}
                label={(props.label as any) ?? undefined}
                description={(props.description as any) ?? undefined}
                required={props.required}
            />
        );
    }
}
