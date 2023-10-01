import { RenderKit } from "@root-notes/root-doc";
import { RenderBox } from "./components/structural/box";
import { RenderColumn } from "./components/structural/column";
import { RenderRow } from "./components/structural/row";
import { RenderGrid } from "./components/structural/grid";
import { RenderPaper } from "./components/structural/paper";
import { RenderAccordion } from "./components/structural/accordion";
import { RenderScrollArea } from "./components/structural/scrollArea";

export const RootRenderKit: RenderKit = {
    box: RenderBox,
    column: RenderColumn,
    row: RenderRow,
    grid: RenderGrid,
    paper: RenderPaper,
    accordion: RenderAccordion,
    scrollArea: RenderScrollArea,
};
