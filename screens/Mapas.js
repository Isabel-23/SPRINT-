import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker,Polyline} from 'react-native-maps'

const Mapas = () => {

  const [origin, setOrigin] = React.useState({
    latitude:19.702417, 
    longitude:-101.192789,
  });

  const [destination, setDestination] = React.useState({
    latitude:19.698363, 
    longitude:-101.189364,
     
  });


  return (
    <View>
     
      <MapView 
        style={styles.mapaG} 
        initialRegion={{
          latitude:origin.latitude,
          longitude:origin.longitude,
          latitudeDelta:0.09,
          longitudeDelta:0.04,
        }}
      >
        <Marker
          draggable={true}
          coordinate={origin}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />

        <Marker
          draggable={true}
          coordinate={destination}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
        />

      </MapView>

    </View>
  )
}

export default Mapas

const styles = StyleSheet.create({
  mapaG:{
    with:"100%",
    height:"100%"

  }
})
