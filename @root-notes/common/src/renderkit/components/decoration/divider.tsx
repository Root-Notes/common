import { ElementProps, Divider as ElementType } from "@root-notes/root-doc";
import { Divider } from "@mantine/core";
import { GenericIcon } from "src";

export function RenderDivider(props: ElementProps<ElementType>) {
    return (
        <Divider
            className="root-doc element decoration divider"
            variant={props.variant ?? "solid"}
            labelPosition={props.labelPosition}
            label={
                props.labelText || props.labelIcon ? (
                    <>
                        {props.labelIcon && (
                            <GenericIcon
                                family={props.labelIcon.family}
                                name={props.labelIcon.name}
                                size={12}
                            />
                        )}
                        {props.labelText ?? ""}
                    </>
                ) : undefined
            }
        />
    );
}
