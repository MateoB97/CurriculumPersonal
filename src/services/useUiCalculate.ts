import { useEffect } from "react";

export type ComponentSize = {
    height: string | number;
    width: string | number;
};

export function useCalculateDimensions<T extends Element>(element: T, childElement: T, action: <A extends ResizeObserverEntry, R extends Element>(obsEvent: A, childElement: R) => void): void {
    useEffect(()=>{
        if (element) {
            const REZISE_OBSERVER = new ResizeObserver((event) => {
                action<ResizeObserverEntry, Element>(event[0], childElement);
            });
            REZISE_OBSERVER.observe(element);
            return () => {
                REZISE_OBSERVER.disconnect();
            }
        }
    });
}
