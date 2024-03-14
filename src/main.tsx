import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import UserSettings from './Settings';
import Appointment from './Appoint';
import Billlist from './billing_list.tsx';
import ChatPage from './Chat.tsx';
import TestList from './Test_report_list.tsx';
import Test from './Test.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
  <Routes>
    <Route path='/'  element={<Appointment/>} />
    <Route path='/settings'  element={<UserSettings/>} />
    <Route path='/billing'  element={<Billlist/>} />
    <Route path='/feedback'  element={<ChatPage/>} />
    <Route path='/tests'  element={<TestList/>} />
  </Routes>
</BrowserRouter>
  </>

)
