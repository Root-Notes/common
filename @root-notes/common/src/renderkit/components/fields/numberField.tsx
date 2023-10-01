import { NumberInput } from "@mantine/core";
import { FieldProps, NumberField as ElementType } from "@root-notes/root-doc";
import { GenericIcon } from "../../../";

export function RenderNumberField(props: FieldProps<ElementType>) {
    return (
        <NumberInput
            value={props.value}
            onChange={(value) => props.onChange(value)}
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
            allowDecimal={props.decimals ?? true}
            allowNegative={props.negatives ?? true}
            decimalScale={props.decimalPrecision}
            hideControls={!(props.controls ?? true)}
            prefix={props.prefix as any}
            suffix={props.suffix as any}
            min={props.min as any}
            max={props.max as any}
        />
    );
}
