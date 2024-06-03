import React, { useState } from 'react';
import Button from './Button';
import { MdMessage } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import { db } from '../app/firebase';

const Context = () => {
  const iconStyle = {
    fontSize: '20px', // Set the font size to 24px
  };
  const icoStyle = {
    fontSize: '20px', // Set the font size to 24px
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [loader, setLoader] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);

    db.collection('contacts')
      .add({
        name: name,
        email: email,
        text: text,
      })
      .then(() => {
        setLoader(false);
        alert('Your message has been submitted👍');
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setEmail('');
    setText('');
  };

  return (
    <div className="flex container mx-auto">
      <div className="container mx-auto max-w-screen-md ml-90 flex flex-col">
        <div className="-mt-16 flex justify-between mx-3 gap-x-4">
          <Button text="VIA SUPPORT CALL" icon={<MdMessage style={iconStyle} />} />
          <Button text="VIA CALL" icon={<BiSolidPhoneCall style={icoStyle} />} />
        </div>

        <div className="m-3">
          <Button className="flex" isOutline={true} text="VIA EMAIL FORM" icon={<HiMail style={icoStyle} />} />

          <form onSubmit={handleSubmit} className="flex flex-col mt-3">
            <div className="flex flex-col space-y-4 relative">
              <label htmlFor="name" className="text-black bg-white px-1 z-10 absolute">
                Name
              </label>
              <input
                className="h-40 border border-black rounded-md px-3 relative z-0"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-4 mt-2 relative">
              <label htmlFor="email" className="text-black bg-white px-1 z-10 absolute">
                Email
              </label>
              <input
                className="h-40 border border-black rounded-md px-3 relative z-0"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-4 mt-2 relative">
              <label htmlFor="email" className="text-black bg-white px-1 z-10 absolute">
                Text
              </label>
              <textarea
                className="border border-black rounded-md px-3 relative"
                name="text"
                rows={8}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <button type="submit" style={{ background: loader ? '#ccc' : 'rgb(2, 2, 110)' }}>
              Submit
            </button>
            <div>
              {name + ' ' + text + ' ' + email}
            </div>
          </form>
        </div>
      </div>
      <div>
        <img src="/Images/nike.png" alt="yo" />
      </div>
    </div>
  );
};

export default Context;
