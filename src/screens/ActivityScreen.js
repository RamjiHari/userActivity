import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import axios from 'axios';
export default function ActivityScreen () {
    const [activityItems, setActivityItems] = useState( [
        { title: 'Running' }, { title: 'Cooking' }, { title: 'Working' }, { title: 'Reading' }, { title: 'Walking' }, { title: 'Sleeping' },
    ] )
    const [timerStart, setTimerStart] = useState( false )

    // useEffect(() => {
    //     const source = axios.CancelToken.source();
    //     const url = `${baseUrl}/api/users/${userId}`;
    //     const fetchUsers = async () => {
    //       try {
    //         const response = await axios.get(url, { cancelToken: source.token });
    //         console.log(response.data);
    //       } catch (error) {
    //         if(axios.isCancel(error)){
    //           console.log('Data fetching cancelled');
    //         }else{
    //          // Handle error
    //         }
    //       }
    //     };
    //     fetchUsers();
    //     return () => source.cancel("Data fetching cancelled");
    //   }, [userId]);

    const toggleExpand = ( title, expand, timerStart, key ) => {
        if ( timerStart && key == 'toggle' ) {
            alert( 'please stop timer then select another' )
        } else {
            let newArr = [...activityItems];
            activityItems.map( ( data, index ) => {
                newArr[index].expand = false;
            } );
            setActivityItems( newArr );
            const index = activityItems.findIndex( data => data.title == title );
            const newArray = [...activityItems];
            newArray[index].expand = !expand
            setActivityItems( newArray )
        }
    }


    const tracktime = ( items ) => {
        let findIfAnyExpand = items.some( o => 'expand' in o )
        if ( findIfAnyExpand ) {
            let findTrueExpand = items.some( function ( o ) { return o["expand"] === true; } )
            if ( findTrueExpand ) {

                if ( timerStart ) {
                    alert( 'timer is stop' )
                    setTimerStart( false )
                    const newArray = [...items];
                    const filterData = newArray.filter( ( e ) => e.expand == true )
                    let curentActivityTitle = filterData[0].title
                    let curentActivityexpand = filterData[0].expand
                    toggleExpand( curentActivityTitle, curentActivityexpand, timerStart, 'trackTime' )
                } else {
                    alert( 'timer is running' )
                    setTimerStart( true )
                }

            } else {
                alert( 'please choose activity' )
            }

        } else {
            alert( 'please choose activity' )
        }
    }
    return (
        <View style={styles.activityItemContainer} >
            < >
                <Text style={[styles.headingText, { fontSize: 18 }]}>Select what you are doing</Text>
                <View style={styles.listConatiner} >
                    {
                        activityItems.map( item => {
                            return (
                                <View key={item.title}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        style={[styles.button, { backgroundColor: item.expand ? 'yellow' : 'orange' }]}
                                        onPress={() => toggleExpand( item.title, item.expand, timerStart, 'toggle' )}
                                    >
                                        {item.title == 'Running' ?
                                            <FontAwesome5 name="running" size={20} color="black" /> : item.title == 'Cooking' ?
                                                <MaterialCommunityIcons name="chef-hat" size={20} color="black" /> : item.title == 'Working' ?
                                                    <MaterialIcons name="work" size={20} color="black" /> : item.title == 'Reading' ?
                                                        <FontAwesome5 name="book-reader" size={20} color="black" /> : item.title == 'Walking' ?
                                                            <FontAwesome5 name="walking" size={20} color="black" /> : item.title == 'Sleeping' &&
                                                            <MaterialCommunityIcons name="sleep" size={20} color="black" />}
                                        <Text style={styles.text} >{item.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        } )
                    }
                </View>
            </>
            <View style={styles.timerSection}>
                <Text style={styles.headingText}>Start tracking</Text>
                <AntDesign name={timerStart ? "pausecircle" : "play"} size={40} color="black" style={{ alignSelf: 'center' }} onPress={() => { tracktime( activityItems ) }} />
            </View>

            <View style={styles.trackRecordSection}>
                <View style={styles.trackRecordHeadingSection}>
                    <Text style={[styles.headingText, { paddingVertical: 5 }]}>Time tracked</Text>
                </View>
                <ScrollView >
                    <View>
                        <View style={styles.tractRecordDaysHeading}>
                            <Text>Mar 31 2022</Text>
                        </View>
                        <View style={styles.trackRocordBox}>
                            <Text>1.30pm</Text>
                            <Text>-</Text>
                            <Text>1.30pm</Text>
                            <Text>-</Text>

                            <Text>Walking</Text>
                        </View>
                        <View style={styles.trackRocordBox}>
                            <Text>1.30pm</Text>
                            <Text>-</Text>
                            <Text>1.30pm</Text>
                            <Text>-</Text>
                            <Text>Reading</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.tractRecordDaysHeading}>
                            <Text>Mar 30 2022</Text>
                        </View>
                        <View style={styles.trackRocordBox}>
                            <Text>1.30pm</Text>
                            <Text>-</Text>
                            <Text>1.30pm</Text>
                            <Text>-</Text>
                            <Text>Sleeping</Text>
                        </View>
                        <View style={styles.trackRocordBox}>
                            <Text>1.30pm</Text>
                            <Text>-</Text>
                            <Text>1.30pm</Text>
                            <Text>-</Text>
                            <Text>Walking</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create( {
    activityItemContainer: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 25,
    },
    headingText: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 15,
        paddingBottom: 10
    },
    listConatiner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        // borderColor: 'rgba(128, 128, 128, 0.479)',
        // borderWidth: 2,
        borderRadius: 5,
        margin: '5%',
        backgroundColor: 'orange',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        paddingHorizontal: 10,
        fontSize: 13
    },
    timerSection: {
        marginTop: 50,
        paddingBottom: 20,
        marginHorizontal: 20,
    },
    trackRecordSection: {
        flex: 1.5,
        paddingBottom: 20,
        // paddingTop:5,
        marginHorizontal: 20,
        backgroundColor: '#ffffff',
        // borderWidth:1,
        borderRadius: 10,
        borderColor: 'gray',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    trackRecordHeadingSection: {
        backgroundColor: '#1FE0A2',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
        // borderBottomWidth: 2,
        // borderBottomColor: 'green'
    },
    tractRecordDaysHeading: {
        paddingLeft: 10
    },
    trackRocordBox: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        // borderColor: 'rgba(128, 128, 128, 0.479)',
        // borderWidth: 2,
        borderRadius: 10,
        margin: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
} );