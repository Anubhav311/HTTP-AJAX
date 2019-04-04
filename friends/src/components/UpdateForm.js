import  React from 'react';

class UpdateForm extends React.Component {
    constructor() {
        super()
        this.state = {
            formItems: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    changeHandler = (event) => {
        event.persist();
        this.setState(prevState => ({
            formItems: {
              ...prevState.formItems,
              [event.target.name]: event.target.value
            }
        }));
        console.log(this.state.formItems[event.target.name])
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateFriend(this.state.formItems);
        this.setState({
            formItems: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name" 
                    onChange={this.changeHandler}
                    value={this.state.formItems.name}
                />
                <input 
                    name="age" 
                    onChange={this.changeHandler}
                    value={this.state.formItems.age}
                />
                <input 
                    name="email" 
                    onChange={this.changeHandler}
                    value={this.state.formItems.email}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default UpdateForm;