import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

export const Loading = ({ message }) => {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15, color: '#333', fontSize: 16 }}>{message || 'Loading...'}</Text>
      </View>
    )
  }  