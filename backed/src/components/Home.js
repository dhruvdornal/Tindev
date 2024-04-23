import React from 'react'
// eslint-disable-next-line
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [key, setKey] = useState(Date.now());
  const [matchingProfiles, setMatchingProfiles] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser!=="undefined") {
      const parsedUser = JSON.parse(storedUser);
      console.log(parsedUser); 
      setUser(parsedUser);
    }
 }, []);

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
    background: 'linear-gradient(359deg, rgb(150, 192, 255) -17.7%, rgb(255, 180, 161) 101.5%)',
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
    color:"#222"
  },
  h6: {
    margin: '5px 0',
    textTransform: 'uppercase',
    color:"#222"
  },
  p: {
    fontSize: '20px',
    lineHeight: '21px',
    color:"#222"
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
    backgroundColor: 'radial-gradient(circle at 10% 20%, rgb(254, 255, 165) 0%, rgb(255, 232, 182) 90%)',
    textAlign: 'left',
    padding: '15px',
    marginTop: '30px',
  },
  skillsList: {
    listStyleType: 'none',
    margin: '0',
    padding: '0', 
    color:"#222"
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
  
};

 const logout =  () =>{
  localStorage.removeItem('user')
  setUser(null);
  setKey(Date.now());
  window.location.reload();
 }

 const handleOptionClick = (option) => {
  if (option === 'myProfile') {
    navigate('/userprof')
  } else if (option === 'logout') {
    // Handle logout logic
    localStorage.removeItem('user')
    setUser(null);
    setKey(Date.now());
    window.location.reload();
  }
};

 // random image fetching from the API
const randomNumber = Math.floor(Math.random() * 10);
// img variable
//const imgURL = `https://bootdey.com/img/Content/avatar/avatar${randomNumber}.png`;
const imgURL = `https://randomuser.me/api/portraits/med/lego/${randomNumber}.jpg`;

const fetchProfilesBySkills = async(skills)=>{
  try{
    const skillsString = Array.isArray(user.skills) ? user.skills.join(', ') : 'No skills listed';
    //const response = await fetch(`http://localhost:5000/users/${skillsString}`); 
    const response = await fetch(`http://localhost:5000/users?skills=${encodeURIComponent(skillsString)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Recieved profiles: ",data);
    return data;
  }catch(error){
    console.error("Error fetching users",error);
    return [];
  }
 }

 useEffect(() => {
  if (user && user.skills) {
     fetchProfilesBySkills(user.skills).then(profiles => {
      console.log('Fetch request completed');
      console.log('Sent skills:', user.skills);
      console.log('Received profiles:', profiles);
      setMatchingProfiles(profiles);
     }).catch(error=>{
      console.error("Fetch failed: ",error)
     })  
  }
// eslint-disable-next-line
 }, [user]);

// https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg
// backgroundImage:
//"url('https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg')"
  return (
  <div>
      <header style={{background: "linear-gradient(109.6deg, rgb(151, 213, 255) 11.2%, rgb(255, 155, 185) 91.1%)"}}>
    <nav style={{position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                background: "linear-gradient(109.6deg, rgb(151, 213, 255) 11.2%, rgb(255, 155, 185) 91.1%)",
                margin:"0 auto",
              
                }}>
        <div class="logo" style={{width:""}}>
           <b> TINDEV </b>
        </div>
        <div className="register" style={{ paddingRight: "1200px" }}>
        {user ? (
        <DropdownButton title={user.username} variant="primary" style={{font:"white"}}>
        <Dropdown.Item onClick={() => handleOptionClick('myProfile')}>My Profile</Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionClick('logout')}>Logout</Dropdown.Item>
      </DropdownButton>
      ) : (
        <Link to="/auth">Login/Register</Link>
      )}
    </div>
    </nav>
    
    {matchingProfiles?.length > 0 ? (
      <div style={{ background: "linear-gradient(109.6deg, rgb(151, 213, 255) 11.2%, rgb(255, 155, 185) 91.1%)",
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat"
     }}>
        {/* Render profiles that match the user's skills */}
        {matchingProfiles.map(profile => (
          <div key={profile._id} style={cardStyle}>
          <div style={styles.cardContainer}>
        <img style={styles.round} src={imgURL} alt="user"/>
        <h3 style={styles.h3}>{profile.username}</h3>
        <p style={styles.p}>{profile.desc}<br/></p>
  
       <Link target="_blank" to={`mailto:${profile.email}`}><button style={{marginRight:"10px"}} class="circular-btn"><i class="fa-brands fa-google"></i></button></Link>
       <Link target="_blank" to={profile.github}><button class="circular-btn"><i class="fab fa-github"></i></button></Link>
        
      
        <div style={styles.skills}>
          <h6 style={styles.h6}>Skills</h6>
          <ul style={styles.skillsList}>
          {profile.skills.toString().split(',').map((skill, index) => (
        <li key={index} style={styles.skillsItem}>{skill.trim()}</li>
      ))}
            </ul>
        </div>
        
      </div>
        </div>
        ))}
      </div>
    ) :(
    <section class="h-text">
        <span style={{color:"white"}}>
            ENJOY
        </span>
        <div class="typewriter">
         <h1>Explore The World</h1>
        </div>
        <Link to="/search"><button class="btn" style={{color:"white"}}> FIND YOUR MATES
        </button></Link>
    </section>
    )}
    </header>
    
  </div>
  )
}

export default Home

