import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../utils/loader/Loader';
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidErrorCircle } from "react-icons/bi";

class Verification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationStatus: 'Verifying Email...',
      check: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.verifyEmail();
  }

  verifyEmail = async () => {
    const { token } = this.props;
    try {
      this.setState({ loading: true });
      const response = await axios.post('https://realtyprop-backend-production.up.railway.app/auth/verify-email', { token });
      console.log('Email verified:', response.data);
      if (response.data) {
        this.setState({ check: true });
      }
      this.setState({ verificationStatus: 'Email verification successful!' });
    } catch (error) {
      console.error('Verification error:', error);
      this.setState({ verificationStatus: 'Email verification failed. Please try again.' });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, check, verificationStatus } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        {
          
            check ?
            <FaCheckCircle style={{fontSize:'80px', color:'green'}} /> :
            <BiSolidErrorCircle style={{fontSize:'80px', color:'red'}} />
          
        }
        <h2>{verificationStatus}</h2> 
      </div>
    );
  }
}

const VerificationWithRouter = () => {
  const { token } = useParams();
  return <Verification token={token} />;
};

export default VerificationWithRouter;
