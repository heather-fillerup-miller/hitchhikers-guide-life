import React from 'react';
import * as images from '@images';

export default [
  {
    title: 'Learn About New Features',
    description: 'Spotlight: You can create a daily meal plan',
    social: 'Completed 2 days ago by',
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
    description: 'Make your actions more personal by completing your profile',
    social: 'Completed 3 days ago by',
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
    description: 'Generate recipes for Breakfast, Lunch and Dinner based on your health profile',
    social: 'Completed 4 hours ago by',
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
    description: "Generate a workout schedule based on your health profile settings",
    social: 'Completed 1 hour ago by',
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
    title: 'Make a Stress Relief Plan for Today',
    description: "Generate a stress relief schedule based on your stress profile settings",
    social: 'Completed 12 hours ago by',
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
    description: "Generate a fiancial plan based on your finance profile settings",
    social: 'Completed 12 hours ago by',
    taskNo: 5,
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
