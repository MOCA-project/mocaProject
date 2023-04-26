import { useState } from "react";
import { useEffect } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

function ChartBarra({ saldo: propsSaldo, receita: propsReceita, despesa: propsDespesa }) {

    const [saldo, setSaldo] = useState();
    const [receita, setReceita] = useState();
    const [despesa, setDespesa] = useState();

    useEffect(() => {
        if (propsSaldo && propsReceita && propsDespesa) {
            setSaldo(propsSaldo);
            setReceita(propsReceita);
            setDespesa(propsDespesa);
        }
    }, [propsSaldo, propsReceita, propsDespesa]);

    const data = [
        { name: 'Receita', valor: receita, fill: "#63B967" },
        { name: 'Despesa', valor: despesa, fill: "#E92121" },
    ]

    return (
        <BarChart
            width={200}
            height={250}
            data={data}
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
            }}
        >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="valor" fill="#8884d8"/>
            {/* <Bar dataKey="valor" fill="#82ca9d" /> */}
        </BarChart>
    );
}

export default ChartBarra;