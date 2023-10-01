import { RenderKit } from "@root-notes/root-doc";
import { RenderBox } from "./components/structural/box";
import { RenderColumn } from "./components/structural/column";
import { RenderRow } from "./components/structural/row";
import { RenderGrid } from "./components/structural/grid";
import { RenderPaper } from "./components/structural/paper";
import { RenderAccordion } from "./components/structural/accordion";
import { RenderScrollArea } from "./components/structural/scrollArea";
import { RenderHeader } from "./components/decoration/header";
import { RenderDivider } from "./components/decoration/divider";
import { RenderAlert } from "./components/decoration/alert";
import { RenderTextBlock } from "./components/decoration/textBlock";
import { RenderLabelledGroup } from "./components/decoration/labelledGroup";
import { RenderBooleanField } from "./components/fields/booleanField";
import { RenderTextField } from "./components/fields/textField";
import { RenderNumberField } from "./components/fields/numberField";

export const RootRenderKit: RenderKit = {
    box: RenderBox,
    column: RenderColumn,
    row: RenderRow,
    grid: RenderGrid,
    paper: RenderPaper,
    accordion: RenderAccordion,
    scrollArea: RenderScrollArea,
    header: RenderHeader,
    divider: RenderDivider,
    alert: RenderAlert,
    text: RenderTextBlock,
    labelledGroup: RenderLabelledGroup,
    booleanField: RenderBooleanField,
    textField: RenderTextField,
    numberField: RenderNumberField,
};
