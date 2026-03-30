"use client";

import { useDashboard } from "@/features/dashboard/hooks/useDashboard";
import { KPICard } from "@/features/dashboard/components/KPICard";

//Para uso de graficas
import { RevenueChart } from "@/features/dashboard/components/RevenueChart";

//ChatBox IA
import { ChatBox } from "@/features/ai-chat/components/ChatBox";


export default function DashboardPage() {
  const { data, isLoading, isError } = useDashboard();

  if (isLoading) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  if (isError) {
    return <p className="p-6 text-red-500">Error loading data</p>;
  }

  if(!data) return null;

 return (
  <div className="min-h-screen p-8">
    
    {/* HEADER */}
    <div className="mb-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-500 mt-2">
        Overview of your metrics
      </p>
    </div>
   

    {/* KPIs */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <KPICard title="Revenue" value={`$${data.revenue}`} />
      <KPICard title="Users" value={data.users} />
      <KPICard title="Conversions" value={`${data.conversions}%`} />
    </div>

       {/* CHATBOX */}
    <ChatBox />

    {/* CHART */}
    <div className="mt-6">
      <RevenueChart />
    </div>
 


  </div>
);
}