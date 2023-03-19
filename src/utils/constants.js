import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      ' Mythila aims at bringing the essence and culture of Madhubani Art closer to its customers with the most organic and eco-friendly paintings and products!',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Our Vision is to provide a gateway to regenerate the art forms from the most ancient times so that these impeccable art pieces are never lost!',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Madhubani is said to have developed in the ancient city of Mithila, the birth place of Sita. It is said that the Mithila paintings were commissioned by the king.',
  },
]

export const products_url = 'https://elemental-hollow-bellflower.glitch.me/cats'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
