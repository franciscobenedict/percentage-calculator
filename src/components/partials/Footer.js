import React, {
  useState,
  useEffect
} from 'react';

const Footer = () => {
  const footerObj = [
    { copyrightText: "Francisco Benedict • Online Tools • All rights reserved" }
  ]
  const [footerObjects, setFooterObjects] = useState();
  const [date , setDate] = useState();
  const getYear = () =>  setDate(new Date().getFullYear());

  useEffect(() => {
    setFooterObjects(footerObj);
    getYear();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <footer className='footer'>
      <div>
        <span>&copy; {date}</span>
        <span>&nbsp;</span>
        {
          footerObjects &&
          <>
          {
            Object.keys(footerObjects).map((key) => (
              <span key={key}>
                {footerObjects[key].copyrightText}
              </span>
            ))
          }
          </>
        }
      </div>
    </footer>
  );
}

export default Footer;
