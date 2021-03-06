import { Router } from 'express';
import { retrieveWishList } from './../controllers/gift-controller';


const router = Router();

router.post('/', (req, res) => {
  res.json({
    user: {
      userId: 202,
      name: 'Michael',
      email: 'michael@dundermifflin.com',
      profileImage: 'www.featherlessbird.com',
    },
    besties: [
      {
        id: 0,
        name: 'Adam'
      },
      {
        id: 1,
        name: 'Angelynn'
      },
      {
        id: 2,
        name: 'Jackie'
      },
    ],
    shoppingList: [
      {
        id: 0,
        label: 'test1',
        status: 'available'
      },
      {
        id: 1,
        label: 'test2',
        status: 'purchased'
      },
    ],
    wishList: [
      {
        id: 1,
        label: 'Mario Cart',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      },
      {
        id: 2,
        label: 'Mario Cart2',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      },
      {
        id: 3,
        label: 'Mario Cart3',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      },
      {
        id: 4,
        label: 'Mario Cart4',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      },
      {
        id: 5,
        label: 'Mario Cart5',
        description: 'The best game of all time',
        link: 'www.mariorulz.com'
      }
    ]
  });
});

router.get('/search', (req, res) => {
  res.json([
    {
      id: 0,
      name: 'Adam',
      status: 'accepted'
    },
    {
      id: 1,
      name: 'Angelynn',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Jackie',
      status: 'unknown'
    }
  ]);
});

router.get('/friend/:id', retrieveWishList, (req, res) => {

  res.status(200).json(res.locals.wishList);

});

export default router;
