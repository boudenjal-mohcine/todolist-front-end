import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    console.log( useSelector((state:any) => state.auth));

    return (   <>

        <h2>Hello user</h2>
    
    </>  );
}
 
export default Home;