import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styles from './headerstyle'
const Header = props => {
  return (
    <View style={styles.hader}>
      <Text style={styles.haderTitle}>{props.title}</Text>
    </View>
  )
}

export default Header
