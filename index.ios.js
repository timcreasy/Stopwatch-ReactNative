const React = require('react-native');
const {
  Text,
  View,
  AppRegistry
} = React;

const StopWatch = React.createClass({
  render() {
    return (
      <View>
        <Text>00:00:00</Text>
        <View>
          <Text>Start</Text>
        </View>
        <View>
          <Text>Lap</Text>
        </View>
      </View>
    )
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);