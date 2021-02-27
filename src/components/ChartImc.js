import { Line } from "react-chartjs-2";
import { connect } from 'react-redux';

const ChartImc = ({ trainings }) => {
    const height = JSON.parse(localStorage.getItem('credentials')).height / 100;
    const dataChart = trainings.map(t => (t.weight / (height * height)) );
    console.log(dataChart);
    return (
        <div className="col-lg-6 col-xl-12">
            <div className="card br-0">
                <div className="card-body">
                    <div className="chart-container ov-h">
                        <Line
                            data={{
                                labels: [
                                    "Dia 1",
                                    "Dia 2",
                                    "Dia 3",
                                    "Dia 4",
                                    "Dia 5",
                                    "Dia 6",
                                    "Dia 7",
                                ],
                                datasets: [
                                    {
                                        label: "IMC",
                                        data: dataChart
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );    
}

const mapStateToProps = (state) => ({
    trainings: state.trainings
})

export default connect(mapStateToProps)(ChartImc);