import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom'
function Search() {
  const [skill, setSkill] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterOption, setFilterOption] = useState('');

  const fetchUsers = async () =>{
    try{
      const response = await axios.get('http://localhost:5000/allusers');
      setUsers(response.data);
    }catch(error){
      console.error("Error getting users: ",error)
    }
  }

  useEffect(()=>{
    fetchUsers();
  },[])

  const cardStyle = {
    display: 'inline-block',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop:"30px",
    marginRight:"5px",
    width: 'calc(45% - 250px)',
    
  };

  const styles = {
    cardContainer: {
      backgroundColor: '#231E39',
      borderRadius: '5px',
      boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
      color: '#B3B8CD',
      paddingTop: '30px',
      position: 'relative',
      width: '400px',
      maxWidth: '100%',
      textAlign: 'center',
    },
    round: {
      border: '1px solid #03BFCB',
      borderRadius: '50%',
      padding: '7px',
    },
    h3: {
      margin: '10px 0',
    },
    h6: {
      margin: '5px 0',
      textTransform: 'uppercase',
    },
    p: {
      fontSize: '20px',
      lineHeight: '21px',
    },
    primaryButton: {
      backgroundColor: '#03BFCB',
      border: '1px solid #03BFCB',
      borderRadius: '3px',
      color: '#231E39',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      padding: '10px 25px',
    },
    ghostButton: {
      backgroundColor: 'transparent',
      color: '#02899C',
    },
    skills: {
      backgroundColor: '#1F1A36',
      textAlign: 'left',
      padding: '15px',
      marginTop: '30px',
    },
    skillsList: {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
    },
    skillsItem: {
      border: '1px solid #2D2747',
      borderRadius: '2px',
      display: 'inline-block',
      fontSize: '20px',
      margin: '0 7px 7px 0',
      padding: '7px',
      textTransform:"uppercase"
    },
    
    footer: {
      backgroundColor: '#222',
      color: '#fff',
      fontSize: '14px',
      bottom: '0',
      position: 'fixed',
      left: '0',
      right: '0',
      textAlign: 'center',
      zIndex: '999',
    },
    footerP: {
      margin: '10px 0',
    },
    footerI: {
      color: 'red',
    },
    footerA: {
      color: '#3c97bf',
      textDecoration: 'none',
    },
  };

  // const handleSubmit = event => {
  //  event.preventDefault();
  //  axios.get(`http://localhost:5000/users/${skill}`)
  //    .then((response) => {
  //     const filtered = response.data.filter(user => user.skills);
  //     setFilteredUsers(filtered);
  //     // setFilteredUsers(response.data);
  //    })
  //    .catch((error) => {
  //      console.error('Error fetching users: ', error);
  //    });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    if (skill.trim() === '') {
      // If search bar is empty, fetch all users
      fetchUsers();
    } else {
      // If search bar has a skill, filter users based on that skill
      axios.get(`http://localhost:5000/users/${skill}`)
        .then((response) => {
          const filtered = response.data.filter(user => user.skills);
          console.log("filtered users: ",filtered);
          setFilteredUsers(filtered);
        })
        .catch((error) => {
          console.error('Error fetching users: ', error);
        });
    }
  };

  //option change  
  // const handleFilterChange = (selectedOption) => {
  //   setFilterOption(selectedOption);
  // };

  // useEffect(() => {
  //   // Filter users based on searchSkill and filterOption
  //   if (skill !== '') {
  //     const filtered = users.filter(user => user.skills.includes(skill));
  //     setFilteredUsers(filtered);
  //   } else if (filterOption !== '') {
  //     const filtered = users.filter(user => user.skills.includes(filterOption));
  //     setFilteredUsers(filtered);
  //   } else {
  //     setFilteredUsers(users);
  //   }
  // }, [skill, filterOption, users]);

// display all users if not searched any, then filtering according to the keyword
const displayUsers = skill ? filteredUsers : users;
// const displayUsers = (skill || filterOption) ? filteredUsers : users;
// bg image
const bgImg = "https://images.pexels.com/photos/113850/pexels-photo-113850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// random image fetching from the API
const randomNumber = Math.floor(Math.random() * 8);
// img variable
const imgURL = `https://randomuser.me/api/portraits/med/lego/${randomNumber}.jpg`;
// const imgURL = `https://bootdey.com/img/Content/avatar/avatar${randomNumber}.png`

//  const filterOptions = ["Android", "Web", "Cloud"];

  return (
    
    <div className='user-list' style={{background:"linear-gradient(111.1deg, rgb(0, 40, 70) -4.8%, rgb(255, 115, 115) 82.7%, rgb(255, 175, 123) 97.2%)"}}>
      <div className='inputt-containerr'>
      <form onSubmit={handleSubmit} style={{ width:'50', display:"inline-block", position:"relative", top:"20px"}}>
        <input
        class="inputt"
          type="text"
          placeholder='Enter prompt'
          value={skill}
          onChange={event => setSkill(event.target.value)}
          // style={{
          //   width: "300px",
          //   padding: "10px",
          //   border: "none",
          //   borderRadius: "20px",
          //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            
          // }}
        />
        <span class="iconn"> 
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </span>
        {/* <button
          class='damn-btn'
          type="submit"
          style={{
            backgroundColor: "#4e99e9",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            position:"absolute",
            top: "0",
            right: "0",

            
          }}    
        >
          Search
        </button> */}
        
      </form>
      {/* <select className="mx-2" onChange={(e) => handleFilterChange(e.target.value)} value={filterOption}>
          <option value="">Select Option</option>
          {filterOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select> */}
      </div>

      {displayUsers.map((user) => (
        <div key={user._id} style={cardStyle}>
        <div style={styles.cardContainer}>
      <img style={styles.round} src={imgURL} alt="user"/>
      <h3 style={styles.h3}>{user.username}</h3>
      <p style={styles.p}>{user.desc}<br/></p>

     <Link target="_blank" to={`mailto:${user.email}`}><button style={{marginRight:"10px"}} class="circular-btn"><i class="fa-brands fa-google"></i></button></Link>
		 <Link target="_blank" to={user.github}><button class="circular-btn"><i class="fab fa-github"></i></button></Link>
			
    
      <div style={styles.skills}>
        <h6 style={styles.h6}>Skills</h6>
        <ul style={styles.skillsList}>
        {user.skills.toString().split(',').map((skill, index) => (
      <li key={index} style={styles.skillsItem}>{skill.trim()}</li>
    ))}
          </ul>
      </div>
      
    </div>
      </div>
      ))}
    </div>
  

 ); 
 }

export default Search;