import { GenericIcon } from "./components/icons/GenericIcon";
import { IconPicker } from "./components/icons/IconPicker";
import {
  IconRepresentation,
  IconFamilyNames,
  IconFamilies,
  iconTypes,
} from "./components/icons/types";
import "./sass/index.scss";
import { EventProvider } from "./components/events/EventProvider";
import { useTrigger, useListener } from "./components/events/util";
import { ManifestRecord } from "./types/record";
import { SyncRecord } from "./types/sync";
import { RootProvider } from "./components/root/RootProvider";

export type * from "./types/project";
export type * from "./types/notes";
export type * from "./types/record";
export type * from "./types/sync";

export { ManifestRecord };
export { SyncRecord };

export { GenericIcon, IconPicker, IconFamilyNames, iconTypes };
export type { IconFamilies, IconRepresentation };
export { EventProvider, useListener, useTrigger };
export { RootProvider };
export type { ProjectDescriptor } from "./components/root/util";
