import { useContext } from 'react';
import { UserContext } from '../lib/context/userContext';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer/Footer';

function SecuredLayout(props) {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Header title={props.title} />
      <Nav title={props.title} />
      {props.children}
      <Footer />
    </>
  );
}
export default SecuredLayout;