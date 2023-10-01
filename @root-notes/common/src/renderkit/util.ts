import { MantineColor } from "@mantine/core";
import { InformativeColors } from "@root-notes/root-doc";
import { useMemo } from "react";

export function useColorMap(color: InformativeColors): MantineColor {
    const data: MantineColor = useMemo(
        () =>
            ({
                default: "primary",
                error: "red",
                warning: "yellow",
                success: "green",
                info: "teal",
            }[color]),
        [color]
    );
    return data;
}
