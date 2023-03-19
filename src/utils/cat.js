// const  cat = [
//     { id: 1, name: 'Paintings', image: 'https://i.ibb.co/fFf62HW/Artboard-3.png',price: '100',featured:true, },
//     { id: 2, name: 'Notebooks', image: 'https://i.ibb.co/ZgvQK8n/Artboard-3-copy.png',price: '200',featured:true ,},
//     { id: 3, name: 'Toys', image:'https://i.ibb.co/M9RgHpg/Artboard-3-copy-2.png' ,price: '500',featured:true, },
// ];
// export default cat; 
const product_data = [
    {
      "id": "1",
      "name": "Kari Line Art",
      "price": 25,
      "image": "https://i.ibb.co/BBf0nCM/4.jpg",
      "colors": [
        "#ff0000",
        "#00ff00",
        "#0000ff"
      ],
      "company": "marcos",
      "description": "This trendy showpiece is intricately designed using monochromatic line art and uses its detailed features to represent the symbol of luck and prosperity - the elephant. The painting therefore makes elegant use of Mithila Art to depict elephant in nature.",
      "category": "picture",
      "shipping": true
    },
    {
        "id": "2",
        "name": "Wall Art",
        "price": 25,
        "image": "https://i.ibb.co/fFf62HW/Artboard-3.png",
        "colors": [
          "#ff0000",
          "#00ff00",
          "#0000ff"
        ],
        "company": "marcos",
        "description": "These wall art pieces are designed to showcase the elegant flora and fauna present around us. With the use of sophisticated features of Madhubani Art, the vibrance of nature is portrayed.",
        "category": "picture",
        "shipping": true,
        "featured":true,
      },
    {
      "id": "3",
      "name": "Handmade Fish Journal",
      "price": 109999,
      "image": "https://i.ibb.co/9bHjw9C/Notebook1.jpg",
      "colors": [
        "#000",
        "#ffb900"
      ],
      "company": "liddy",
      "description": "This beautiful composition notebook has been handcrafted by the artists of Bihar. Fish, symbolized as the faithful submerged in the waters of life, is handmade on this soft cover to let you express your creativity in any way you want",
      "category": "notebook"
    },
    {
      "id": "4",
      "name": "Hand-Painted Radha Journal",
      "price": 399,
      "image": "https://i.ibb.co/LYPmr8f/Notebook1.jpg",
      "colors": [
        "#ffb900",
        "#0000ff"
      ],
      "company": "liddy",
      "description": "This graceful creation notebook is easily accessible for work and travel. In the bhakti (devotional) movement of Vaishnavism, the female, Radha, is sometimes interpreted as symbolizing the human soul as depicted by her joyful nature on this cover. ",
      "category": "notebook"
    },
    {
      "id": "5",
      "name": "Handmade Matsya(The Fish)",
      "price": 12,
      "image": "https://i.ibb.co/3SnFHq8/Matsya.jpg",
      "colors": [
        "#000",
        "#00ff00",
        "#0000ff"
      ],
      "company": "marcos",
      "description": "This colorful Madhubani Journal is inspired by a digital drawing of Matsya or the Fish which represents fertility, luck and prosperity. Madhubani, being one of the most famous traditional art forms, represents real-life aspects beautifully with a touch of our Indian heritage.",
      "category": "notebook",
      "shipping": true
    },
    {
      "id": "6",
      "name": "Hand-Painted Guitar",
      "price": 42999,
      "image": "https://i.ibb.co/MVnhW89/Notebook5.jpg",
      "colors": [
        "#00ff00",
        "#0000ff",
        "#ff0000"
      ],
      "company": "ikea",
      "description": "This fancy composition journal symbolizes survival and the joy of life - a guitar. The modern depiction of music, combined with the rich Madhubani art form transforms this piece into a scrapbook or sketchbook where you can save your beautiful moments. ",
      "category": "notebook",
      "shipping": true
    },
    {
      "id": "7",
      "name": "emperor bed",
      "price": 23999,
      "image": "https://images2.imgbox.com/ba/e2/q0XmH4ZV_o.jpeg",
      "colors": [
        "#0000ff",
        "#000"
      ],
      "company": "ikea",
      "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      "category": "bedroom",
      "shipping": true
    },
    {
      "id": "8",
      "name": "Hand-Painted Krishna Journal",
      "price": 59,
      "image": "https://i.ibb.co/T1H8G3Q/Notebook4.jpg",
    
      "colors": [
        "#000",
        "#ff0000"
      ],
      "company": "caressa",
      "description": "This classy composition notebook has been handcrafted to showcase Lord Krishna - the god of protection, compassion, tenderness, and love. His love for music and playing the flute is illustrated in this soft cover journal, and your ideas, poetry and love for writing can be expressed in this journal too!",
      "category": "notebook",
      "shipping": true
    },
    {
      "id": "9",
      "name": "Hand-Painted A5 Notebooks",
      "price": 39999,
      "image": "https://i.ibb.co/ZgvQK8n/Artboard-3-copy.png",
      "featured": true,
      "colors": [
        "#000",
        "#00ff00"
      ],
      "company": "ikea",
      "description": "These hand-painted A5 notebooks  can be used as journals, notebooks, sketchbooks, or albums to stick travel photos onto to make a collage and reliving your most special memories! You can carry them in style and get compliments everywhere you go!",
      "category": "office",
      "shipping": true
    },
    {
      "id": "10",
      "name": "Handmade Duck Journal",
      "price": 20099,
      "image": "https://i.ibb.co/qd8KtCw/Notebook8.jpg",
      "colors": [
        "#ff0000",
        "#ffb900",
        "#00ff00"
      ],
      "company": "caressa",
      "description": "Ducks, with playful and cheerful disposition symbolize a care-free nature and depict the small delights in life. You too can express your thoughts and feelings in this Mithila handcrafted journal and carry this compact-sized notebook around to your favorite places. ",
      "category": "notebook"
    },
    {
      "id": "11",
      "name": "leather sofa",
      "price": 99999,
      "image": "https://images2.imgbox.com/9e/54/5V5iZwX4_o.jpeg",
      "colors": [
        "#00ff00",
        "#0000ff"
      ],
      "company": "caressa",
      "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      "category": "office"
    },
    {
      "id": "12",
      "name": "Handmade Leaf Journal",
      "price": 31999,
      "image": "https://i.ibb.co/X8SpMb6/Notebook9.jpg",
      
      "colors": [
        "#ffb900",
        "#ff0000",
        "#00ff00"
      ],
      "company": "caressa",
      "description": "Madhubani Art depicts leaves in a simplistic way, symbolizing fertility and growth. The monochromatic leaves of spring and summer depict hope, renewal and revival. Make sure to grab this latest composition journal and flaunt your new art piece notebook in front of your friends and colleagues.",
      "category": "notebook"
    },
    {
      "id": "13",
      "name": "Handmade Lotus Mandala",
      "price": 3099,
      "image": "https://i.ibb.co/F4sqWr5/Notebook10.jpg",
      "colors": [
        "#000"
      ],
      "company": "liddy",
      "description": "This crafty Madhubani composition of lotus flower is a symbol of rising above the material world. It's a way to reach a new level of union with the spiritual universe. Just as lotus carries this significance, we invite you to use planner to write poems, stories and memories of your own!",
      "category": "notebook",
      "shipping": true
    },
    {
      "id": "14",
      "name": "Hand-Painted Bird Art",
      "price": 30999,
      "image": "https://i.ibb.co/jgxL3sx/Notebook22.webp",
      "colors": [
        "#00ff00"
      ],
      "company": "ikea",
      "description": "This fashionate creation of birds, which usually symbolize longevity, grace and freedom, is an impeccable use of Madhubani Art to show the life of nature and the purity of it. You can use these journals however you want and even use the cover as an art piece on its own.",
      "category": "notebook"
    },
    {
      "id": "15",
      "name": "Hand-Painted Soma Art",
      "price": 109999,
      "image": "https://i.ibb.co/XZg91FH/Notebook20.webp",
      "colors": [
        "#0000ff"
      ],
      "company": "liddy",
      "description": "This elegant art piece notebook merges the symbol of the moon - representing the cyclical nature of life along with the unique handmade art of Madhubani artist. You can easily use it for free writings, doodles, paintings and poetry writings!",
      "category": "notebook",
      "shipping": true
    },
    {
      "id": "16",
      "name": "Hand-Painted Radha-Krishna",
      "price": 129999,
      "image": "https://i.ibb.co/nLj05FD/Notebook18.webp",
      "colors": [
        "#00ff00",
        "#ffb900"
      ],
      "company": "marcos",
      "description": " Radha-Krishna symbolize divine love and sacrifice, they represent the union of two vibrant deities. You can gift this intricate journal to your loved ones and let the creative juices flow wild and free as they make use of it to paint, sketch and doodle!",
      "category": "notebook",
      "shipping": true
    },
    {
      "id": "17",
      "name": "suede armchair",
      "price": 15999,
      "image": "https://images2.imgbox.com/a2/e2/eiCS6eiw_o.jpeg",
      "colors": [
        "#ffb900"
      ],
      "company": "caressa",
      "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
      "category": "office"
    },
    {
      "id": "18",
      "name": "Hand-Painted Surya Art",
      "price": 79999,
      "image": "https://i.ibb.co/bgVFR7B/Notebook15.webp",
      
      "colors": [
        "#ff0000",
        "#00ff00"
      ],
      "company": "liddy",
      "description": " Just as the Sun illuminated our world, you can also illuminate your world by using this pretty Surya composition notebook and using your calligraphy, artistic, sketching, or poetry skills to build a personal world inside this crafty notebook.",
      "category": "living room"
    },
    {
      "id": "19",
      "name": "Hand-Painted Vivah Journal",
      "price": 120999,
      "image": "https://i.ibb.co/GVMQmFg/Notebook13.webp",
      
      "colors": [
        "#ff0000"
      ],
      "company": "marcos",
      "description": " This impeccable artpiece journal can be carried in style and compliments everywhere you go! Its handy size makes it travel-friendly while the blank pages allow space for freedom of expression. Feel free to frame the artwork once you’re done with the notebook to adorn your walls!",
      "category": "office"
    },
    {
      "id": "20",
      "name": "Paper Mache Handcrafted",
      "price": 250099,
      "image": "https://i.ibb.co/M9RgHpg/Artboard-3-copy-2.png",
      "featured":true,
      "colors": [
        "#000",
        "#ffb900"
      ],
      "company": "ikea",
      "description": "This beautifully handcrafted paper mache uses composite materials consisting of paper pieces of pulp reinforced with textiles, to create the most flawless showpieces which you can keep for home decor and adorn showcasing traditional Madhubani art culture.",
      "category": "toy"
    },
  ]

export default product_data