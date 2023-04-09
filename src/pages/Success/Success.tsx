import AppLayout from '../../layouts/AppLayout/AppLayout';
import withAuthorization from '../../layouts/Authentication/withAuthorization';
import FocusLayout from '../../layouts/FocusLayout/FocusLayout';
import './Success.css'
function Success () {
    return(
         <FocusLayout title='Success Test page'>
                <section>
                    <h1> You are Logged In </h1>
                </section>
         </FocusLayout>
    );
} export default withAuthorization(Success);