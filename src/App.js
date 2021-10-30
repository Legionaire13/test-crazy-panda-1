import SmartTable from "./components/SmartTable/SmartTable"
import { ConfigProvider } from "antd"
import ruRU from "antd/lib/locale-provider/ru_RU"
import "./App.css"

function App() {
  return (
    <ConfigProvider locale={ruRU}>
      <div className="App">
        <SmartTable />
      </div>
    </ConfigProvider>
  )
}

export default App
