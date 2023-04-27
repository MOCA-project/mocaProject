import { useState } from "react";
import { useEffect } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

function ChartBarra(props) {

    const [receita, setReceita] = useState();
    const [despesa, setDespesa] = useState();
    console.log(props)

    useEffect(() => {
        setReceita(props.receita);
        setDespesa(props.despesa);
    }, [props]); // Adicionando props como dependências


    const data = [
        { name: 'Receita', valor: receita, fill: "#63B967" },
        { name: 'Despesa', valor: despesa, fill: "#E92121" },
    ];

    if (props.receita === 0 && props.despesa === 0) {
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h4>Ops, parece que você não possui nada cadastrado!</h4>
                <button className="botaoGrafico" style={{margin: "10px 0"}}
                    onClick={() => window.location.href = '/dashboard/receita'}>
                    Adicionar Receita
                </button>
                <button className="botaoGrafico"
                    onClick={() => window.location.href = '/dashboard/despesa'}>
                    Adicionar Despesa
                </button>
            </div>
        );
    }

    return (
        <BarChart
            width={300}
            height={200}
            data={data}
            margin={{
                top: 5,
                right: 40,
                left: 40,
                bottom: 5,
            }}
        >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="valor" fill="#8884d8" />
            {/* <Bar dataKey="valor" fill="#82ca9d" /> */}
        </BarChart>
    );
}

export default ChartBarra;