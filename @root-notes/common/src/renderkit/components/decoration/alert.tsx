import {
    ElementProps,
    Alert as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import { Alert } from "@mantine/core";
import { useColorMap } from "../../util";
import { GenericIcon } from "../../../";

export function RenderAlert(props: ElementProps<ElementType>) {
    const color = useColorMap(props.color ?? "default");
    return (
        <Alert
            color={color}
            className="root-doc element decoration alert"
            title={(props.title as any) ?? ""}
            icon={
                props.icon && (
                    <GenericIcon
                        name={props.icon.name}
                        family={props.icon.family}
                    />
                )
            }
        >
            <UtilityChildRenderer items={props.children} />
        </Alert>
    );
}
