import React from 'react';

const Contact = () => {
  const contact =  {
    width: "78%", 
    margin: "2rem auto",
    display: "flex",
    textAlign: "center",
    flexDirection: "column"
};

  return (
    <div style={contact}>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out to us!</p>
      <div>
        <h4>Address:</h4>
        <p>123 Main Street, Chicago, IL 60601</p>
      </div>
      <div>
        <h4>Phone:</h4>
        <p>(123) 456-7890</p>
      </div>
      <div>
        <h4>Email:</h4>
        <p>info@littlelemonrestaurant.com</p>
      </div>
    </div>
  );
}

export default Contact;
