/*
  The code below will generate the Profile page
  Contains Logo + Username + Inquiry remain
*/

// Module:
import React, { useState, useRef, useContext } from 'react';
// Assets:
import logo from '../assets/applyAI/logo_avatar.png';
import personal_icon from '../assets/icons/education.png';
import personal_icon_active from '../assets/icons/education_select.png';
import edu_icon from '../assets/icons/education.png';
import edu_icon_active from '../assets/icons/education_select.png';
import work_icon from '../assets/icons/work.png';
import work_icon_active from '../assets/icons/work_select.png';
import plan_icon from '../assets/icons/plan.png';
import plan_icon_active from '../assets/icons/plan_select.png';
import LogOutButton from '../components/buttons/Button_TxtIcon';
// Components:
import logOutIcon from '../assets/icons/smileFace.png'
import InputWithLabel from '../components/inputs/InputBox_Lbl';
import CheckWithLabel from '../components/inputs/CheckBox_Lbl';

const Sidebar = () => {
  // Top section of the side menu
  function SidebarTop({ username, inquiryRemain }){
    return (
      <div className="sidebar_top">
          <img src={logo} alt="Logo" className="sidebar-logo" />
          <div className="user-info">
            <div className="username" style={{fontSize:'14px',fontWeight:'bold'}} >{username}</div>
            <div className="inquiry-remain">Inquiry remain: {inquiryRemain}</div>
          </div>
      </div>
    );
  }

  // Mid section of the side menu
  function SidebarMid(){
    const { activeSection, setActiveSection } = useContext(ProfileContext);
    // const storedIconIdleSrc = useRef(personal_icon_active);
  
    return (
      <div className="sidebar_mid">
  
          <div
            className={`menu_item ${activeSection === 'personalInfo' ? 'active' : ''}`}
            onClick={() => setActiveSection('personalInfo')}>
            <img 
              src={activeSection === "personalInfo" ? personal_icon_active : personal_icon} 
              alt="Personal Info" 
            />
            Personal Info
          </div>
  
          <div
            className={`menu_item ${activeSection === 'educationExperience' ? 'active' : ''}`}
            onClick={() => setActiveSection('educationExperience')}>
            <img 
              src={activeSection === "educationExperience" ? edu_icon_active : edu_icon} 
              alt="education Info" 
            />
            Education Experience
          </div>
  
          <div
            className={`menu_item ${activeSection === 'workExperience' ? 'active' : ''}`}
            onClick={() => setActiveSection('workExperience')}>
            <img 
              src={activeSection === "workExperience" ? work_icon_active : work_icon} 
              alt="work Info" 
            />
            Work Experience
          </div>
  
          <div
            className={`menu_item ${activeSection === 'managePlan' ? 'active' : ''}`}
            onClick={() => setActiveSection('managePlan')}>
            <img 
              src={activeSection === "managePlan" ? plan_icon_active : plan_icon}
              alt="plan Info" 
            />
            Manage Plan
          </div>
      
      </div>
    );
  }

  // main layout
  const logOutButtonClick = () => {
    console.log('Logout Button clicked!');
  };
  return (
    <div className="sidebar">
      <SidebarTop 
        username="lang"
        inquiryRemain="12"
      />
      <SidebarMid />
      <LogOutButton
        text="Log out"
        onClick={logOutButtonClick}
        size="small"
        imageSrc={logOutIcon}
        // style={{ backgroundColor: 'blue', color: 'white' }}
      />
    </div>
  );
}

function InfoForm({ formData, setFormData }){
  // const { activeSection, setActiveSection } = useContext(ProfileContext);
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   isStudentOrGraduate: false
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevFormData => ({
  //     ...prevFormData,
  //     [name]: value
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className="form_box">
      <div className="info_top">
        <div className="info_top_child name_input">
          <InputWithLabel
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            width="140px"
            type="text"
          />
          <InputWithLabel
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            width="140px"
            type="text"
          />
        </div>

        <div className="info_top_child contact_input">
          <InputWithLabel
            label="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            width="280px"
            type="email"
          />
          <InputWithLabel
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            width="280px"
            type="tel"
          />
        </div>
      </div>

      <div className="student_check">
        <CheckWithLabel 
          label="A current student or graduate?"
          name="isStudentOrGraduate"
          checked={formData.isStudentOrGraduate}
          onChange={handleChange}
        />
      </div>

      <div className="info_bottom">
        <div className="info_bottom_child address_input">
          <InputWithLabel
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            width="300px"
            type="text"
          />
          <div className="second_row">
            <InputWithLabel
              label="County"
              name="county"
              value={formData.county}
              onChange={handleChange}
              width="140px"
              type="text"
            />  
            <InputWithLabel
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              width="80px"
              type="text"
            />
            <InputWithLabel
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              width="140px"
              type="text"
            />
          </div>
          <div className="third_row">
            <InputWithLabel
              label="Postal Code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              width="100px"
              type="text"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
function EduForm(){
  return (
    <div>
      <h1>educationExperience Page</h1>
      <p>Details about personal info...</p>
      
    </div>
  );
}
function WorkForm(){
  return (
    <div>
      <h1>workExperience Page</h1>
      <p>Details about personal info...</p>
      
    </div>
  );
}
function PlanForm(){
  return (
    <div>
      <h1>managePlan Page</h1>
      <p>Details about personal info...</p>
      
    </div>
  );
}

const ProfileForm = () => {
  const { activeSection, setActiveSection, formData, setFormData } = useContext(ProfileContext);
    // Render content based on the active section
    const renderContent = () => {
      switch (activeSection) {
        case 'personalInfo':
          return <InfoForm formData={formData} setFormData={setFormData} />;
        case 'educationExperience':
          return <EduForm />;
        case 'workExperience':
          return <WorkForm />;
        case 'managePlan':
          return <PlanForm />;
        default:
          return <div>Select a section</div>;
      }
    };
    const saveButtonClick = () => {
      console.log('Save Button clicked!');
      // const jsonData = JSON.stringify(formData);
      // console.log(jsonData); // Do something with jsonData
    };

    return (
      <div className="form_container">
        {renderContent()}
        <LogOutButton
          text="Save"
          onClick={saveButtonClick}
          size="small"
          style={{ 
            color: 'white',
            backgroundColor: 'transparent',  
            border: '2px solid white',
            borderRadius: '5px'
            }}
        />
      </div>
    );
}

const ProfileContext = React.createContext();
const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isStudentOrGraduate: false
  });

  return (
    <ProfileContext.Provider value={{ activeSection, setActiveSection, formData, setFormData }}>
      <div className="profile">
          <Sidebar />
          <ProfileForm />
    </div>
  </ProfileContext.Provider>
  );
}

export default ProfilePage;