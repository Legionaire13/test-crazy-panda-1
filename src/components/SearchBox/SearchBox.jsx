import React from "react"
import { Input } from "antd"

const SearchBox = ({ onChange }) => {
  const { Search } = Input
  return (
    <Search
      placeholder="Фильтр по данным таблицы (заголовки, текст)"
      onChange={onChange}
      style={{ marginBottom: 10 }}
    />
  )
}

export default SearchBox
