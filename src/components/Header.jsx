import { addName } from "../redux/headerSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch()
    const name = useSelector((state) => state.header.name)

    const changeName = () => {
        let input = document.getElementById("nameInput")
        dispatch(addName(input.value))
        input.value = ""
    }

    console.log(name)
    return ( 
        <div className="header">
            <h1>Hello {name}</h1>
            {!name && <div>
                <input type="text" name="nameInput" placeholder="whats your name?" id="nameInput" />
                <button onClick={changeName}>add</button>
            </div>}
            
        </div>
     );
}
 
export default Header;