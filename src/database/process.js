import React from 'react';
import firebase from './firebase';

class database extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.username]: e.target.value
    });
  }

  addData = e => {
    const db = firebase.firestore();
    db.collection('user').add({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({
      username: '',
      password: ''
    });
  };

  getData = () => {
    const db = firebase.firestore();
    let tmppassword = ""
    db.collection('user').where('username', '==', this.state.username).get()
      .then(snapshot => {
        snapshot.forEach(doc => { tmppassword = doc.data().password });
        this.setState({ realpassword: tmppassword })
        if (this.state.password === tmppassword && this.state.password !== "" && this.state.username !== "") {
          this.props.history.push('/test');
        }
        if (this.state.password !== tmppassword && this.state.password !== "" && this.state.username !== "") {
          this.setState({
            passwordError: "Password is incorrect"
          });
        }
      })
      .catch(error => {
        console.log('Error!', error);
      })
  }
}
export default database;



