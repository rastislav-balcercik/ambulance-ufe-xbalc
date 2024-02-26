/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface XbalcAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface XbalcAmbulanceWlEditor {
        "entryId": string;
    }
    interface XbalcAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface XbalcAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXbalcAmbulanceWlEditorElement;
}
export interface XbalcAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXbalcAmbulanceWlListElement;
}
declare global {
    interface HTMLXbalcAmbulanceWlAppElement extends Components.XbalcAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLXbalcAmbulanceWlAppElement: {
        prototype: HTMLXbalcAmbulanceWlAppElement;
        new (): HTMLXbalcAmbulanceWlAppElement;
    };
    interface HTMLXbalcAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLXbalcAmbulanceWlEditorElement extends Components.XbalcAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXbalcAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLXbalcAmbulanceWlEditorElement, ev: XbalcAmbulanceWlEditorCustomEvent<HTMLXbalcAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXbalcAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLXbalcAmbulanceWlEditorElement, ev: XbalcAmbulanceWlEditorCustomEvent<HTMLXbalcAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXbalcAmbulanceWlEditorElement: {
        prototype: HTMLXbalcAmbulanceWlEditorElement;
        new (): HTMLXbalcAmbulanceWlEditorElement;
    };
    interface HTMLXbalcAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLXbalcAmbulanceWlListElement extends Components.XbalcAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXbalcAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLXbalcAmbulanceWlListElement, ev: XbalcAmbulanceWlListCustomEvent<HTMLXbalcAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXbalcAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLXbalcAmbulanceWlListElement, ev: XbalcAmbulanceWlListCustomEvent<HTMLXbalcAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXbalcAmbulanceWlListElement: {
        prototype: HTMLXbalcAmbulanceWlListElement;
        new (): HTMLXbalcAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "xbalc-ambulance-wl-app": HTMLXbalcAmbulanceWlAppElement;
        "xbalc-ambulance-wl-editor": HTMLXbalcAmbulanceWlEditorElement;
        "xbalc-ambulance-wl-list": HTMLXbalcAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface XbalcAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface XbalcAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: XbalcAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface XbalcAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: XbalcAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "xbalc-ambulance-wl-app": XbalcAmbulanceWlApp;
        "xbalc-ambulance-wl-editor": XbalcAmbulanceWlEditor;
        "xbalc-ambulance-wl-list": XbalcAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "xbalc-ambulance-wl-app": LocalJSX.XbalcAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLXbalcAmbulanceWlAppElement>;
            "xbalc-ambulance-wl-editor": LocalJSX.XbalcAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLXbalcAmbulanceWlEditorElement>;
            "xbalc-ambulance-wl-list": LocalJSX.XbalcAmbulanceWlList & JSXBase.HTMLAttributes<HTMLXbalcAmbulanceWlListElement>;
        }
    }
}
