import { useEffect } from 'react'
import ReactECharts from 'echarts-for-react'
import CustomCard from '../atoms/CustomCard'
import CustomLoader from '../atoms/CustomLoader'
import { useSelector } from 'react-redux'
const Graph = ({ graphData, setGraphData, fetchFunction, option, sx }) => {
  useEffect(() => {
    const fetchAnyData = async () => {
      const data = await fetchFunction()
      setGraphData(data)
    }
    fetchAnyData()
  }, [])

  const themeMode = useSelector((state) => state.theme.themeMode)

  return (
    <CustomCard
      variant="outlined"
      sx={{
        padding: 0.5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {graphData.length > 0 ? (
        <ReactECharts
          option={option}
          theme={themeMode}
          notMerge={true}
          lazyUpdate={true}
          style={{ ...sx }}
        />
      ) : (
        <CustomLoader type="circular" message="Loading Graph" />
      )}
    </CustomCard>
  )
}

export default Graph
