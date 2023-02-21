import {v4 as uuidv4} from "uuid";


const DefaultRewards = [
    {
        id: uuidv4(),
        title: 'Coffee',
        cost: 20,
        image: '/rewardsImages/coffee.png'
    },
    {
        id: uuidv4(),
        title: 'Cake',
        cost: 40,
        image: '/rewardsImages/cake.png'
    },
    {
        id: uuidv4(),
        title: 'Book',
        cost: 100,
        image: '/rewardsImages/book.png'
    },
    {
        id: uuidv4(),
        title: 'Take out',
        cost: 100,
        image: '/rewardsImages/sushi.png'
    },
    {
        id: uuidv4(),
        title: 'Shopping',
        cost: 200,
        image: '/rewardsImages/perfume.png'
    },
]
export default DefaultRewards