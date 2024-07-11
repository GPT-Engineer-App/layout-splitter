import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from 'react-router-dom';

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

const Index = () => {
  const navigate = useNavigate();

  const handleBacktestSelect = (id) => {
    navigate(`/backtest/${id}`);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Backtest Records</h1>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        {backtestRecords.map((record) => (
          <Button
            key={record.id}
            variant="ghost"
            className="w-full justify-start mb-2 text-left"
            onClick={() => handleBacktestSelect(record.id)}
          >
            <div>
              <div className="font-medium">{record.name}</div>
              <div className="text-sm text-muted-foreground">{record.date}</div>
            </div>
          </Button>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Index;