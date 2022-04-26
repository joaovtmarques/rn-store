import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

import SearchBox from '../../components/SearchBox';

import Camera from '../../assets/icons/IC/24/camera.svg';

export default function Search() {
  const [value, setValue] = useState('');

  const ResearchedArr = [
    'jordan 1',
    'yeezy',
    'jodan',
    'off white',
    'dior',
    'travis scott',
    'supreme',
    'air force1',
    'jordan 4',
    'adidas',
  ];

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <SearchBox value={value} />
          {!value ? (
            <TouchableOpacity style={styles.camBox}>
              <Camera />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setValue('')}
              style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.researchedContainer}>
          {ResearchedArr.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => setValue(ResearchedArr[index])}>
                <Text style={styles.researchedText}>
                  {ResearchedArr[index]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
