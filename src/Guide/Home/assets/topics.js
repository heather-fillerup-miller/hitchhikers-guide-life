import React from 'react';
import * as images from '@exampleAssets';

export default [
  {
    title: 'Learn how to use this guide',
    description: 'Last edited 2 days ago by Eugene Jenkins',
    isAdmin: true,
    icon: {
      color: 'blue',
      name: 'inbox_paper_round'
    },
    users: [
      {
        imgUrl: images.a01,
        rightEl: <img alt="like" src={images.ua02} />
      },
      {
        imgUrl: images.a03,
        rightEl: <img alt="comment" src={images.ua01} />
      }
    ]
  },
  {
    title: 'Create Your Profile',
    description: 'Last edited 3 days ago by Erik Page',
    icon: {
      color: 'blue',
      name: 'inbox_paper_round'
    },
    users: [
      {
        imgUrl: images.a04,
        rightEl: <img alt="comment" src={images.ua01} />
      },
      {
        imgUrl: images.a01,
        rightEl: <img alt="comment" src={images.ua01} />
      }
    ]
  },
  {
    title: 'Define Your Goals',
    description: 'Last edited a week ago by Joana Jenkins',
    icon: {
      color: 'blue',
      name: 'inbox_paper_round'
    },
    users: [
      {
        imgUrl: images.a03,
        rightEl: <img alt="comment" src={images.ua01} />
      },
      {
        imgUrl: images.a02,
        rightEl: <img alt="comment" src={images.ua01} />
      }
    ]
  },
  {
    title: 'Tell Us About Your Interests',
    description: 'Last edited a week ago by Todd Singleton',
    icon: {
      color: 'blue',
      name: 'inbox_paper_round'
    },
    isAdmin: true,
    users: [
      {
        imgUrl: images.a04,
        rightEl: <img alt="like" src={images.ua02} />
      },
      {
        imgUrl: images.a02,
        rightEl: <img alt="comment" src={images.ua01} />
      }
    ]
  },
  {
    title: 'Let\'s Make a Diet Plan',
    description: 'Last edited a week ago by Erik Page',
    icon: {
      color: 'violet',
      name: 'stats'
    },
    users: [
      {
        imgUrl: images.a03,
        rightEl: <img alt="comment" src={images.ua01} />
      },
      {
        imgUrl: images.a01,
        rightEl: <img alt="like" src={images.ua02} />
      }
    ]
  },
  {
    title: 'Let\'s Make a Fitness Plan',
    description: 'Last edited a week ago by Myrtie Greer',
    icon: {
      color: 'violet',
      name: 'stats'
    },
    users: [
      {
        imgUrl: images.a03,
        rightEl: <img alt="like" src={images.ua02} />
      },
      {
        imgUrl: images.a02,
        rightEl: <img alt="like" src={images.ua02} />
      }
    ]
  },
  {
    title: 'Let\'s Make a Financial Plan',
    description: 'Last edited a week ago by Myrtie Greer',
    icon: {
      color: 'green',
      name: 'money_round'
    },
    users: [
      {
        imgUrl: images.a02,
        rightEl: <img alt="like" src={images.ua02} />
      }
    ]
  }
];
