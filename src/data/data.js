import { v4 as uuidv4 } from 'uuid';

export const blogArticle = [
  {
    id: uuidv4(),
    mission: 'WAC Corporal',
    year: '1946',
    description: 'It was the first rocket that reached the edge of space.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/WAC_Corporal',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f6/Frank_Malina_with_WAC_Corporal_rocket_at_White_Sands.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'V-2',
    year: '1946',
    description:
      'The first pictures of the Earth were taken from an altitude of 105 km.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/V-2_rocket',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6d/Fus%C3%A9e_V2.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'R-1',
    year: '1951',
    description: 'First time dogs were sent to space.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/R-1_(missile)',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/43/1-%D0%BF%D1%83%D1%81%D0%BA%D1%83-%D0%BF%D0%BE%D1%81%D0%B2%D1%8F%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F_1S.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'R-7',
    year: '1957',
    description: 'First intercontinental Ballistic Missile (ICBM) developed.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/R-7_Semyorka',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/2b/Russia-Moscow-VDNH-Rocket_R-7-1.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Sputnik 1',
    year: '1957',
    description: 'First artificial satellite.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Sputnik_1',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Sputnik_asm.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Sputnik 2',
    year: '1957',
    description: 'First animal (dog named Laika) sent to the orbit.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Sputnik_2',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/33/Laika_ac_Sputnik_2_Replica_%286995685051%29.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Explorer 6',
    year: '1959',
    description: 'First photograph of Earth taken from the orbit.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Explorer_6',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Explorer_6_paddles_up.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Vostok I',
    year: '1961',
    description: 'First manned flight carrying Yuri Gagarin.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Vostok_1',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/d/df/Vostok_spacecraft.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'OSO-1',
    year: '1962',
    description: 'First orbital solar observatory.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Orbiting_Solar_Observatory',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/OSO4.gif',
    },
  },
  {
    id: uuidv4(),
    mission: 'Vostok 6',
    year: '1963',
    description: 'First woman in space (Valentina Tereshkova).',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Vostok_6',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/49/Vostok_6_capsule_on_display%2C_2016.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Luna 10',
    year: '1966',
    description: 'First artificial satellite around the Moon.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Luna_10',
      image:
        'https://www.thehindu.com/children/18cp6f/article26711531.ece/ALTERNATES/LANDSCAPE_1200/31istbluna10JPG',
    },
  },
  {
    id: uuidv4(),
    mission: 'Apollo 8',
    year: '1968',
    description: 'First piloted orbital mission of Moon.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Apollo_8',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/NASA-Apollo8-Dec24-Earthrise.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Apollo 11',
    year: '1969',
    description:
      'First human on the Moon and first space launch from a celestial body.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Apollo_11',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/98/Aldrin_Apollo_11_original.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Luna 16',
    year: '1970',
    description: 'First automatic sample return from the Moon.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Luna_16',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Luna_16.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Salyut 1',
    year: '1971',
    description: 'First space station.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Salyut_1',
      image: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Salyut_1.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Pioneer 10',
    year: '1972',
    description:
      'First human made object that had been sent on escape trajectory away from the Sun.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Pioneer_10',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/An_artist%27s_impression_of_a_Pioneer_spacecraft_on_its_way_to_interstellar_space.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Mariner 10',
    year: '1974',
    description: 'First photograph of Venus from Space.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Mariner_10',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/60/Mariner10.gif',
    },
  },
  {
    id: uuidv4(),
    mission: 'Venera 13',
    year: '1982',
    description:
      'First Venus soil samples and sound recording of another world.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Venera_13',
      image:
        'https://heasarc.gsfc.nasa.gov/Images/misc_missions/venera13_small.gif',
    },
  },
  {
    id: uuidv4(),
    mission: 'STS-41-B',
    year: '1984',
    description: 'First untethered spacewalk, Bruce McCandless II.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/STS-41-B',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/91/Bruce_McCandless_II_during_EVA_in_1984.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'Voyager 1',
    year: '1990',
    description: 'First photograph of the whole Solar System.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Voyager_1',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/60/Voyager_spacecraft_model.png',
    },
  },
  {
    id: uuidv4(),
    mission: 'Mir',
    year: '1995',
    description:
      'First Record longest duration spaceflight set by Valeri Polyakov.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/Mir',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/09/Mir_Space_Station_viewed_from_Endeavour_during_STS-89.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'HALCA',
    year: '1997',
    description: 'First orbital radio observatory.',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/HALCA',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/67/Haruka_HALCA_VSOP_MUSES-B.jpg',
    },
  },
  {
    id: uuidv4(),
    mission: 'NEAR Shoemaker',
    year: '2000',
    description: 'First orbiting of an asteroid (433 Eros).',
    links: {
      wiki: 'https://en.wikipedia.org/wiki/NEAR_Shoemaker',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/NEAR_Shoemaker_spacecraft_model.png',
    },
  },
];
