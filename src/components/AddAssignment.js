import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// properties addAssignment is required, function called when Add clicked.
class AddAssignment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      assignment: {
        assignmentName: null,
        dueDate: null,
        courseId: null,
      },
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  // handles the change for textfields and sets the State
  // using key value pairing and object spread syntax
  handleChange = (event) => {
    const key = event.target.name

    this.setState({
      assignment: { ...this.state.assignment, [key]: event.target.value },
    })
  }

  // save assignment and close modal form
  handleAdd = () => {
    this.props.addAssignment(this.state.assignment)
    this.handleClose()
  }

  render() {
    return (
      <div>
        <Button
          variant='outlined'
          color='primary'
          style={{ margin: 10 }}
          onClick={this.handleClickOpen}
        >
          Add Assignment
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Add Assignment</DialogTitle>
          <DialogContent style={{ paddingTop: 20 }}>
            {/* adds Textfields in Dialog for Assignment name, due date, & courseId */}
            <TextField
              autoFocus
              fullWidth
              label='Assignment Name'
              name='assignmentName'
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              label='Due Date'
              name='dueDate'
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              label='Course Id'
              name='courseId'
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button color='secondary' onClick={this.handleClose}>
              Cancel
            </Button>
            <Button color='primary' onClick={this.handleAdd}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

// required property:  addAssignment is a function to call to perform the Add action
AddAssignment.propTypes = {
  addAssignment: PropTypes.func.isRequired,
}

export default AddAssignment
