import React from "react"
import { Button, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      {/*<Button shape="circle" style={{ "position": "absolute", "bottom": "50px", "right": "50px" }} />*/}
      <Tooltip title="Add Product">
        <Button type="dashed" shape="circle"
                style={{ position: "fixed", bottom: "50px", right: "50px", color: '#08c'  }}
        ><PlusOutlined
          style={{ fontSize: '22px', color: '#08c' }}
        /></Button>
      </Tooltip>

    </>
  )
}

export default Products