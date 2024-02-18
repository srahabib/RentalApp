import React from 'react';

export const getStaticProps = async () => {
    const res = await fetch('http://ec2-54-158-135-122.compute-1.amazonaws.com:3000/user/all');
    const data = await res.json();

    return {
        props: { users : data }
    }
}

const Fetch = ({ users }) => {
    return (    
        <div>
            <h1>Fetch</h1>

            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.email}</h3>
                    <p>{user.address}</p>
                </div>
            ))}
        </div>
    );
}

export default Fetch;