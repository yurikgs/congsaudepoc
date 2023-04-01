import AppLayout from '../../layouts/AppLayout/AppLayout';
import withAuthorization from '../../layouts/Authentication/withAuthorization';
import './Success.css'
function Success () {
    return(
         <AppLayout>
                <section>
                    <h1> You are Logged In </h1>
                </section>
         </AppLayout>
    );
} export default withAuthorization(Success);