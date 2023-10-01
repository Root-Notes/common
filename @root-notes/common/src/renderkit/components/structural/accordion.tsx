import {
    ElementProps,
    Accordion as ElementType,
    UtilityChildRenderer,
} from "@root-notes/root-doc";
import {
    Accordion,
    AccordionControl,
    AccordionItem,
    AccordionPanel,
} from "@mantine/core";
import { GenericIcon } from "../../..";

export function RenderAccordion(props: ElementProps<ElementType>) {
    return (
        <Accordion className="root-doc element structural accordion">
            <AccordionItem value="main">
                <AccordionControl
                    icon={
                        props.icon && (
                            <GenericIcon
                                family={props.icon.family}
                                name={props.icon.name}
                            />
                        )
                    }
                >
                    {(props.title as any) ?? ""}
                </AccordionControl>
                <AccordionPanel>
                    <UtilityChildRenderer items={props.children} />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
