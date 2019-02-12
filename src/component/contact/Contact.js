import React, {
	Component
} from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import {
	Link
} from 'react-router-dom';
import {
	connect
} from 'react-redux';
import {
	deleteContacts
} from '../../actions/contactActions';

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	onDeleteClick = id => {
		this.props.deleteContacts(id);
	};
	// onShowClick = e => {
	// 	onClick = {() => this.setState({
	// showContactInfo: !this.state.showContactInfo
	// })}
	// };

	// onDeleteClick = async (id, dispatch) => {
	// 	try {
	// 		await axios
	// 			.delete(`https://jsonplaceholder.typicode.com/users/$
	// 		{id}`)
	// 		dispatch({
	// 			type: 'DELETE_CONTACT',
	// 			payload: id
	// 		});
	// 	} catch (e) {
	// 		dispatch({
	// 			type: 'DELETE_CONTACT',
	// 			payload: id
	// 		});
	// 	}

	// };


	render() {

		const {
			id,
			name,
			email,
			phone
		} = this.props.c;
		const {
			showContactInfo
		} = this.state;



		return (
			<div className = "card card-body mb-3">
			<h4>
				{name} {' '}
				<i 
				//onClick = {this.onShowClick }
				onClick = {() => this.setState({
				showContactInfo: !this.state.showContactInfo
				})}
				className = "fas fa-sort-down" 
				style = {{cursor:'pointer'}}/>
				<i 
				className = "fas fa-times" 
				style = {{color:"red", 
						  cursor:"pointer",
						  float:"right"
						  }}
				onClick = {this.onDeleteClick.bind
					(this,id)}
				/>

				<Link to = {`contact/edit/${id}`}>
				<i 
				className = 'fas fa-pencil-alt'
				style = {{
					cursor : "pointer",
					float : 'right',
					color : "black",
					marginRight :'1rem'
				}}>
				</i>
				</Link>
			</h4>
			{showContactInfo ? (
				<ul className = "list-group">
					<li className= "list-group-item">Email:{email}</li>
					<li className= "list-group-item">Phone:{phone}</li>
				</ul>
				) : null}
			
			</div>

		)
	}
}


Contact.propTypes = {
	c: PropTypes.object.isRequired,
};


// export default Contact
export default connect(null, {
	deleteContacts
})(Contact);