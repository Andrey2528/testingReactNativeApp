import {  FlatList, View, RefreshControl, TouchableOpacity  } from 'react-native';
import { Post } from '../components/post';

import axios from 'axios';
import React from 'react';
import { Loading } from '../components/Loading';


export const HomeScreen = ({ navigation }) => {

  const [isLoading, setISLoading ] = React.useState(true);
  const [items, setItems ] = React.useState();

  const fetchPosts = () => {
    setISLoading(true);
    axios
    .get('https://6599bf42652b843dea531e4f.mockapi.io/state')
    .then(({ data }) => {
      setItems(data);
    }).catch( err =>{
      console.log(err);
       alert(err); 
    }).finally(() => {
      setISLoading(false);
    })
  }

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loading/>
  }

  return (
    <View>
      <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
        data={items}
        renderItem={({item}) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}>
            <Post key={item.id} title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
  
}