import React from 'react';
// import './Home.css';

const Contacts = [
  {
      project: 'Web Dev',
      name: "Pavani Priya",
      department: '8919047022',
      rollNo:"220xxx",
      email: "pavanipriya6124@gmail.com"
  },
  {
    project: 'Web Dev',
    name: "Pavani Priya",
    department: '8919047022',
    rollNo:"220xxx",
    email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},
]

const FacultyCard = ({ project, name, rollNo, department, email }) => {
  return (
    <div className="card">
      <h1>Project: {project}</h1>
      <h2>Name: {name}</h2>
      <p>Department: {department}</p>
      <p>Roll Number: {rollNo}</p>
      <p>Email: {email}</p>
      <button className="accept-button">ACCEPT</button>
      <button className="reject-button">REJECT</button>
    </div>
  );
};

const Requests = () => {
  return (
    <div>
        <div className='cont'>
          { Contacts.map((item) => {
            return (
              <FacultyCard 
              project = {item.project}
              name = {item.name}
              rollNo ={item.rollNo}
              department ={item.department}
              email ={item.email}
              />
              );
           })}
           <FacultyCard />
        </div>
        </div>
  );
};

export default Requests;