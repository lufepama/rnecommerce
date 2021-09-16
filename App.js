import React, { useEffect, useState } from 'react';
import { UserCredentialsProvider } from './Context/UserCredentialsContext'
import  SwitchNavigator  from './SwitchNavigator'



export default () => {

  return (
    <UserCredentialsProvider> 
      <SwitchNavigator/>
    </UserCredentialsProvider>
  )
}