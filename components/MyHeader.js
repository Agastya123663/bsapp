import React from 'react'
import {Header,Icon} from 'react-native-elements';

const AppHeader = props=>{
    return(
        <Header
        centerComponent={{text:props.title,style:{color:'#90a5a9',fontSize:20,fontWeight:'bold'}}}
        backgroundColor='#eaf8fe'/>
    )
}

export default AppHeader;