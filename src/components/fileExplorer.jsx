import React from 'react'
import fileData from '../data/folderData'
import './fileExplorer.css'
const fileExplorer = () => {
  return (
    <div className='container'>
        
        <div className='root-folder'>
            {JSON.stringify(fileData)}
        </div>

    </div>
  )
}

export default fileExplorer