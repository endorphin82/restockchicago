import React, { useState } from "react"
import { Button, Form, Input, Modal, Select } from "antd"
import { useMutation } from "@apollo/react-hooks"
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined"
import { addProductMutation } from "../Products/mutations"

const ProductsForm = ({visible, visibleSet}) => {
  const [addProduct, { data }] = useMutation(addProductMutation);
  const [values, setValues] = useState({name: '', price: 0, category: ''})

  const onFinish = values => {
    console.log("Received values of form:", values)
    visibleSet(false);
  }
  const handleOk = e => {
    e.preventDefault()
    console.log(e)
    // addProduct({variables: {
    //   [type]: input[type].value
    // }})
  }
  const handleCancel = e => {
    e.preventDefault()
    console.log(e)
    visibleSet(false)
  }
  const handleChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }
  return (
    <Modal
      title="Product information"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >

      <Form
        name="product" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
        <Form.Item
          label="Name product"
          name="name"
          // noStyle
          rules={[{ required: true, message: "Name product is required" }]}
        >
          <Input onChange={handleChange} placeholder="name product" style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          // noStyle
          rules={[{required: true, message: "Price is required" }]}
        >
          <Input placeholder="Price $" style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          // noStyle
          rules={[{ required: true, message: "Category is required" }]}
        >
          <Select onChange={handleChange} placeholder="Select category">
            <Select.Option value="Zhejiang">Zhejiang</Select.Option>
            <Select.Option value="Jiangsu">Jiangsu</Select.Option>
          </Select>
        </Form.Item>

        <Form.List name="images">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? "Images" : ""}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input image url or delete this field."
                        }
                      ]}
                      noStyle
                    >
                      <Input onChange={handleChange} placeholder="image url" style={{ width: "90%", marginRight: 8 }}/>
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name)
                        }}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add()
                    }}
                    style={{ width: "80%" }}
                  >
                    <PlusOutlined/> Add image url
                  </Button>
                </Form.Item>
              </div>
            )
          }}
        </Form.List>
        <Form.Item
          label="Icon"
          name="icon"
          // noStyle
        >
          <Input onChange={handleChange} placeholder="icon url" style={{ width: "100%", marginRight: 8 }}/>
        </Form.Item>
      </Form>

    </Modal>
  )
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
}

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 }
  }
}

export default ProductsForm