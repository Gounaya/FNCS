import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
//import {md5} from "js-md5";
import 'bootstrap/dist/css/bootstrap.css';




export default class UserPanel extends React.Component<any, any> {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }
    
    static defaultProps = {
        firstName: 'Oussama',
        lastName: 'Gounaya',
        email: 'o.gounaya@gmail.com'
    }

    constructor(props:any) {
        super(props);
    }
    render() {
      const hash = md5(this.props.email);
  
       return (
       <div>
           <p className="red">First Name: {this.props.firstName}</p>
           <p style={{color: 'blue'}}>Last Name: {this.props.lastName}</p>
           <p className="green">Email: {this.props.email}</p>
           <img src={"https://www.gravatar.com/avatar/" + hash}/>
       </div>);
   }

}

