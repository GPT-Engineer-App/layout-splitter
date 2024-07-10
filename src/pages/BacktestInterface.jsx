import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Mock data for backtest records
const backtestRecords = [
  { id: 1, name: "Backtest 1", date: "2023-03-01" },
  { id: 2, name: "Backtest 2", date: "2023-03-02" },
  { id: 3, name: "Backtest 3", date: "2023-03-03" },
];

const BacktestInterface = () => {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [selectedBacktest, setSelectedBacktest] = useState(null);

  const toggleLeftPanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
  };

  const handleBacktestSelect = (id) => {
    setSelectedBacktest(id);
  };

  return (
    <div className="flex h-full">
      <Collapsible open={isLeftPanelOpen} onOpenChange={setIsLeftPanelOpen} className="w-64 border-r">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Backtest Records</h2>
          {backtestRecords.map((record) => (
            <Button
              key={record.id}
              variant="ghost"
              className="w-full justify-start mb-2"
              onClick={() => handleBacktestSelect(record.id)}
            >
              {record.name}
            </Button>
          ))}
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="absolute top-1/2 -right-4">
            {isLeftPanelOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
      <CollapsibleContent className="flex-grow p-6">
        {selectedBacktest ? (
          <BacktestDetails backtestId={selectedBacktest} />
        ) : (
          <div className="text-center text-gray-500">Select a backtest to view details</div>
        )}
      </CollapsibleContent>
    </div>
  );
};

const BacktestDetails = ({ backtestId }) => {
  return (
    <Tabs defaultValue="performance" className="w-full">
      <TabsList>
        <TabsTrigger value="performance">Account Performance</TabsTrigger>
        <TabsTrigger value="kline">K-line Chart</TabsTrigger>
        <TabsTrigger value="transactions">Buy/Sell Records</TabsTrigger>
        <TabsTrigger value="orders">Order Records</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="performance">
        <Card>
          <CardHeader>
            <CardTitle>Account Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Performance metrics and charts for Backtest {backtestId}</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="kline">
        <Card>
          <CardHeader>
            <CardTitle>K-line Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <p>K-line chart for Backtest {backtestId}</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="transactions">
        <Card>
          <CardHeader>
            <CardTitle>Buy/Sell Records</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Buy/Sell transactions for Backtest {backtestId}</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="orders">
        <Card>
          <CardHeader>
            <CardTitle>Order Records</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Order records for Backtest {backtestId}</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="logs">
        <Card>
          <CardHeader>
            <CardTitle>Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Logs for Backtest {backtestId}</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default BacktestInterface;