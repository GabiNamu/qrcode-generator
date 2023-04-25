import { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

function App() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setqrcodeLink] = useState('');

  const handleQrcode = ({ target }) => {
    setLink(target.value)
    handleGenerate(target.value)
  }

  const handleGenerate= (link_url) => {
   QRCodeLink.toDataURL(link_url, {
    width: 600,
    margin: 3,
   }, (err, url) => {
     setqrcodeLink(url);
   })
  }

  return (
    <div className="container">
      <QRCode
      value={ link } className='qrcode'/>
      <input 
      className="input"
      value={ link }
      onChange={(e) => handleQrcode(e)}
      placeholder='Digite seu link...' />
      <a href={ qrcodeLink } download={'qrcode.png'} className='download-link'>
        Baixar QrCode
      </a>
    </div>
  );
}

export default App;
