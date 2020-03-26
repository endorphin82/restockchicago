import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { Table } from "antd"
import { categoriesAllQuery } from "./query"

const styleIconInTable = { width: "20px", height: "20px", marginRight: "10px" }

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
        return (icons.length !== 0)
          ? <div>
            {
              icons
                .map(icon => <img alt="img"
                                  src={icon}
                                  style={styleIconInTable}/>
                )
            }
          </div>
          : <span>no icons</span>
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