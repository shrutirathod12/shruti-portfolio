import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Shruti Rathod. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
