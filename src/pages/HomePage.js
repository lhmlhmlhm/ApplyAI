// import React from 'react';
import InputWithLabel from '../components/inputs/InputBox_Lbl';

const Home = () => {
    return(
      <form>
        <InputWithLabel
          label="Name"
          type="text"
          width="300px"
          backgroundColor="#f0f0f0"
        />
        <InputWithLabel
          label="Email"
          type="email"
          width="400px"
          backgroundColor="#fff"
        />
      </form>
    );
  };
  
export default Home;