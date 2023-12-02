import React from 'react'

const CreateForm = ({ name, address, onInputNameChange,onInputAddressChange, handleFormSubmit }) => {
  return (
    <form className='form' onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text"  className='input-box' value={name} onChange={onInputNameChange} />
        </label>
        <label>
          Address:
          <input type="text" className='input-box' value={address} onChange={onInputAddressChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
  )
}

export default CreateForm