import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Table } from "antd"
import { categoriesAllQuery } from "./query"

const CategoriesTable = () => {
  const { loading, error, data } = useQuery(categoriesAllQuery)

  if (loading) return <p>Loading ... </p>
  const { categoriesAll } = data
  console.log(categoriesAll)

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Icons",
      dataIndex: "icons",
      key: "icons",
      render: icons => {
        return (icons.length !== 0) ? (
          <div>
            <img alt="img"
                 src={icons[0]}
                 style={{ width: "20px", height: "20px", marginRight: "10px" }}/>
            <img alt="img"
                 src={icons[1]}
                 style={{ width: "20px", height: "20px" }}/>
          </div>
        ) : <span>no icons</span>
      }
    }
  ]

  return (
    <>
      <Table dataSource={categoriesAll} columns={columns}/>
    </>
  )
}

export default CategoriesTable