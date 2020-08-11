import { Header, Segment, Button, Icon } from 'semantic-ui-react';

function CartItemList() {
     const user = false;

  return (
    <Segment secondary color="blue" inverted  textAlign="center" placeholder>
       
       <Header icon>
          <Icon name="shopping basket" />
             No videos In Cart
       </Header>
       <div>
          {user ? (
             <Button color="red">
               View Videos
             </Button>
          ) :(
            <Button color="red">
              Login To Add Videos
            </Button>
          )}
       </div>
  
    </Segment>
  )
}

export default CartItemList;
