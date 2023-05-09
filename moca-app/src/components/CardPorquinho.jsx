import { Tooltip } from "@mui/material";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

function CardPorquinho(props) {

    // Atributos
    const valorAtual = props.opcao.valorAtual;
    const valorFinal = props.opcao.valorFinal;
    const data = [
        { name: "Pago", value: valorAtual, fill: "#F683EB" },
        { name: 'Total', value: valorFinal, fill: "#ccc" },
    ];
    const formatPorcentagem = (value) => `${value.toFixed(2)}%`;


    //  Return do HTML
    return (
        <div className="card-porquinho" onClick={props.onClick}>
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
                            labelLine={false} // Oculta as linhas de conexão dos rótulos com os segmentos
                            label={({
                                cx,
                                cy,
                                midAngle,
                                innerRadius,
                                outerRadius,
                                percent
                            }) => {
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
                        <Tooltip>
                            <span>{data.name}</span>
                        </Tooltip>
                        {/* <Legend /> */}
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default CardPorquinho;