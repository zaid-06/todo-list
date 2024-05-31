import React from 'react'

const Footer = () => {
  const footerStyle = {
    position: "absolute",
    // bottom: 0,
    width: "100%", 

  };

  const contentStyle = {
    // minHeight: "calc(100vh - 40 px)", // Adjust 40px according to the height of your footer
    padding: "10% 0 0 0" ,
  };
  return (
    <div style={contentStyle}>
      <footer className="bg-dark text-light py-3 " style={footerStyle} >
      <p className='text-center'>
        Copyright &copy; MyTodoList.com
      </p>
    </footer>
    </div>
    

    
  )
} 

export default Footer
