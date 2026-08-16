import { useState } from 'react'
import './style/App.css'
import * as UserData from './components/user-data'

export default function App() {
    return (
        <div className='container'>
            <UserData.informasiUmum/>
            <UserData.edukasi/>
            <UserData.pengalaman/>
        </div>
    );
}
