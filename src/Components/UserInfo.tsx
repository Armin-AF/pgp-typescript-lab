import * as React from 'react';

interface User {
    name: {
        first: string;
        last: string;
    };
    dob: {
        age: number;
    };
    email: string;
}

interface UserInfoState {
    user: User | null;
}

class UserInfo extends React.Component<{}, UserInfoState> {
    state: UserInfoState = {
        user: null
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

    render() {
        const { user } = this.state;

        if (!user) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h2>User Information</h2>
                <p>Name: {`${user.name.first} ${user.name.last}`}</p>
                <p>Age: {user.dob.age}</p>
                <p>Email: {user.email}</p>
            </div>
        );
    }
}

export default UserInfo;
