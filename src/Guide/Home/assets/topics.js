import React from 'react';
import * as images from '@exampleAssets';

export default [
  {
    title: 'Learn how to use this guide',
    description: 'Completed 2 days ago by',
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
    title: 'Update Your Profile and Goals',
    description: 'Completed 3 days ago by',
    taskNo: 1,
    letsDoItUrl: '/guide/profile',
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
    title: 'Make a Diet Plan for Today',
    description: 'Completed 4 hours ago by',
    taskNo: 2,
    letsDoItUrl: '/guide/diet',
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
    title: 'Make a Fitness Plan for Today',
    description: 'Completed 1 hour ago by',
    taskNo: 3,
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
    title: 'Make a Mental Wellness Plan for Today',
    description: 'Completed 12 hours ago by',
    taskNo: 4,
    icon: {
      color: 'red',
      name: 'view_simple'
    },
    users: [
      {
        imgUrl: images.a02,
        rightEl: <img alt="like" src={images.ua02} />
      }
    ]
  },
  {
    title: 'Make a Financial Wellness Plan for Today',
    description: 'Completed 12 hours ago by',
    taskNo: 4,
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
