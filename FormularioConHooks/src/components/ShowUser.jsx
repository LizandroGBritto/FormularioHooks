const ShowUser = (props) => {
    const {firstName, lastName, email, password, confirmPassword } = props.data;

    return (
        <div className="results-table">
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                </tr>
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{confirmPassword}</td>
                </tr>
            </table>
        </div>
    )
}

export default ShowUser;