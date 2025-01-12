import { useState } from 'react'
import CustomTextField from '../atoms/CustomTextField'
import { Divider, List, ListItem, ListItemText, Grid as MUIGrid } from '@mui/material'
import { fetchCryptoData } from '../../services/api'
import Graph from '../molecules/Graph'
import CustomText from '../atoms/CustomText'
import CustomButton from '../atoms/CustomButton'
import CustomCheckbox from '../atoms/CustomCheckbox'
import CustomCard from '../atoms/CustomCard'

const Dashboard = () => {
  const [graphData, setGraphData] = useState([])

  const option = {
    title: {
      text: 'Top Cryptocurrencies by Market Cap'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Market Cap', 'Current Price']
    },
    xAxis: {
      type: 'category',
      data: graphData.length > 0 ? graphData.map((coin) => coin.name) : []
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Market Cap',
        type: 'bar',
        data: graphData.length > 0 ? graphData.map((coin) => coin.market_cap) : []
      },
      {
        name: 'Current Price',
        type: 'line',
        data: graphData.length > 0 ? graphData.map((coin) => coin.current_price) : []
      }
    ]
  }

  return (
    <>
      <MUIGrid container spacing={2}>
        <MUIGrid item xs={12}>
          <Graph
            graphData={graphData}
            setGraphData={setGraphData}
            fetchFunction={fetchCryptoData}
            option={option}
            sx={{ width: 1000, height: 500 }}
          />
        </MUIGrid>
      </MUIGrid>
    </>
  )
}

export default Dashboard
