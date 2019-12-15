import React, { useState, useEffect } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
import { createOrg } from "../redux-actions/orgCreate-action";

const OrgCreateOrg = props => {
  const [orgMember, setOrgMember] = useState([]);
  console.log("org", orgMember);

  const handleChange = event => {
    setOrgMember({ ...orgMember, [event.target.name]: event.target.value });
  };

  const createOrgReducer = useSelector(state => state.orgCreateReducer)

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createOrg(orgMember));
  };

  if (createOrgReducer.isFetching === true){
    return <h1>...Creating Organization Member</h1>
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input
            type="text"
            id="Name"
            placeholder="name"
            name="name"
            value={orgMember.name}
            onChange={handleChange}
          />
        </FormGroup>
        <div className="text">
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="email"
              value={orgMember.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="password"
              value={orgMember.password}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <Button type="Submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default OrgCreateOrg;
