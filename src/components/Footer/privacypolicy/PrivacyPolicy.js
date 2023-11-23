import React from 'react'
import './privacypolicy.css'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div className='pp-container'>
        <h2>Privacy Policy</h2>
    
    <h4>Thank you for choosing our website. This Privacy Policy outlines how we collect, use, and protect your personal information. By accessing or using our services, you consent to the practices described in this policy.</h4>
    <ol>
        <li><strong>Information We Collect:</strong>
            <ul>
                <li><em>Personal Information:</em> We may collect personal information such as names, email addresses, and phone numbers when voluntarily provided by users.</li>
                <li><em>Usage Data:</em> We gather data on how users interact with our website, including IP addresses, browser types, and device information.</li>
            </ul>
        </li>
        <li><strong>How We Use Your Information:</strong> We use the collected information to provide and improve our services, customize user experiences, and communicate updates or relevant content. Personal information is not shared with third parties unless explicitly stated or required by law.</li>
        <li><strong>Cookies and Tracking:</strong> Our website may use cookies to enhance user experience. Users can modify browser settings to decline cookies, although this may impact certain features.</li>
        <li><strong>Security:</strong> We implement security measures to protect user information from unauthorized access or alteration. However, no online method is 100% secure, and users should be cautious in sharing sensitive data.</li>
        <li><strong>Third-Party Links:</strong> Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage users to review the policies of those sites.</li>
        <li><strong>Children’s Privacy:</strong> Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and discover your child has provided us with personal information, please contact us, and we will take steps to delete it.</li>
        <li><strong>Changes to this Privacy Policy:</strong> We reserve the right to update this Privacy Policy periodically. Users will be notified of any material changes, and continued use of our services constitutes acceptance of the updated policy.</li>
        <li><strong>Contact Us:</strong> For questions or concerns regarding this Privacy Policy, please <Link to="../contact">contact us</Link>.</li>
    </ol>
    <p>By using our website, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain from using our services.</p>
</div>
  )
}

export default PrivacyPolicy