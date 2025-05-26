import { ComponentProps } from "react";


type InputPrefixProps = ComponentProps<"div">

export function Prefix(props: InputPrefixProps) {
    return (
        <div {...props} />
    );
}

type InputControlProps = ComponentProps<"input">

export function Control(props: InputControlProps) {
    return (
        <input
          type="text"
          className="flex-1 border-0 bg-transparent p-0 text-gray-500 placeholder-gray-600 outline-none"
          {...props}
        />
    );
}

export type InputRootProps = ComponentProps<"div">

export function Root(props: InputRootProps) {
    return (
        <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 shadow-sm" 
        {...props}
        />
    );
}
