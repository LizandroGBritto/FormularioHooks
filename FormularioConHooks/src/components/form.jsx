import '../App.css';

const Form = (props) => {
    const { inputs, setInputs } = props;

    const viewUser = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value

        })
    }
    return (
        <form>
            <div className='inputs'>
                <label>Nombre: </label>
                <input type='text' name='firstName' onChange={viewUser} />
            </div>
            <div className='inputs'>
                <label>Apellido: </label>
                <input type='text' name='lastName' onChange={viewUser} />
            </div>
            <div className='inputs'>
                <label>Email: </label>
                <input type='email' name='email' onChange={viewUser} />
            </div>
            <div className='inputs'>
                <label>Password: </label>
                <input type='text' name='password' onChange={viewUser} />
            </div>
            <div className='inputs'>
                <label>Confirmar Password: </label>
                <input type='text' name='confirmPassword' onChange={viewUser} />
            </div>
        </form>
    );
    };


export default Form;