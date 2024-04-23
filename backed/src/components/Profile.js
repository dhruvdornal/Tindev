import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const UserProfile = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
       
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser!=="undefined") {
      const parsedUser = JSON.parse(storedUser);
      console.log(parsedUser); // Check the structure of the parsed user object
      setUser(parsedUser);
    }
      }, []);
      
      const styles = {
        section: {
          padding: '100px 0',
          position: 'relative'
        },
        grayBg: {
          backgroundColor: '#f5f5f5'
        },
        img: {
          maxWidth: '100%',
          verticalAlign: 'middle',
          borderStyle: 'none'
        },
        aboutTextH3: {
          fontSize: '45px',
          fontWeight: '700',
          margin: '0 0 6px'
        },
        aboutTextH6: {
          fontWeight: '600',
          marginBottom: '15px'
        },
        aboutTextP: {
          fontSize: '18px',
          maxWidth: '450px',
          textAlign: 'center'
        },
        aboutTextPMark: {
          fontWeight: '600',
          color: '#20247b'
        },
        aboutList: {
          paddingTop: '10px'
        },
        aboutListMedia: {
          padding: '5px 0'
        },
        aboutListLabel: {
          color: '#20247b',
          fontWeight: '600',
          width: '88px',
          margin: '0',
          position: 'relative'
        },
        aboutListLabelAfter: {
          content: '""',
          position: 'absolute',
          top: '0',
          bottom: '0',
          right: '11px',
          width: '1px',
          height: '12px',
          background: '#20247b',
          MozTransform: 'rotate(15deg)',
          OTransform: 'rotate(15deg)',
          msTransform: 'rotate(15deg)',
          WebkitTransform: 'rotate(15deg)',
          transform: 'rotate(15deg)',
          margin: 'auto',
          opacity: '0.5'
        },
        aboutListP: {
          margin: '0',
          fontSize: '15px'
        },
        aboutAvatar: {
          marginTop: '30px'
        },
        aboutSectionCounter: {
          padding: '22px 20px',
          background: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 0 30px rgba(31, 45, 61, 0.125)'
        },
        aboutSectionCounterCountData: {
          marginTop: '10px',
          marginBottom: '10px'
        },
        aboutSectionCounterCount: {
          fontWeight: '700',
          color: '#20247b',
          margin: '0 0 5px'
        },
        aboutSectionCounterP: {
          fontWeight: '600',
          margin: '0'
        },
        mark: {
          backgroundImage: 'linear-gradient(rgba(252, 83, 86, 0.6), rgba(252, 83, 86, 0.6))',
          backgroundSize: '100% 3px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0 bottom',
          backgroundColor: 'transparent',
          padding: '0',
          color: 'currentColor'
        },
        themeColor: {
          color: '#fc5356'
        },
        darkColor: {
          color: '#20247b'
        },
        // skills style
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
      };
      
      
    //   const handleOptionClick = (option) => {
    //     if (option === 'myProfile') {
    //       // Navigate to user profile
    //       console.log("Navigate to user profile");
    //     } else if (option === 'logout') {
    //       // Handle logout logic
    //       console.log("Logout");
    //     }
    //   };
      
    // const navigate = useNavigate();
    // const randomNumber = Math.floor(Math.random() * 7);
    // //const imgURL = `https://randomuser.me/api/portraits/med/lego/${randomNumber}.jpg`;
    // const imgURL = `https://bootdey.com/img/Content/avatar/avatar${randomNumber}.png`
    // https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg (background img)
    // https://www.w3schools.com/css/mountain.jpg 
    
    
  return (
    <>
    <div>
    <header style={{backgroundImage:
                "url('')"}}>
    <section class="section about-section gray-bg" id="about" style={styles.section}>
    <div class="container" style={{color: '#000',
                                   width: '100%',
                                   border: '1px solid gray',
                                   padding: '16px',
                                   background: 'url("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZhenU2dTJlYmo3Mmp5enNybmlqanEzeDU1MHlldzBsb2pjaTJqcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rcFs59ww1R7yeFszmo/giphy.gif")',
                                   borderRadius:"25px"}}>
        <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-6">
                <div class="about-text go-to" style={styles.aboutText}>
                    <h3 class="dark-color" style={styles.aboutTextH3}>About Me</h3>
                    <h6 class="theme-color lead" style={styles.aboutTextH6}>A Lead UX &amp; UI designer based in Canada</h6>
                    <p style={styles.aboutTextP}>I <mark style={styles.mark}>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                    <div class="row about-list" style={styles.aboutList}>
                        <div class="col-md-6">
                            <div class="media" style={styles.aboutListMedia}>
                            
                                            {/* <h6 style={styles.h6}>Skills</h6>
                                            <ul style={styles.skillsList}>
                                            {user.skills.toString().split(',').map((skill, index) => (
                                        <li key={index} style={styles.skillsItem}>{skill.trim()}</li>
                                     ))}
                                             </ul> */}
                            
                            </div>
                            {/* <!-- Additional media items here --> */}
                        </div>
                        <div class="col-md-6">
                            <div class="media" style={styles.aboutListMedia}>
                                <label style={styles.aboutListLabel}>E-mail</label>
                                <p style={styles.aboutListP}>info@domain.com</p>
                            </div>
                            {/* <!-- Additional media items here --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-avatar" style={styles.aboutAvatar}>
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" style={styles.img}/>
                </div>
            </div>
        </div>
    </div>
</section>
</header>
    </div>
    </>
  )
}

export default UserProfile