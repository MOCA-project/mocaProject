import { Legend, Pie, PieChart, Tooltip } from "recharts";

function ChartPizza() {

    const data = [
        { name: 'Salário', value: 4, fill: "#800080" },
        { name: 'Rendimento', value: 1, fill: "#5388D8" },
        { name: 'Ajuda Financeira', value: 3, fill: "#0D2535" },
    ];

    return (
        <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                label
            />
            <Tooltip />
            <Legend />
        </PieChart>
    );

}

export default ChartPizza;