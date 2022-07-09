import React from 'react';
import * as images from '@exampleAssets';

export default [
  {
    title: 'Learn how to use this guide',
    description: 'Last edited 2 days ago by Eugene Jenkins',
    isAdmin: true,
    icon: {
      color: 'blue',
      name: 'love'
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
      color: 'indigo',
      name: 'image_picture'
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
      color: 'red',
      name: 'container'
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
      color: 'green',
      name: 'edit'
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
    title: 'Let\'s Make a Plan for Improvement',
    description: 'Last edited a week ago by Erik Page',
    icon: {
      color: 'orange',
      name: 'gallery_grid_view'
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
    title: 'Monitor Your Progress Through Tracking',
    description: 'Last edited a week ago by Myrtie Greer',
    icon: {
      color: 'indigo',
      name: 'image_picture'
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
    title: 'How to setup 1170px grid in Sketch',
    description: 'Last edited a week ago by Myrtie Greer',
    icon: {
      name: 'multitasking',
      color: 'orange'
    },
    users: [
      {
        imgUrl: images.a02,
        rightEl: <img alt="like" src={images.ua02} />
      }
    ]
  }
];
