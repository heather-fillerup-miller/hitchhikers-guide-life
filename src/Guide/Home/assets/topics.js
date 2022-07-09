import React from 'react';
import * as images from '@exampleAssets';

export default [
  {
    title: 'Learn how to use this guide',
    description: 'Last completed 2 days ago by',
    taskNo: 1,
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
    description: 'Last completed 3 days ago by',
    taskNo: 2,
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
    description: 'Last completed 4 hours ago by',
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
    description: 'Last completed 1 hour ago by',
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
    description: 'Last completed 12 hours ago by',
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
