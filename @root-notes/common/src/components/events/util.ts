import { createContext, useCallback, useContext, useEffect } from "react";

export type EventContextType = {
    addListener: (
        event: string,
        listener: (event: { name: string; [key: string]: any }) => void
    ) => string;
    removeListener: (id: string) => void;
    trigger: (event: string, data?: { [key: string]: any }) => void;
};

export const EventContext = createContext<EventContextType>({
    addListener: () => "",
    removeListener: () => {},
    trigger: () => {},
});

export function useListener(
    event: string,
    handler: (event: { name: string; [key: string]: any }) => void
) {
    const context = useContext(EventContext);
    useEffect(() => {
        const eventId = context.addListener(event, handler);
        return () => context.removeListener(eventId);
    }, []);
}

export function useTrigger(
    event: string
): (data?: { [key: string]: any }) => void {
    const context = useContext(EventContext);
    const triggerFunction = useCallback(
        (data?: { [key: string]: any }) => context.trigger(event, data),
        [event, context.trigger]
    );
    return triggerFunction;
}
