import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useParams } from 'react-router-dom';

// Mock data for backtest records
const backtestRecords = [
  { id: 1, name: "Backtest 1", date: "2023-03-01", strategy: "Moving Average Crossover" },
  { id: 2, name: "Backtest 2", date: "2023-03-02", strategy: "RSI Oscillator" },
  { id: 3, name: "Backtest 3", date: "2023-03-03", strategy: "MACD Divergence" },
  { id: 4, name: "Backtest 4", date: "2023-03-04", strategy: "Bollinger Bands" },
  { id: 5, name: "Backtest 5", date: "2023-03-05", strategy: "Fibonacci Retracement" },
  { id: 6, name: "Backtest 6", date: "2023-03-06", strategy: "Ichimoku Cloud" },
  { id: 7, name: "Backtest 7", date: "2023-03-07", strategy: "Stochastic Oscillator" },
  { id: 8, name: "Backtest 8", date: "2023-03-08", strategy: "Parabolic SAR" },
  { id: 9, name: "Backtest 9", date: "2023-03-09", strategy: "ADX Indicator" },
  { id: 10, name: "Backtest 10", date: "2023-03-10", strategy: "Volume Weighted Average Price" },
];

const BacktestInterface = () => {
  const { id } = useParams();
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [selectedBacktest, setSelectedBacktest] = useState(null);

  useEffect(() => {
    const backtest = backtestRecords.find(record => record.id === parseInt(id));
    setSelectedBacktest(backtest);
  }, [id]);

  const toggleLeftPanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
  };

  return (
    <div className="flex h-full">
      <Collapsible open={isLeftPanelOpen} onOpenChange={setIsLeftPanelOpen} className="w-64 border-r">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Backtest Records</h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {backtestRecords.map((record) => (
              <Button
                key={record.id}
                variant="ghost"
                className="w-full justify-start mb-2 text-left"
                onClick={() => window.location.href = `/backtest/${record.id}`}
              >
                <div>
                  <div className="font-medium">{record.name}</div>
                  <div className="text-sm text-muted-foreground">{record.date}</div>
                </div>
              </Button>
            ))}
          </ScrollArea>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="absolute top-1/2 -right-4">
            {isLeftPanelOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex-grow p-6">
          {selectedBacktest ? (
            <BacktestDetails backtest={selectedBacktest} />
          ) : (
            <div className="text-center text-gray-500">Select a backtest to view details</div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

const BacktestDetails = ({ backtest }) => {
  return (
    <Tabs defaultValue="performance" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="performance">Performance</TabsTrigger>
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
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Backtest Details</h3>
                <p>Name: {backtest.name}</p>
                <p>Date: {backtest.date}</p>
                <p>Strategy: {backtest.strategy}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Performance Metrics</h3>
                <p>Total Return: 15.2%</p>
                <p>Sharpe Ratio: 1.8</p>
                <p>Max Drawdown: 8.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="kline">
        <Card>
          <CardHeader>
            <CardTitle>K-line Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <p>K-line chart for {backtest.name} would be displayed here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="transactions">
        <Card>
          <CardHeader>
            <CardTitle>Buy/Sell Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Asset</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-03-01</TableCell>
                  <TableCell>Buy</TableCell>
                  <TableCell>BTC</TableCell>
                  <TableCell>$50,000</TableCell>
                  <TableCell>0.5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-03-02</TableCell>
                  <TableCell>Sell</TableCell>
                  <TableCell>BTC</TableCell>
                  <TableCell>$52,000</TableCell>
                  <TableCell>0.3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-03-03</TableCell>
                  <TableCell>Buy</TableCell>
                  <TableCell>ETH</TableCell>
                  <TableCell>$3,000</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-03-04</TableCell>
                  <TableCell>Sell</TableCell>
                  <TableCell>ETH</TableCell>
                  <TableCell>$3,200</TableCell>
                  <TableCell>1.5</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="orders">
        <Card>
          <CardHeader>
            <CardTitle>Order Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Asset</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-03-01</TableCell>
                  <TableCell>Limit Buy</TableCell>
                  <TableCell>ETH</TableCell>
                  <TableCell>$3,000</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Filled</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-03-02</TableCell>
                  <TableCell>Stop Loss</TableCell>
                  <TableCell>ETH</TableCell>
                  <TableCell>$2,800</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Triggered</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-03-03</TableCell>
                  <TableCell>Market Buy</TableCell>
                  <TableCell>BTC</TableCell>
                  <TableCell>$51,000</TableCell>
                  <TableCell>0.4</TableCell>
                  <TableCell>Filled</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-03-04</TableCell>
                  <TableCell>Limit Sell</TableCell>
                  <TableCell>BTC</TableCell>
                  <TableCell>$53,000</TableCell>
                  <TableCell>0.2</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="logs">
        <Card>
          <CardHeader>
            <CardTitle>Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <pre>
                {`[2023-03-01 09:00:00] Strategy initialized
[2023-03-01 09:15:00] Buy signal detected for BTC
[2023-03-01 09:15:05] Order placed: Buy 0.5 BTC at $50,000
[2023-03-01 09:15:10] Order filled
[2023-03-02 10:30:00] Sell signal detected for BTC
[2023-03-02 10:30:05] Order placed: Sell 0.3 BTC at $52,000
[2023-03-02 10:30:10] Order filled
[2023-03-03 17:00:00] Backtest completed
[2023-03-04 09:00:00] Strategy initialized
[2023-03-04 09:15:00] Buy signal detected for ETH
[2023-03-04 09:15:05] Order placed: Buy 2 ETH at $3,000
[2023-03-04 09:15:10] Order filled
[2023-03-05 10:30:00] Sell signal detected for ETH
[2023-03-05 10:30:05] Order placed: Sell 1.5 ETH at $3,200
[2023-03-05 10:30:10] Order filled
[2023-03-06 17:00:00] Backtest completed`}
              </pre>
            </ScrollArea>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default BacktestInterface;