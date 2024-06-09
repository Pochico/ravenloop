import { ArcElement, BarElement, CategoryScale, Chart, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useGetChannelInfo } from '../../data/hooks/useGetChannelInfo';

Chart.register(ArcElement, LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export const Dashboard = ({ currentTab, channelId, channelName }: { currentTab: string, channelId: string, channelName: string }) => {
    const { channelInfo } = useGetChannelInfo({ channel: channelId });

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
                labels: {
                    color: 'rgba(255, 255, 255, .8)',
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'rgba(255, 255, 255, .8)'
                }
            },
            y: {
                ticks: {
                    color: 'rgba(255, 255, 255, .8)'
                }
            }
        }
    };

    const chartData = {
        labels: ['View Count', 'Subscribers', 'Video Count'],
        datasets: [
            {
                label: 'Channel Statistics',
                data: [
                    channelInfo ? parseInt(channelInfo.viewCount) : 0,
                    channelInfo ? parseInt(channelInfo.subscriberCount) : 0,
                    channelInfo ? parseInt(channelInfo.videoCount) : 0
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, .5)', 'rgba(54, 162, 235, .5)', 'rgba(255, 206, 86, .5)'
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className={`charts-container ${currentTab === 'dashboard' ? 'active' : ''}`}>
            <h2 className='charts-container__channel-name'>{channelName}</h2>
            <h3 className='charts-container__title'>Channel Statistics</h3>
            <Bar data={chartData} options={options} />
        </div>
    );
};