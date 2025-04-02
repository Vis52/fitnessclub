import React from 'react'

const Form = () => {
  return (
    <div>
        <form>

      <label class="form-label">
email
      </label>
      <input type='email' id='exampleFrom' placeholder='write ur email'/><br/>
      <label>password</label>
      <input type='password' id='pass' placeholder='type ur password'/>
      {/* <button>submit</button> */}
      </form>
      <button>submit</button>
    </div>
  )
}

export default Form;
