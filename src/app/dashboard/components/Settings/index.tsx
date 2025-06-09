"use client";
import * as Tabs from "@radix-ui/react-tabs";
import TabItem from "./TabItem";
import { useState } from "react";

export default function SettingsTabs() {

    const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="px-5 mt-6 flex w-full items-center gap-4 border-b border-gray-700/40">
        <TabItem
          value="tab1"
          tittle="Código"
          isSelected={currentTab === "tab1"}
        />
        <TabItem
          value="tab2"
          tittle="Cadastros"
          isSelected={currentTab === "tab2"}
        />
        <TabItem
          value="tab3"
          tittle="Planos"
          isSelected={currentTab === "tab3"}
        />

        <TabItem
          value="tab4"
          tittle="Graficos"
          isSelected={currentTab === "tab4"}
        />
        <TabItem
          value="tab5"
          tittle="Pagamentos"
          isSelected={currentTab === "tab5"}
        />
         <TabItem
          value="tab6"
          tittle="Calendario"
          isSelected={currentTab === "tab6"}
        />
        <TabItem
          value="tab7"
          tittle="Notificacoes"
          isSelected={currentTab === "tab7"}
        />
      </Tabs.List>
    </Tabs.Root>
  );
}
