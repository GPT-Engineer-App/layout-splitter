import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import sampleChart from '../../public/images/sample-chart.png';

const Index = () => {
  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Financial Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This dashboard provides insights into financial data and backtesting results. Use the tabs below to navigate through different sections.</p>
        </CardContent>
      </Card>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Here you can find a summary of the financial data and key metrics.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="charts">
          <Card>
            <CardHeader>
              <CardTitle>Sample Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={sampleChart} alt="Sample Chart" className="w-full h-auto" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                <pre>
                  {`[2023-03-01] Financial report Q1
[2023-06-01] Financial report Q2
[2023-09-01] Financial report Q3
[2023-12-01] Financial report Q4`}
                </pre>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;