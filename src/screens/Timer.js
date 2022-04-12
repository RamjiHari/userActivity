import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';



export default function Timer(props) {

    const [time, setTime] = useState(0);
    const [start, setStart] = useState(props.start);
    const sec = Math.floor((time / 1000) % 60);
    const min = Math.floor((time / 60000) % 60);

    useEffect(() => {

      let interval = null;
      if (start) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1000);
        }, 1000);

      } else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }, []);

    return (
      <View>
        <Text>
          {min.toString().length == 1 ? '0' + min : min}:{''}
          {sec.toString().length == 1 ? '0' + sec : sec}{' '}
        </Text>
      </View>
    );
  }