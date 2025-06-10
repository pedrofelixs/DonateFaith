'use client'

import * as Tabs from "@radix-ui/react-tabs";

export interface TabItemprops {
  value: string;
  tittle: string;
  isSelected?: boolean;
}

export default function TabItem({ value, tittle, isSelected = false }: TabItemprops) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-gray-50 hover:text-blue-400 data-[state=active]:text-blue-500"
    >
      <span>{tittle}</span>
      {isSelected && (
        <div className="absolute bottom-px left-0 right-0 h-0.5 bg-blue-500" />
      )}
    </Tabs.Trigger>
  );
}
