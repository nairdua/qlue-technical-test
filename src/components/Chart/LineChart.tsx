import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  LineOptions
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface LineChartProps {
  data: ChartData<"line", number[], string>,
  options?: LineOptions,
}

export function LineChart(props: LineChartProps) {
    return (
        <div className="overflow-auto min-w-full border-gray-200 border-2">
            <Line {...props} />
        </div>
    )
}

export default LineChart;