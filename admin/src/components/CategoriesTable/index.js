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
      title: "Icon",
      dataIndex: "icons",
      key: "icons",
      render: icons => {
        return (icons.length !== 0) ? (
          <img alt="img"
               src={icons[0]}
               style={{ width: "20px", height: "20px" }}/>
               ) : <span> no icon</span>
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