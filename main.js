import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import HelloSignEmbedded from './HelloSignEmbedded';

ReactDOM.render(
    <HelloSignEmbedded 
        clientId="client-id-123456789" // update with your client_id
        uxVersion={2}
        url="https://app.hellosign.com/editor/embeddedSign?signature_id=78caf2a1d01cd39cea2bc1cbb340dac3&token=b6b8e7deaf8f0b95c029dca049356d4a2cf9710a" //update with your sign_url
        inContainer={true} 
    />,
    document.getElementById('root')
);
