
import { useState } from "react";
import { useEffect } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import api from "../api";

function CardPorquinho(props) {
    const [porcentagem, setPorcentagem] = useState(0);
    const idUsuario = localStorage.getItem("id");

    useEffect(() => {
        const fetchPorcentagem = async () => {
            try {
                const response = await api.get(`porquinhos/mostrarPorcentagem/${idUsuario}/${props.opcao.idPorquinho}`);
                setPorcentagem(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPorcentagem();
    }, [idUsuario, props.opcao.idPorquinho]);

    const data = [
        { name: "Pago", value: porcentagem, fill: "#F683EB" },
        { name: 'Restante', value: 100 - porcentagem, fill: "#ccc" },
    ];

    const formatPorcentagem = (value) => `${value.toFixed(0)}%`;

    return (
        <div className="card-porquinho" onClick={props.onClick} style={{cursor: "pointer"}}>
            <div className="icone">
                <h2>{props.opcao.nome}</h2>
                <br />
                <span className="material-symbols-outlined">flight_takeoff</span>
            </div>
            <div className="linha"></div>
            <div className="grafico">
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="value"
                            labelLine={false}
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                                const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        fill="#000"
                                        textAnchor={x > cx ? 'start' : 'end'}
                                        dominantBaseline="central"
                                    >
                                        {`${formatPorcentagem(percent * 100)}`}
                                    </text>
                                );
                            }}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default CardPorquinho;