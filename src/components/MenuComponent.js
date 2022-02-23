import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'ciskopizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Sénégal'
                },
                {
                    id: 1,
                    name: 'Cheesecake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Sénégal'

                },
                { 
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Sénégal'
    
                },
                {
                    id: 3,
                    name: 'Buffet',
                    image: 'assets/images/buffet.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Sénégal'

                },
            ]
        }
    }

    render(){

        const menu = this.state.dishes.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 mt-5">
                <Media tags="li">
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name}/>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
               </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
           </div>
        );
    }
}

export default Menu;
