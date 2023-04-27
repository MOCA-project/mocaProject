import { useState } from "react";
import { useEffect } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

function ChartPizza(props) {

    const [graficoDespesa, setGraficoDespesa] = useState([props.props]);

    useEffect(() => {
        setGraficoDespesa(props.props);
    }, [props]);

    const colors = ["#0D2535", "#5388D8", "#98A8DF", "#00D1FF", "#63B967", "#A921E9"]; // Array de cores\
    const styleBotao = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100px"
    }

    if (graficoDespesa.length === 0) {
        return <div style={styleBotao}>
            <button className="botaoGrafico"
                onClick={() => props.mensagem === "receita" ?
                    window.location.href = '/dashboard/receita' : window.location.href = '/dashboard/despesa'}>
                Adicionar {props.mensagem}
            </button>
        </div>;
    }

    console.log(graficoDespesa);
    return (
        <PieChart width={600} height={280}>
            {graficoDespesa && graficoDespesa.length > 0 ? (
                <Pie
                    dataKey="porcentagem"
                    isAnimationActive={true}
                    data={graficoDespesa}
                    // cx={200}
                    // cy={200}
                    // outerRadius={80}
                    label={({ descricao }) => `${descricao}`}
                >
                    {graficoDespesa.map((item, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index % colors.length]}
                        />
                    ))}
                </Pie>
            ) : null}
            <Tooltip />
            {/* <Legend /> */}
        </PieChart>
    );

}

export default ChartPizza;