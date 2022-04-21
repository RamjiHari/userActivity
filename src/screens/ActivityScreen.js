import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fetchApi } from './api';
import { config } from '../../config';
import { AuthContext } from './Context';
import { colors } from './Colors';
import Timer from './Timer';
import { format_date, getDateFormat } from '../../commonAction';
// import axios from 'axios';
export default function ActivityScreen () {

    const Users = React.useContext(AuthContext);
    const cust_id = Users.userDetail.id
    const userName = Users.userDetail.name
    const userEmail = Users.userDetail.email
    const [actId , setActId] =useState('')
    const [token, setToken] = useState(null)
    const [timerStart, setTimerStart] = useState( false )
    const [userItem,setUserItem] = useState([])
    const groups = userItem.reduce((groups, obj) => {
        const date = obj.cdate;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(obj);
        return groups;
      }, {});
      
      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          activitesDate: groups[date]
        };
      });


    const [activityItems, setActivityItems] = useState( [
        { title: 'Running' }, { title: 'Cooking' }, { title: 'Working' }, { title: 'Reading' }, { title: 'Walking' }, { title: 'Sleeping' },
    ] )


    useEffect(async() => {
        if(cust_id){
        const data = {
            "cust_id": cust_id,
        }
        const response = await fetchApi(config.TEST+'collectActivityRecord',data);
        setUserItem(response.data)
    }
    }, [token,cust_id])
    

    const fetchActivity = async (title,id) => {
      let dateTime = format_date(new Date(),true,4,'YYYY-MM-DD h:mm a')
      let curDate= dateTime.substring(0,11)
      let curTime= dateTime.substring(12,20)
 
        const data={
            "curDate" : curDate,
            "time": curTime,
            "activity": title,
            "cust_id": id,
            "actId" : actId,
            "email" : userEmail
        }
        const response = await fetchApi(config.TEST+'insertActivity',data);
        console.log('responseeeeee', response)
        if(response.data.status == 'success'){
            setActId(response.data.actId)
            if(!response.data.actId){
        setToken(Math.floor(Math.random() * 100) + 1)
            }
        }else{
            alert('error')
        }
      };

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

                    setTimerStart( false )
                    const newArray = [...items];
                    const filterData = newArray.filter( ( e ) => e.expand == true )
                    let curentActivityTitle = filterData[0].title
                    let curentActivityexpand = filterData[0].expand
                    toggleExpand( curentActivityTitle, curentActivityexpand, timerStart, 'trackTime' )
                    fetchActivity(curentActivityTitle,cust_id)
                } else {

                    setTimerStart( true )
                    const newArray = [...items];
                    const filterData = newArray.filter( ( e ) => e.expand == true )
                    let curentActivityTitle = filterData[0].title
                    fetchActivity(curentActivityTitle,cust_id)
                }

            } else {
                alert( 'please choose activity' )
            }

        } else {
            alert( 'please choose activity' )
        }
    }
    // useEffect(() => {
    // }, [timerStart])

    return (
        <>
        <View style={styles.welcomeContainer}>
            <View style={{flex:2}}>
            <Text style={styles.welcomeText}>welcome {userName}</Text>
            </View>
            <TouchableOpacity style={styles.logOutContainer} onPress = {()=>Users.setUserToken(null)}>
            <AntDesign name="logout" size={24} color="black" />
            <Text style={styles.logOutText}>logout</Text>
            </TouchableOpacity>
            </View>
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

                <Text style={styles.headingText}>{timerStart ? "Stop Tracking" : "Start Tracking"}</Text>
                <AntDesign name={timerStart ? "pausecircle" : "play"} size={40} color="black" style={{ alignSelf: 'center' }} onPress={() => { tracktime( activityItems ) }} />
                <View style={{alignContent:'center' ,justifyContent:'center',alignSelf:'center',marginTop:5}}>
           {timerStart && <Timer start={timerStart}/>}
           </View>
            </View>

            <View style={styles.trackRecordSection}>
                <View style={styles.trackRecordHeadingSection}>
                    <Text style={[styles.headingText, { paddingVertical: 5 }]}>Time tracked</Text>
                </View>
                <ScrollView >
                    <View>
                       {groupArrays.map((item,index)=>
                       
                       {
                       
                           return(
                               <>
                             
                              <View style={styles.tractRecordDaysHeading} key={item.date} >
                            <Text>{item.date}</Text>
                        </View>
                        {item.activitesDate.map((activitesDateItem,index)=>{ return(<View style={styles.trackRocordBox} key={activitesDateItem.id}>
                            <Text>{activitesDateItem.start_time}</Text>
                            <Text>-</Text>
                            <Text>{activitesDateItem.end_time}</Text>
                            <Text>-</Text>

                            <Text>{activitesDateItem.activity}</Text>
                        </View>)})}
                               </>
                           )
                       })}
                    </View>

                   
                </ScrollView>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create( {
    activityItemContainer: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 25,
    },
    welcomeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor:'orange'
    },
    welcomeText: {
        textAlign:'center',
        fontSize:18,
        marginLeft:60,
        color:colors.defaultWhite
    },
    logOutContainer: {
        flex:0.5,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    logOutText: {
        textAlign:'center',
        fontSize:12,
        marginTop:3,
        color:colors.defaultWhite
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
        // marginTop: 50,
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