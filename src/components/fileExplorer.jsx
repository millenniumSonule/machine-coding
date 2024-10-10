import React, { useState } from 'react'
import fileData from '../data/folderData'
import './fileExplorer.css'
import Folder from './folder'
const FileExplorer = () => {

    const [data,setData] = useState(fileData);

  return (
    <div className='container'>
        

        <div className='files-folders'>
                <Folder explorer={data}/>
        </div>

    </div>
  )
}

export default FileExplorer