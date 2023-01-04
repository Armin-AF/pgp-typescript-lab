import * as React from 'react';
import EditName from "./EditName";

interface User {
    name: {
        first: string;
        last: string;
    };
    dob: {
        age: number;
    };
    email: string;
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
    };
}

interface UserInfoState {
    user: User | null;
    editMode: boolean;
}

class UserInfo extends React.Component<{}, UserInfoState> {
    state: UserInfoState = {
        user: null,
        editMode: false
    };

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser = () => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                this.setState({ user });
            });
    }

    toggleEditMode = () => {
        this.setState(prevState => ({
            editMode: !prevState.editMode
        }));
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // @ts-ignore
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                name: {
                    ...prevState.user.name,
                    [name]: value
                }
            }
        }));
    };

    render() {
        const { user, editMode } = this.state;

        if (!user) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                {editMode ? (
                    <EditName user={user} onChange={this.handleChange} />
                ) : (
                    <div>
                        <h2>User Information</h2>
                        <p>Name: {`${user.name.first} ${user.name.last}`}</p>
                        <p>Age: {user.dob.age}</p>
                        <p>Email: {user.email}</p>
                        <h3>Address</h3>
                        <p>
                            {user.location.street.number} {user.location.street.name}
                        </p>
                        <p>
                            {user.location.city}, {user.location.state} {user.location.postcode}
                        </p>
                        <p>{user.location.country}</p>
                    </div>
                )}
                <button onClick={this.toggleEditMode}>
                    {editMode ? 'Submit' : 'Edit Name'}
                </button>
            </div>
        );
    }
}

export default UserInfo;
