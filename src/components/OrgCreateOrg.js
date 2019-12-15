import React, { useState, useEffect } from "react";

import {
  Button,
  Form,
  Label,
  Input
} from "reactstrap";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createOrg } from "../redux-actions/orgCreate-action";

const OrgCreateOrg = props => {
  const [orgMember, setOrgMember] = useState([]);
  console.log("org", orgMember);

  const handleChange = event => {
    setOrgMember({ ...orgMember, [event.target.name]: event.target.value });
  };

  const createOrgReducer = useSelector(state => state.orgCreateReducer);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createOrg(orgMember));
  };

  if (createOrgReducer.isFetching === true) {
    return <h1>...Creating Organization Member</h1>;
  }

  return (
    <>
      <div className="popBox">
          <Form>
        <div className="type">
          <div className="title">
            <Label for="Name">Organization Name</Label>
          </div>
          <div className="box">
            <Input
              type="text"
              id="Name"
              placeholder="name"
              name="name"
              value={orgMember.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="type">
          <div className="title">
            <Label for="Email">Email</Label>{" "}
          </div>
          <div className="box">
            {" "}
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="email"
              value={orgMember.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="type">
          <div className="title">
          <Label for="Password">Password</Label>
          </div>
          <div className="box">
          <Input
              type="password"
              name="password"
              id="Password"
              placeholder="password"
              value={orgMember.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="type">
          <div className="title">
          <Label for="Password">Confirm Password</Label>
          </div>
          <div className="box">
          <Input
              type="password"
              name="password"
              id="Password"
              placeholder="password"
              value={orgMember.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button type="Submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
};
export default OrgCreateOrg;
