import React, { useState } from "react"
import SearchBox from "../SearchBox/SearchBox"
import DataOutput from "../DataOutput/DataOutput"
import mock from "../../mocks/mock"

const SmartTable = () => {
  const initialState = mock
  const [dataToRender, setDataToRender] = useState(initialState)
  const onChange = (e) => {
    return setDataToRender(
      initialState.filter((item) =>
        item.body.includes(e.target.value.toLowerCase())
      )
    )
  }

  return (
    <>
      <h1>Компонент: таблица с поиском</h1>
      <SearchBox onChange={onChange} />
      <DataOutput data={dataToRender} />
    </>
  )
}

export default SmartTable
