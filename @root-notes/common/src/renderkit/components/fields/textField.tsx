import { TextInput } from "@mantine/core";
import { FieldProps, TextField as ElementType } from "@root-notes/root-doc";
import { GenericIcon } from "../../../";

export function RenderTextField(props: FieldProps<ElementType>) {
    return (
        <TextInput
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}
            label={props.label as any}
            description={props.description as any}
            variant={props.variant}
            withAsterisk={props.required}
            leftSection={
                props.icon && (
                    <GenericIcon
                        family={props.icon.family}
                        name={props.icon.name}
                    />
                )
            }
            placeholder={props.placeholder as any}
        />
    );
}
