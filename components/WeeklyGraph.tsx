import { View } from 'react-native'
import { BarChart } from 'react-native-gifted-charts';

const WeeklyGraph = ({ data, color }: { data: any, color: any }) => {
    return (
        <>
          <View className='px-10'>
            <BarChart
                    barWidth={26}
                    barBorderRadius={2}
                    frontColor={color}
                    data={data}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    hideRules={true}
                    hideYAxisText={true}
                />
          </View>
        </>
    )
}

export default WeeklyGraph