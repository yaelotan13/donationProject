import React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar as SearchBarComponent } from 'react-native-elements';

import { colors } from '../../utils/consts';

const SearchBar = ({ search, setSearch }) => {
  return (
    <SearchBarComponent
      placeholder="חיפוש תחום, אגודה או ארגון"
      onChangeText={(updatedSearch) => {setSearch(updatedSearch)}}
      value={search}
      containerStyle={styles.searchBar}
      inputStyle={styles.inputStyle}
      inputContainerStyle={styles.inputContainerStyle}
      rightIconContainerStyle
      platform="ios"
      cancelButtonTitle={"ביטול"}
      clearIcon={null}
      cancelButtonProps={{
        buttonStyle: { marginTop: 5, marginRight: 5 }
      }}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 45,
    width: '80%',
    borderRadius: 50,
    backgroundColor: colors.lightSecondary,
    borderColor: colors.lightSecondary,
    flexDirection: 'row'
  },
  inputStyle: {
    backgroundColor: colors.lightSecondary,
    borderColor: colors.lightSecondary,
    fontSize: 20,
  },
  inputContainerStyle: {
    height: 35,
    borderRadius: 50,
    backgroundColor: colors.lightSecondary,
    borderColor: colors.lightSecondary,
  }
});

export default SearchBar;
