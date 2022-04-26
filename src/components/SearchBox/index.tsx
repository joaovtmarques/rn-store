import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {colors} from '../../utils';

import Clear from '../../assets/icons/IC/16/clear.svg';
import Search from '../../assets/icons/IC/24/search.svg';
import Filter from '../../assets/icons/IC/24/filter.svg';

type ISearchBox = {
  value: string;
};

export default function SearchBox({value}: ISearchBox) {
  return (
    <View style={styles.searchBox}>
      <TouchableOpacity>
        <Search style={styles.searchIcon} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.labelBlack30}
        style={styles.searchInput}
        value={value}
      />
      <TouchableOpacity>
        <Filter style={styles.searchIcon} />
      </TouchableOpacity>
      {value ? (
        <TouchableOpacity style={styles.xButton}>
          <Clear />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
