import * as React from 'react';

interface EditNameProps {
    user: {
        name: {
            first: string;
            last: string;
        };
    };
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditName: React.FC<EditNameProps> = ({ user, onChange }) => {
    return (
        <form>
            <label>
                First Name:
        <input
            type="text"
    name="first"
    value={user.name.first}
    onChange={onChange}
    />
    </label>
    <br />
    <label>
        Last Name:
        <input
            type="text"
    name="last"
    value={user.name.last}
    onChange={onChange}
    />
    </label>
    </form>
);
};

export default EditName;
