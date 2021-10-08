import './Home.css';

function SignIn() {
  return (
    <div className="margin">
        <center>
        <tr>
            <td>Username : </td>
            <td><input name="username" placeholder="Username" type="text"></input></td>
        </tr>
        <tr>
            <td>Password : </td>
            <td><input name="password" type="password" placeholder="Password"></input></td>
        </tr>
        <tr>
            <td colSpan="2"><input type="submit" name="signin" value="Login"></input></td>
        </tr>
        </center>
    </div>
  );
}

export default SignIn;
