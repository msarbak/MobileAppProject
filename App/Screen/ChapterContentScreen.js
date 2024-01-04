import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Content from '../Components/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MarkChapterCompleted } from '../Services';
import { CompleteChapterContext } from '../Context/CompleteChapterContext';
import { useUser } from '@clerk/clerk-expo';
import { UserPointsContext } from '../Context/UserPointsContext';

export default function ChapterContentScreen() {
  const param=useRoute().params;
  const navigation=useNavigation();
  const {user}=useUser();
  const {userPoints,setUserPoints}=useContext(UserPointsContext);
  const {isChapterComplete,setIsChapterComplete}=useContext(CompleteChapterContext)
  //Chapter Id
  //RecordId

  useEffect(()=>{

  },[param])
  const onChapterFinish=()=>{
    MarkChapterCompleted(param.chapterId,param.userCourseRecordId,
      user.primaryEmailAddress.emailAddress,).then(resp=>{
      if(resp)
      {
        setIsChapterComplete(true)
      }
    })
  }
  return param.content&&(
    <View>
      <Content content={param.content}
      onChapterFinish={()=>onChapterFinish()
      } />
    </View>
  )
}