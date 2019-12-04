import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';

export default class UserPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      const hash = md5(this.props.email);
  
       return (
       <div>
           <p style={{color: 'red'}}>First Name: {this.props.firstName}</p>
           <p style={{color: 'blue'}}>Last Name: {this.props.lastName}</p>
           <p style={{color: 'green'}}>Email: {this.props.email}</p>
           <img src={"https://www.gravatar.com/avatar/" + hash}/>
       </div>);
   }

}

UserPanel.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

UserPanel.defaultProps = {
    firstName: 'Oussama',
    lastName: 'Gounaya',
    email: 'o.gounaya@gmail.com'
}