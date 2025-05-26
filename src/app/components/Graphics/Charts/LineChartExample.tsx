"use client"

import { Card, LineChart, Title } from "@tremor/react"

const chartdata = [
	{
		date: "Jan 23",
		Exemplo1: 2890,
		Exemplo2: 2338,
	},
	{
		date: "Feb 23",
		Exemplo1: 2756,
		Exemplo2: 2103,
	},
	{
		date: "Mar 23",
		Exemplo1: 3322,
		Exemplo2: 2194,
	},
	{
		date: "Apr 23",
		Exemplo1: 3470,
		Exemplo2: 2108,
	},
	{
		date: "May 23",
		Exemplo1: 3475,
		Exemplo2: 1812,
	},
	{
		date: "Jun 23",
		Exemplo1: 3129,
		Exemplo2: 1726,
	},
	{
		date: "Jul 23",
		Exemplo1: 3490,
		Exemplo2: 1982,
	},
	{
		date: "Aug 23",
		Exemplo1: 2903,
		Exemplo2: 2012,
	},
	{
		date: "Sep 23",
		Exemplo1: 2643,
		Exemplo2: 2342,
	},
	{
		date: "Oct 23",
		Exemplo1: 2837,
		Exemplo2: 2473,
	},
	{
		date: "Nov 23",
		Exemplo1: 2954,
		Exemplo2: 3848,
	},
	{
		date: "Dec 23",
		Exemplo1: 3239,
		Exemplo2: 3736,
	},
]

export default function LineChartExample() {
	return (
		<Card className="bg-gray-800 p-6 rounded-lg">
			<Title className="text-gray-100 mb-4">Eventos</Title>
			<div className="text-gray-100 [&_.tremor-tooltip]:!bg-gray-900/100 [&_.tremor-tooltip]:!text-gray-100 [&_.tremor-tooltip]:!shadow-xl [&_.tremor-tooltip]:!border-gray-700 [&_.tremor-tooltip]:!backdrop-blur-none [&_.tremor-tooltip]:!bg-opacity-100">
				<LineChart
					className="h-80 mt-4"
					data={chartdata}
					index="date"
					categories={["Exemplo1", "Exemplo2"]}
					colors={["blue", "emerald"]}
					valueFormatter={(number: number) =>
						`$${Intl.NumberFormat("us").format(number).toString()}`
					}
					onValueChange={(v) => console.log(v)}
					yAxisWidth={70}
					showAnimation={true}
					showLegend={true}
					showGridLines={true}
					showYAxis={true}
					showXAxis={true}
					curveType="monotone"
				/>
			</div>
		</Card>
	)
}