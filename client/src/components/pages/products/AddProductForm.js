import React from 'react'
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import propTypes from 'prop-types'
import Typography from 'material-ui/Typography/Typography'

const style = {
  container: {

  },
  form: {
    padding: 20,
    borderRadius: 3
  },
  button: {
    marginTop: 10
  }
}

const AddProductForm = ({ onChangeHandler, name, price, img, category, submitProductToServer }) =>
  <div style={style.container}>
    <Card>
      <form style={style.form}>
        <Typography type='display1' gutterBottom> Add Product </Typography>

        <div>
          <TextField onChange={onChangeHandler} id='name' label='Name' placeholder='name' />
        </div>

        <div>
          <TextField onChange={onChangeHandler} id='price' label='Price' placeholder='Price' />
        </div>

        <div>
          <TextField onChange={onChangeHandler} id='img' label='Image' placeholder='Image' />
        </div>

        <div>
          <TextField onChange={onChangeHandler} id='category' label='Category' placeholder='Catagory' />
        </div>

        <div style={style.button}>
          <Button raised disabled={!name || !price || !img || !category} onClick={submitProductToServer}>
          SUBMIT
          </Button>
        </div>
      </form>
    </Card>
  </div>

AddProductForm.propTypes = {
  onChangeHandler: propTypes.func.isRequired,
  submitProductToServer: propTypes.func.isRequired

}

export default AddProductForm
