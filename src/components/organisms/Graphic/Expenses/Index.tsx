import dynamic from "next/dynamic";
import style from "./styles.module.scss";
import AtomsText from "@/components/atoms/Text/Index";
import { useFetchExpenses } from "@/store/useFetchExpenses";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Registrando os elementos para gráfico de linha
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Importando dinamicamente o componente Line
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Gráfico de gastos em linhas" },
  },
};

const OrganismsGraphicExpenses = () => {
  const { data, loading, error } = useFetchExpenses();

  const chartData = {
    labels: data?.expenses.map((item: any) => item.month) || [],
    datasets: [
      {
        label: "Gasto",
        data: data?.expenses.map((item: any) => item.expenses_current) || [],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <section
      className={`${style.organismsGraphic} ${
        loading || error ? "loading" : ""
      }`}
    >
      {loading && <div className="anim-loading"></div>}
      {error && <p>Erro ao buscar dados: {error}</p>}
      {!loading && !error && (
        <>
          <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
            Home
          </AtomsText>
          <div style={{ width: "100%", height: "600px" }}>
            <Line data={chartData} options={options} />
          </div>
        </>
      )}
    </section>
  );
};

export default OrganismsGraphicExpenses;
