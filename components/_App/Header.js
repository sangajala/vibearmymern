import { Menu, Container, Icon, Image} from 'semantic-ui-react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


function Header({ user }) { 
  //console.log(user);

  const router = useRouter();
  const isRoot = user &&  user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin
  //const user = false;

  function isActive(route) {
    return route === router.pathname;
  }
 




  return (
     <Menu stackable fluid id="menu" inverted >
      <Container  text>
        <Link href ="/">
            <Menu.Item header active = {isActive('/')}>
               <Image 
                  size = "mini"
                  src = "/static/logo-web.png"
                  style ={{ marginRight: '1em'}}

               />
               VibeArmy
             </Menu.Item>
        </Link>

   

        <Link href ="/allvideos">
            <Menu.Item header active = {isActive('/allvideos')}>
              <Icon 
                name="video"
                size="large"
              
              />

             All Videos
             </Menu.Item>
        </Link>
       
       

       { isRootOrAdmin && (
        <Link href ="/uploadvideo">
            <Menu.Item header active = {isActive('/uploadvideo')}>
              <Icon 
                name="upload"
                size="large"
              
              />

             Upload Video
             </Menu.Item>
        </Link>
        )}


        <Link href ="/cart">
            <Menu.Item header active = {isActive('/cart')}>
              <Icon 
                name="shopping cart"
                size="large"
              
              />

             Cart
             </Menu.Item>
        </Link>

       {user ? (<>
        <Link href ="/account">
            <Menu.Item header active = {isActive('/account')}>
              <Icon 
                name="user"
                size="large"
              
              />

             Account
             </Menu.Item>
        </Link>

       
            <Menu.Item onClick={handleLogout} header >
              <Icon 
                name="sign out"
                size="large"
              
              />

             Log Out
             </Menu.Item>
       
           </>)
            :
           (<>
          <Link href ="/login">
            <Menu.Item header active = {isActive('/login')}>
              <Icon 
                name="sign in"
                size="large"
              
              />

             Login
             </Menu.Item>
          </Link>

          <Link href ="/signup">
            <Menu.Item header active = {isActive('/signup')}>
              <Icon 
                name="signup"
                size="large"
              
              />

             Signup
             </Menu.Item>
          </Link>
       </>)}


     
      </Container>

    </Menu>
  );
}

export default Header;
