export default {
  reference: 'haircut',
  title: 'Coiffure',
  categories: [
    {
      reference: 'man',
      title: 'Homme',
      prestations: [
        { reference: 'man_shampoo', title: 'Shampoing', duration: 10, price: 400 },
        { reference: 'man_haircut', title: 'Coupe homme', duration: 30, price: 2990 },
        { reference: 'man_color', title: 'Couleur', duration: 45, price: 6090 },
        { reference: 'beard_trim', title: 'Taille de la barbe', duration: 15, price: 2000 },
      ],
    },
    {
      reference: 'woman',
      title: 'Femme',
      prestations: [
        { reference: 'woman_shampoo', title: 'Shampoing', duration: 10, price: 400 },
        { reference: 'woman_haircare', title: 'Soin profond', duration: 10, price: 1000 },
        { reference: 'woman_haircut', title: 'Coupe cheveux courts et mi-longs', duration: 30, price: 3290 },
        { reference: 'creative_haircut', title: 'Coupe cheveux longs', duration: 45, price: 4290 },
        { reference: 'brushing', title: 'Brushing (courts et mi-longs)', duration: 20, price: 3290 },
        { reference: 'brushing_long_hair', title: 'Brushing (longs)', duration: 40, price: 4290 },
        { reference: 'woman_color', title: 'Couleur (racines)', duration: 45, price: 6090 },
        { reference: 'woman_fullcolor', title: 'Couleur complète', duration: 75, price: 8090 },
        { reference: 'tie_and_dye', title: 'Ombré hair', duration: 90, price: 9090 },
        { reference: 'woman_streaks', title: 'Mèches', duration: 120, price: 8090 },
        { reference: 'woman_hair_highlighting', title: 'Balayage', duration: 120, price: 8090 },
        { reference: 'woman_hair_permanent', title: 'Permanente', duration: 120, price: 8090 },
        { reference: 'haircare_patina', title: 'Patine', duration: 15, price: 1990 },
        { reference: 'complex_brushing', title: 'Brushing élaboré', duration: 40, price: 4290 },
        {
          reference: 'evening_brushing',
          title: 'Coiffure de soirée (chignon, tresses, attaches…)',
          duration: 45,
          price: 5990,
        },
        { reference: 'sophisticated_hairdressing', title: 'Coiffure de mariée', duration: 90, price: 9900 },
        {
          reference: 'hairdressing_bride_with_test',
          title: 'Coiffure de mariage avec essai',
          duration: 90,
          price: 21900,
        },
        { reference: 'brazilian_smoothing', title: 'Lissage brésilien', duration: 180, price: 21900 },
      ],
    },
    {
      reference: 'child',
      title: 'Enfant',
      prestations: [
        { reference: 'child_haircut', title: 'Coupe enfant', duration: 20, price: 1790 },
        {
          reference: 'child_hairdressing',
          title: 'Coiffure enfant (chignon, tresse, attache...)',
          duration: 30,
          price: 3990,
        },
      ],
    },
  ],
};
