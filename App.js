import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from './components/header'
export default function App () {
  return (
    <View style={styles.screen}>
      <Header title='Welcome App' />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
