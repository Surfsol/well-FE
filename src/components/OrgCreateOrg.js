import React, { useState, useEffect } from "react";

//css
import '../assets/css/createPopup.scss'


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
    <div className="popBox-container">
    <h1>Create Organization</h1>
      <div className="popBox">
          
       
        <div className="type">
          <div className="title">
            <label for="Name">Organization Name</label>
          </div>
          <div className="box">
            <input
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
            <label for="Email">Email</label>{" "}
          </div>
          <div className="box">
            {" "}
            <input
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
          <label for="Password">Password</label>
          </div>
          <div className="box">
          <input
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
          <label for="Password">Confirm Password</label>
          </div>
          <div className="box">
          <input
              type="password"
              name="password"
              id="Password"
              placeholder="password"
              value={orgMember.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="Submit" onClick={handleSubmit}>
          Submit
        </button>
      
      </div>
      </div>
    </>
  );
};
export default OrgCreateOrg;
