import React from "react"
import { Table } from "antd"

const DataOutput = ({ data }) => {
  const columns = [
    {
      title: "Номер",
      dataIndex: "id",
      key: "id",
      width: "100px",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Текст",
      dataIndex: ["title", "body"],
      sortDirections: ["ascend", "descend", "ascend"],
      // функция сравнения строк
      sorter: (a, b) => a.body.localeCompare(b.body),
      // вывод нескольких строк в одну ячейку
      render: (text, { title, body }) => (
        <>
          <h4>{title.toUpperCase()}</h4>
          {body.substring(1, 0).toUpperCase() + body.substring(1)}
        </>
      ),
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSizeOptions: [5, 10, 15, 20, 25, 50],
        defaultPageSize: 5,
        showTotal: (total, range) => `${range[0]}-${range[1]} из ${total}`,
      }}
    />
  )
}

export default DataOutput
