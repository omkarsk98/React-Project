import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  NetInfo,
  Vibration,
  PermissionsAndroid,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import DeviceInfo from "react-native-device-info";
import wifi from "react-native-android-wifi";
import BackgroundJob from "react-native-background-job";
import {createStore} from 'redux';
import CounterApp from './src/CounterApp';
import {Provider} from 'react-redux';

const initialState = {
  counter:0
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return{counter:state.counter+1}
    case 'DECREASE_COUNTER':
      return{counter:state.counter-1}
  }
  return state;
}
const store = createStore(reducer)

async function handleConnectivityChange(connectionInfo) {
  console.log("Network Change detected: " + connectionInfo.type);
  if ((await AsyncStorage.getItem("networkStatus")) != connectionInfo.type)
    await AsyncStorage.setItem("networkStatus", connectionInfo.type);
}

let networkStatus = "";
try {
  AsyncStorage.setItem("networkStatus", "");
} catch (error) {
  // Error saving data
}

BackgroundJob.register({
  jobKey: "myJob",
  job: async () => {
    let i = 1;
    await AsyncStorage.setItem("networkStatus", i.toString());
    console.log("Network Status:", await AsyncStorage.getItem("networkStatus"));
    //console.log("Network Status as:", await AsyncStorage.getItem('networkStatus'));
    Vibration.vibrate(100);
    i += 1;
    // NetInfo.getConnectionInfo().then(connectionInfo => {
    //   console.log("Connection Info as:",connectionInfo.type,"and network status as:",networkStatus);
    //   if (connectionInfo.type != networkStatus) {
    //     networkStatus = connectionInfo.type;
    //     Vibration.vibrate(100);
    //   }
    // });
  }
});

export default class App extends React.Component {
  state = {
    brand: DeviceInfo.getBrand(),
    deviceName: DeviceInfo.getDeviceName(),
    manufacturer: DeviceInfo.getManufacturer(),
    hasNotch: DeviceInfo.hasNotch().toString(),
    deviceId: DeviceInfo.getDeviceId(),
    freeDiskStorage: DeviceInfo.getFreeDiskStorage() / (1024 * 1024 * 1024),
    phoneNumber: DeviceInfo.getPhoneNumber(),
    IP: "",
    SSID: "",
    systemVersion: DeviceInfo.getSystemVersion(),
    networkState: "",
    counter:0
    // batteryLevel: DeviceInfo.getBatteryLevel()
  };
  async getPermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Wifi networks",
        message: "We need your permission in order to find wifi networks"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // Alert.alert("Thank you for your permission! :)");
      wifi.getSSID(ssid => {
        this.setState({ SSID: ssid });
      });
    } else {
      Alert.alert("You will not able to retrieve wifi available networks list");
    }
  }
  connectToWifi() {
    wifi.setEnabled(true).then();
    // console.log("wifi enabled");
    // wifi.loadWifiList(
    //   wifiStringList => {
    //     var wifiArray = JSON.parse(wifiStringList);
    //     // Alert.alert(wifiArray);
    //     console.log("Wifi Array:", wifiArray);
    //   },
    //   error => {
    //     Alert.alert(error);
    //   }
    // );
  }
  componentWillMount() {
    DeviceInfo.getIPAddress().then(ip => {
      this.setState({ IP: ip });
    });
    if (this.state.systemVersion >= "8.1.0") this.getPermission();
    wifi.isEnabled(isEnabled => {
      if (!isEnabled) this.connectToWifi();
    });
  }
  componentDidMount() {
    wifi.findAndConnect("Kulkarnis", "password_unknown", found => {
      if (found) {
        console.log("wifi is in range");
      } else {
        console.log("wifi is not in range");
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <Text>System Version:{this.state.systemVersion}</Text>
        <Text>SSID:{this.state.SSID}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            NetInfo.addEventListener(
              "connectionChange",
              handleConnectivityChange
            );
            BackgroundJob.schedule({
              jobKey: "myJob",
              period: 1000,
              exact: true
            });
          }}
        >
          <Text>Schedule</Text>
        </TouchableOpacity>
        <Provider store={store}>
          <CounterApp />
        </Provider>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            BackgroundJob.cancel({ jobKey: "myJob" });
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: { padding: 20, backgroundColor: "#ccc", marginBottom: 10 }
});
