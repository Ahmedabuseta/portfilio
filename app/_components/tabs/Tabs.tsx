import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tabos, { ITabs } from "./tabs-data";


export default function MakeTabs() {
  const tabs = Tabos
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full flex justify-center items-center flex-col bg">
      <TabsList className="mx-auto w-3/4 gap-3 bg-dark">
        {tabs.map((tab,index)=><TabsTrigger key={index} value={tab.value}>{tab.value}</TabsTrigger>)}
      </TabsList>
      {tabs.map((tab,index)=>(
        <TabsContent  key={index} value={tab.value}>
        {tab.content}
      </TabsContent>
      ))}
      
    </Tabs>
  );
}
