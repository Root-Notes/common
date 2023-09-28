import { ReactNode, useState } from "react";
import { EventContext } from "./util";
import { v4 } from "uuid";

export function EventProvider({
    children,
}: {
    children?: ReactNode | ReactNode[];
}) {
    const [handlers, setHandlers] = useState<
        {
            id: string;
            event: string;
            listener: (event: { name: string; [key: string]: any }) => void;
        }[]
    >([]);

    return (
        <EventContext.Provider
            value={{
                addListener(event, listener) {
                    const id = v4();
                    setHandlers([...handlers, { id, event, listener }]);
                    return id;
                },
                removeListener(id) {
                    setHandlers(
                        handlers.filter((handler) => handler.id !== id)
                    );
                },
                trigger(event, data) {
                    console.log(handlers, event);
                    handlers.forEach(
                        (handler) =>
                            handler.event === event &&
                            handler.listener({ name: event, ...(data ?? {}) })
                    );
                },
            }}
        >
            {children}
        </EventContext.Provider>
    );
}
