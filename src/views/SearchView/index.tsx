import MainScreen from "../../components/main/MainScreen"
import {useState} from 'react'
import { TextInput,StyleSheet } from 'react-native'

const data:any = []

const SearchView = (): JSX.Element => {
      const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query:any) => {
    const filteredResults = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(filteredResults);
  };
    return (
        <MainScreen>
             <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text) => {
          setSearchQuery(text);
          handleSearch(text);
        }}
        value={searchQuery}
      />
        </MainScreen>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  resultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
});

export default SearchView;