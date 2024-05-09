import { useState } from 'react'
import './App.css'
import { uploadFile } from './services/upload';
import {Toaster, toast} from "sonner"
import { Data } from './types';
import { Search } from './steps/Search';
const APP_STATUS = {
  IDLE: 'idle', //When entering the app
  ERROR: 'error', //When an error occurs
  READY_UPLOAD: 'ready_upload', //When choosing a file
  UPLOADING: 'uploading', // When uploading a file
  READY_USAGE: 'ready_usage' // After uploading a file
}
const BUTTON_TEXT = {
  [APP_STATUS.READY_UPLOAD]: 'Upload file',
  [APP_STATUS.UPLOADING]: 'Uploading...',
  [APP_STATUS.ERROR]: 'Try again',
}
function App() {
  const [appStatus, setAppStatus] = useState(APP_STATUS.IDLE);
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<Data>([]);  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files ?? []
    if (file) {
      setFile(file)
      setAppStatus(APP_STATUS.READY_UPLOAD)
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(APP_STATUS.READY_UPLOAD !== appStatus || !file) {
      return
    }
    setAppStatus(APP_STATUS.UPLOADING)
    const [error, newData] = await uploadFile(file)
    if (error || !newData) {
      setAppStatus(APP_STATUS.ERROR)
      toast.error(error?.message ?? "Unknown error")
      return
    }
    setData(newData)
    console.log(newData)
    console.log(data)
    setAppStatus(APP_STATUS.READY_USAGE)
    toast.success("File uploaded successfully")
  }
  const showButton = APP_STATUS.READY_UPLOAD === appStatus || APP_STATUS.UPLOADING == appStatus || APP_STATUS.ERROR === appStatus
  return (
    <>
    <Toaster/>
      <h3>CSV Reader</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input onChange={handleFileChange} type="file" accept='.csv' name='file' disabled={appStatus === APP_STATUS.UPLOADING}/>
        </label>
        {
         showButton && (
            <button type='submit'>
              {BUTTON_TEXT[appStatus]}
            </button>
          )
        }
      </form>
      {
        APP_STATUS.READY_USAGE === appStatus && (
          <Search initialData={data}/>
        )
      }
    </>
  )
}

export default App
