import React from "react"
import { Table } from "antd"

const DataOutput = ({ data }) => {
  const columns = [
    {
      title: "№",
      dataIndex: "id",
      width: "100px",
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Тексты с заголовками",
      dataIndex: ["title", "body"],
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (_, { title, body }) => (
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
      rowKey="id"
      pagination={{
        pageSizeOptions: [5, 10, 25, 50],
        defaultPageSize: 5,
        showTotal: (total, range) => `${range[0]}-${range[1]} из ${total}`,
      }}
    />
  )
}

export default DataOutput
