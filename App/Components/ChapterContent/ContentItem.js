import { View, useWindowDimensions } from 'react-native'
import React from 'react'
import RenderHtml from 'react-native-render-html';
import Colors from '../../Utils/Colors';

export default function ContentItem({description,output}) {
    const { width } = useWindowDimensions();
    const descriptionSource={
        html:description
    }
    const outputSource={
      html:output
    }

  return description&&(
    <View>
      <RenderHtml
      contentWidth={width}
      source={descriptionSource}
      tagsStyles={tagsStyles}
    />
    </View>
  )
}

const tagsStyles = {
    body: {
      fontFamily : 'verdana',
      fontSize:17,
      color:'#5B5B5B',
      lineHeight:25
    },
    code:{
        backgroundColor:Colors.BLACK,
        color:Colors.WHITE,
        padding:20,
        borderRadius:15,
        
    }
  
  };
