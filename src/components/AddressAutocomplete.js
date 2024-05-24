// src/components/AddressAutocomplete.js
import React, { useState, useEffect } from 'react';

const AddressAutocomplete = () => {
  const [addresses, setAddresses] = useState([{ id: 1, value: '' }]);

  useEffect(() => {
    addresses.forEach((address, index) => {
      const initAutocomplete = () => {
        const input = document.getElementById(`autocomplete-${address.id}`);
        if (input) {
          const autocomplete = new window.google.maps.places.Autocomplete(input, { types: ['geocode'] });
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            console.log('Selected place:', place);
          });
        }
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyABMxE4mIvnN6W_SA_lYddhJMa86pM4Iqk&libraries=places&callback=initAutocomplete`;
      script.async = true;
      script.defer = true;
      window.initAutocomplete = initAutocomplete;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    });
  }, [addresses]);

  const addAddressField = () => {
    setAddresses([...addresses, { id: addresses.length + 1, value: '' }]);
  };

  return (
    <div>
      <b>Addresses</b><br />
      {addresses.map((address) => (
        <input
          key={address.id}
          id={`autocomplete-${address.id}`}
          placeholder="Enter your address"
          type="text"
          style={{
            minWidth: '300px',
            maxWidth: '100%',
            width: '100%',
            padding: '10px',
            marginTop: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            display: 'block'
          }}
        />
      ))}
      {/* <button type="button" onClick={addAddressField}>Add Another Address</button> */}
    </div>
  );
};

export default AddressAutocomplete;
