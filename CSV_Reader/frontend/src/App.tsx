import './App.css'

function App() {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files ?? []
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result
        console.log(text)
      }
      reader.readAsText(file)
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <>
      <h3>CSV Reader</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFileChange} type="file" accept='.csv'/>
        <button type='submit'>Upload</button>
      </form>
    </>
  )
}

export default App
