"use client";

import * as Tabs from "@radix-ui/react-tabs";

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative min-w-fit flex-shrink-0 px-2 pb-4 text-sm font-medium text-gray-50 hover:text-blue-400 data-[state=active]:text-blue-500"
    >
      <span>{title}</span>
      {isSelected && <div className="absolute bottom-px left-0 right-0 h-0.5 bg-blue-500" />}
    </Tabs.Trigger>
  );
}
