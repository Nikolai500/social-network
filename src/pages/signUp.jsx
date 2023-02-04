import React from "react";
import { Checkbox, Button } from 'antd';
import "./signUp.css";

const CreateNewAccount = () => {

    return (
      <div className="create-new-account">
        <h1>Create new account</h1>
        <div className="nickname">
          <p>Account nickname:</p>
          <input type="text" placeholder="Enter nickname" />
        </div>
        <div className="password">
          <p>Account password:</p>
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="email">
          <p>Email:</p>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="check">
          <p>Check:</p>
          <input type="password" placeholder="Enter password second time" />
        </div>
        <div className="agree">
          <Checkbox>I agree to the terms of confidentiality.</Checkbox>
        </div>
        <div className="button-crate">
          <Button type="primary" danger>Create account</Button>
        </div>
      </div>
    );
  }
  
export default CreateNewAccount;