/*jshint strict:false*/
/*globals console*/
var records = [
  {
    "Author": "Prince, Adena E.",
    "Date": "11/06/12",
    "Comment": "vitae, posuere at, velit. Cras lorem lorem,",
    "Color": "blue"
  },
  {
    "Author": "Terry, Ashely K.",
    "Date": "08/03/13",
    "Comment": "volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla",
    "Color": "purple"
  },
  {
    "Author": "Johnston, Dieter W.",
    "Date": "24/09/11",
    "Comment": "Nam interdum enim non nisi. Aenean eget metus. In nec",
    "Color": "blue"
  },
  {
    "Author": "Little, Jasmine J.",
    "Date": "18/03/12",
    "Comment": "Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim",
    "Color": "purple"
  },
  {
    "Author": "Potts, Elliott T.",
    "Date": "11/01/12",
    "Comment": "et, rutrum eu, ultrices sit amet, risus. Donec",
    "Color": "purple"
  },
  {
    "Author": "Glenn, Keaton T.",
    "Date": "26/11/11",
    "Comment": "nibh. Aliquam ornare, libero at auctor",
    "Color": "orange"
  },
  {
    "Author": "Boyer, Bree N.",
    "Date": "11/04/12",
    "Comment": "Duis a mi fringilla mi lacinia mattis. Integer eu",
    "Color": "orange"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "et ipsum cursus",
    "Color": "red"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "Just trying some code out.",
    "Color": "Fuchsia"
  },
  {
    "Author": "Hacker, Lee T.",
    "Date": "07/01/12",
    "Comment": "Is this really going to work? NO WAY!",
    "Color": "Periwinkle"
  },
  {
    "Author": "Bruce, Hayden W.",
    "Date": "08/08/13",
    "Comment": "Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo.",
    "Color": "purple"
  },
  {
    "Author": "Washington, Amal K.",
    "Date": "25/09/11",
    "Comment": "Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum",
    "Color": "purple"
  },
  {
    "Author": "Grimes, Geraldine G.",
    "Date": "27/06/13",
    "Comment": "dolor elit, pellentesque",
    "Color": "red"
  },
  {
    "Author": "Holman, Yen G.",
    "Date": "19/06/12",
    "Comment": "Maecenas malesuada fringilla est. Mauris eu",
    "Color": "orange"
  },
  {
    "Author": "Gordon, Hayley X.",
    "Date": "15/08/12",
    "Comment": "enim nec tempus scelerisque, lorem ipsum sodales purus",
    "Color": "red"
  },
  {
    "Author": "Pickett, Rama W.",
    "Date": "13/12/12",
    "Comment": "cursus non, egestas",
    "Color": "orange"
  },
  {
    "Author": "Compton, Roanna Q.",
    "Date": "04/12/12",
    "Comment": "Donec elementum, lorem ut aliquam iaculis, lacus pede",
    "Color": "orange"
  },
  {
    "Author": "Martin, Abbot N.",
    "Date": "13/11/11",
    "Comment": "lacus vestibulum lorem, sit amet ultricies sem",
    "Color": "green"
  },
  {
    "Author": "Mccoy, Brent E.",
    "Date": "15/10/12",
    "Comment": "Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero.",
    "Color": "blue"
  },
  {
    "Author": "Gutierrez, Cameran F.",
    "Date": "07/04/12",
    "Comment": "et malesuada fames ac turpis egestas. Fusce aliquet magna",
    "Color": "green"
  },
  {
    "Author": "Fowler, Prescott V.",
    "Date": "29/06/12",
    "Comment": "ac mi eleifend egestas. Sed",
    "Color": "green"
  },
  {
    "Author": "Gardner, Willow A.",
    "Date": "27/07/12",
    "Comment": "ultrices a, auctor non,",
    "Color": "red"
  },
  {
    "Author": "Olsen, Lara I.",
    "Date": "09/02/13",
    "Comment": "interdum. Sed auctor odio a purus. Duis elementum, dui",
    "Color": "purple"
  },
  {
    "Author": "Dejesus, Lenore M.",
    "Date": "18/01/13",
    "Comment": "enim, gravida sit amet, dapibus id,",
    "Color": "purple"
  },
  {
    "Author": "Rhodes, Kylee L.",
    "Date": "23/11/12",
    "Comment": "eget mollis lectus pede et risus. Quisque",
    "Color": "blue"
  },
  {
    "Author": "Stuart, Deirdre L.",
    "Date": "23/06/13",
    "Comment": "dis parturient montes, nascetur ridiculus mus. Donec",
    "Color": "green"
  },
  {
    "Author": "Rowe, Noelani S.",
    "Date": "29/12/11",
    "Comment": "nonummy. Fusce fermentum fermentum",
    "Color": "yellow"
  },
  {
    "Author": "Sherman, Erich I.",
    "Date": "26/09/11",
    "Comment": "Sed auctor odio a purus. Duis elementum, dui quis accumsan",
    "Color": "blue"
  },
  {
    "Author": "Page, Quynn G.",
    "Date": "04/09/12",
    "Comment": "erat, in consectetuer",
    "Color": "red"
  },
  {
    "Author": "Jordan, Lila I.",
    "Date": "25/06/12",
    "Comment": "ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula",
    "Color": "red"
  },
  {
    "Author": "Ratliff, Kelsie X.",
    "Date": "11/12/12",
    "Comment": "nunc. Quisque ornare tortor",
    "Color": "green"
  },
  {
    "Author": "Franco, Jael R.",
    "Date": "21/03/12",
    "Comment": "id risus quis diam luctus lobortis. Class aptent",
    "Color": "purple"
  },
  {
    "Author": "Holden, Gillian P.",
    "Date": "25/04/12",
    "Comment": "faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec",
    "Color": "purple"
  },
  {
    "Author": "Ingram, Calvin L.",
    "Date": "18/05/13",
    "Comment": "magna tellus faucibus",
    "Color": "yellow"
  },
  {
    "Author": "Greer, Zachery A.",
    "Date": "30/07/13",
    "Comment": "vitae nibh. Donec est mauris,",
    "Color": "green"
  },
  {
    "Author": "Richards, Joelle J.",
    "Date": "18/08/12",
    "Comment": "vel nisl. Quisque",
    "Color": "yellow"
  },
  {
    "Author": "Tate, Adara H.",
    "Date": "20/04/12",
    "Comment": "arcu. Vestibulum ut eros non enim commodo hendrerit. Donec",
    "Color": "blue"
  },
  {
    "Author": "Kinney, Maggie V.",
    "Date": "06/09/13",
    "Comment": "egestas blandit. Nam nulla magna, malesuada vel, convallis",
    "Color": "blue"
  },
  {
    "Author": "Carpenter, Kareem V.",
    "Date": "11/09/13",
    "Comment": "Sed neque. Sed eget lacus. Mauris non dui nec urna",
    "Color": "red"
  },
  {
    "Author": "Welch, Katelyn W.",
    "Date": "08/03/12",
    "Comment": "Proin dolor. Nulla semper tellus id nunc interdum feugiat.",
    "Color": "yellow"
  },
  {
    "Author": "Cortez, Uriah C.",
    "Date": "29/12/12",
    "Comment": "tellus lorem eu metus. In lorem. Donec elementum,",
    "Color": "green"
  },
  {
    "Author": "Rodriguez, Carla N.",
    "Date": "31/07/13",
    "Comment": "dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a",
    "Color": "orange"
  },
  {
    "Author": "Burton, Jelani F.",
    "Date": "26/01/12",
    "Comment": "Vivamus nibh dolor, nonummy ac,",
    "Color": "blue"
  },
  {
    "Author": "Greene, Maryam N.",
    "Date": "21/09/13",
    "Comment": "Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate",
    "Color": "purple"
  },
  {
    "Author": "Miranda, Cherokee U.",
    "Date": "14/07/12",
    "Comment": "facilisis, magna tellus faucibus leo, in lobortis tellus",
    "Color": "green"
  },
  {
    "Author": "Irwin, Cathleen E.",
    "Date": "10/04/12",
    "Comment": "amet, consectetuer adipiscing elit. Etiam laoreet,",
    "Color": "orange"
  },
  {
    "Author": "Salazar, Scott E.",
    "Date": "29/08/13",
    "Comment": "non enim commodo hendrerit. Donec",
    "Color": "yellow"
  },
  {
    "Author": "Villarreal, India X.",
    "Date": "20/07/12",
    "Comment": "erat semper rutrum. Fusce",
    "Color": "red"
  },
  {
    "Author": "Christian, Indira T.",
    "Date": "25/07/12",
    "Comment": "Aenean massa. Integer",
    "Color": "blue"
  },
  {
    "Author": "Cardenas, Elliott O.",
    "Date": "15/04/13",
    "Comment": "odio. Aliquam vulputate",
    "Color": "blue"
  },
  {
    "Author": "Britt, Ebony C.",
    "Date": "11/08/12",
    "Comment": "Mauris ut quam vel sapien imperdiet",
    "Color": "green"
  },
  {
    "Author": "Beasley, Jayme C.",
    "Date": "30/10/11",
    "Comment": "Nunc ullamcorper, velit in aliquet lobortis, nisi nibh",
    "Color": "purple"
  },
  {
    "Author": "Hamilton, Warren J.",
    "Date": "31/10/12",
    "Comment": "rutrum lorem ac risus. Morbi metus. Vivamus euismod",
    "Color": "red"
  },
  {
    "Author": "Bradshaw, Ethan B.",
    "Date": "04/06/13",
    "Comment": "rhoncus. Donec est. Nunc ullamcorper, velit in",
    "Color": "yellow"
  },
  {
    "Author": "Hendricks, Tamekah X.",
    "Date": "27/01/12",
    "Comment": "dui. Fusce diam nunc,",
    "Color": "blue"
  },
  {
    "Author": "Flynn, Montana K.",
    "Date": "12/08/13",
    "Comment": "dolor sit amet,",
    "Color": "red"
  },
  {
    "Author": "Baxter, Carlos Z.",
    "Date": "04/05/12",
    "Comment": "id, libero. Donec consectetuer",
    "Color": "yellow"
  },
  {
    "Author": "Duke, Chase V.",
    "Date": "19/12/11",
    "Comment": "velit. Quisque varius.",
    "Color": "red"
  },
  {
    "Author": "Fry, Wynter U.",
    "Date": "22/10/12",
    "Comment": "mauris sit amet lorem semper auctor. Mauris vel turpis.",
    "Color": "green"
  },
  {
    "Author": "Berger, Cole T.",
    "Date": "20/03/12",
    "Comment": "magna. Lorem ipsum dolor sit amet, consectetuer adipiscing",
    "Color": "yellow"
  },
  {
    "Author": "May, Thomas T.",
    "Date": "26/10/12",
    "Comment": "Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc",
    "Color": "blue"
  },
  {
    "Author": "Franklin, Leroy L.",
    "Date": "21/09/13",
    "Comment": "non lorem vitae odio sagittis",
    "Color": "blue"
  },
  {
    "Author": "Olson, Vanna E.",
    "Date": "01/05/13",
    "Comment": "montes, nascetur ridiculus mus. Proin vel arcu eu",
    "Color": "yellow"
  },
  {
    "Author": "Avery, Michael S.",
    "Date": "12/02/12",
    "Comment": "velit justo nec ante. Maecenas mi",
    "Color": "blue"
  },
  {
    "Author": "Morrison, Theodore I.",
    "Date": "02/06/12",
    "Comment": "Pellentesque habitant morbi tristique senectus et netus",
    "Color": "red"
  },
  {
    "Author": "Schwartz, Brenda J.",
    "Date": "20/11/11",
    "Comment": "pede, malesuada vel, venenatis",
    "Color": "purple"
  },
  {
    "Author": "Powers, Sophia A.",
    "Date": "25/12/12",
    "Comment": "vel, convallis in, cursus",
    "Color": "green"
  },
  {
    "Author": "Curtis, Lev T.",
    "Date": "23/12/12",
    "Comment": "ornare, elit elit fermentum risus, at fringilla purus mauris a",
    "Color": "blue"
  },
  {
    "Author": "Atkins, Patience I.",
    "Date": "20/11/11",
    "Comment": "porttitor interdum. Sed auctor odio a purus.",
    "Color": "green"
  },
  {
    "Author": "Daugherty, Igor Z.",
    "Date": "01/02/12",
    "Comment": "lorem tristique aliquet.",
    "Color": "purple"
  },
  {
    "Author": "Brown, Remedios G.",
    "Date": "22/02/13",
    "Comment": "eget metus eu erat semper rutrum. Fusce",
    "Color": "yellow"
  },
  {
    "Author": "Blake, Mohammad V.",
    "Date": "21/06/12",
    "Comment": "erat, eget tincidunt dui augue eu tellus. Phasellus elit pede,",
    "Color": "yellow"
  },
  {
    "Author": "Harding, Nathan T.",
    "Date": "01/10/12",
    "Comment": "luctus felis purus ac tellus. Suspendisse sed dolor.",
    "Color": "purple"
  },
  {
    "Author": "Sims, Briar O.",
    "Date": "20/01/13",
    "Comment": "Morbi vehicula. Pellentesque tincidunt tempus",
    "Color": "green"
  },
  {
    "Author": "Peterson, Lance G.",
    "Date": "31/03/12",
    "Comment": "aptent taciti sociosqu ad litora torquent",
    "Color": "purple"
  },
  {
    "Author": "Bolton, Caleb P.",
    "Date": "27/09/12",
    "Comment": "congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit",
    "Color": "green"
  },
  {
    "Author": "Ferguson, Ora Y.",
    "Date": "07/02/12",
    "Comment": "mauris sapien, cursus in, hendrerit",
    "Color": "yellow"
  },
  {
    "Author": "Levy, Brynn C.",
    "Date": "21/02/12",
    "Comment": "laoreet posuere, enim nisl elementum purus,",
    "Color": "purple"
  },
  {
    "Author": "Ochoa, Aurelia W.",
    "Date": "25/11/11",
    "Comment": "interdum feugiat. Sed nec metus facilisis lorem tristique",
    "Color": "orange"
  },
  {
    "Author": "Espinoza, Buckminster T.",
    "Date": "10/10/11",
    "Comment": "non arcu. Vivamus sit amet risus. Donec egestas.",
    "Color": "red"
  },
  {
    "Author": "Fleming, Xantha M.",
    "Date": "02/07/13",
    "Comment": "amet ante. Vivamus non lorem vitae odio sagittis semper. Nam",
    "Color": "blue"
  },
  {
    "Author": "Green, Lydia K.",
    "Date": "23/05/12",
    "Comment": "magna a neque. Nullam ut nisi",
    "Color": "purple"
  },
  {
    "Author": "Lawson, Glenna X.",
    "Date": "23/01/12",
    "Comment": "molestie sodales. Mauris",
    "Color": "green"
  },
  {
    "Author": "Tyler, Giselle M.",
    "Date": "02/01/13",
    "Comment": "elit erat vitae risus. Duis a mi fringilla mi",
    "Color": "blue"
  },
  {
    "Author": "Boyle, Kasper T.",
    "Date": "18/01/13",
    "Comment": "consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam",
    "Color": "orange"
  },
  {
    "Author": "Mcneil, Bree Z.",
    "Date": "12/03/12",
    "Comment": "nibh lacinia orci,",
    "Color": "orange"
  },
  {
    "Author": "Frazier, Erich W.",
    "Date": "23/04/12",
    "Comment": "sagittis semper. Nam tempor diam dictum sapien. Aenean massa.",
    "Color": "red"
  },
  {
    "Author": "Yates, Melissa Z.",
    "Date": "26/12/11",
    "Comment": "in consectetuer ipsum nunc id enim.",
    "Color": "blue"
  },
  {
    "Author": "Chan, Isabella D.",
    "Date": "20/04/12",
    "Comment": "dictum eu, eleifend nec, malesuada ut,",
    "Color": "orange"
  },
  {
    "Author": "Mcgee, Amela H.",
    "Date": "13/12/12",
    "Comment": "eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus",
    "Color": "orange"
  },
  {
    "Author": "Berg, Kaden Z.",
    "Date": "11/03/13",
    "Comment": "rutrum lorem ac risus. Morbi metus. Vivamus euismod",
    "Color": "yellow"
  },
  {
    "Author": "Alston, Barry I.",
    "Date": "03/02/12",
    "Comment": "id risus quis diam",
    "Color": "red"
  },
  {
    "Author": "Harrell, Caesar W.",
    "Date": "23/01/12",
    "Comment": "nibh vulputate mauris sagittis placerat. Cras",
    "Color": "purple"
  },
  {
    "Author": "Salazar, Oleg J.",
    "Date": "15/11/12",
    "Comment": "nunc risus varius orci,",
    "Color": "yellow"
  },
  {
    "Author": "Flowers, Amy K.",
    "Date": "18/09/13",
    "Comment": "lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non",
    "Color": "green"
  },
  {
    "Author": "Hendricks, Petra P.",
    "Date": "29/11/11",
    "Comment": "risus a ultricies adipiscing, enim mi tempor",
    "Color": "green"
  },
  {
    "Author": "Rowland, Kasper T.",
    "Date": "27/01/12",
    "Comment": "ipsum dolor sit",
    "Color": "red"
  },
  {
    "Author": "Palmer, Troy V.",
    "Date": "27/04/12",
    "Comment": "et pede. Nunc sed orci lobortis augue",
    "Color": "green"
  },
  {
    "Author": "Foley, Jasper M.",
    "Date": "22/09/12",
    "Comment": "Vivamus euismod urna. Nullam lobortis quam",
    "Color": "yellow"
  },
  {
    "Author": "Santana, Karen O.",
    "Date": "03/05/13",
    "Comment": "scelerisque scelerisque dui. Suspendisse ac metus vitae velit",
    "Color": "yellow"
  },
  {
    "Author": "Moses, Ila T.",
    "Date": "02/11/11",
    "Comment": "tristique senectus et",
    "Color": "red"
  },
  {
    "Author": "Fowler, Gabriel A.",
    "Date": "05/06/13",
    "Comment": "ac metus vitae velit egestas lacinia. Sed congue, elit",
    "Color": "purple"
  },
  {
    "Author": "Simon, Clayton U.",
    "Date": "01/06/12",
    "Comment": "molestie arcu. Sed eu nibh vulputate mauris sagittis placerat.",
    "Color": "yellow"
  },
  {
    "Author": "Ryan, Jarrod N.",
    "Date": "06/09/12",
    "Comment": "tellus lorem eu metus.",
    "Color": "blue"
  },
  {
    "Author": "Mitchell, Cody A.",
    "Date": "21/03/13",
    "Comment": "porttitor interdum. Sed auctor",
    "Color": "purple"
  },
  {
    "Author": "Cherry, Calista U.",
    "Date": "31/12/12",
    "Comment": "ac mattis velit justo nec ante. Maecenas mi felis, adipiscing",
    "Color": "orange"
  },
  {
    "Author": "Holder, Wylie R.",
    "Date": "09/06/13",
    "Comment": "fringilla ornare placerat, orci lacus vestibulum",
    "Color": "green"
  },
  {
    "Author": "Cummings, Darryl Z.",
    "Date": "06/03/13",
    "Comment": "eu augue porttitor interdum. Sed",
    "Color": "orange"
  },
  {
    "Author": "Bennett, Dieter T.",
    "Date": "09/12/12",
    "Comment": "at, libero. Morbi accumsan laoreet ipsum.",
    "Color": "orange"
  },
  {
    "Author": "Pacheco, Clarke V.",
    "Date": "12/08/13",
    "Comment": "purus. Duis elementum, dui quis accumsan convallis, ante lectus",
    "Color": "orange"
  },
  {
    "Author": "Buchanan, Alexandra U.",
    "Date": "06/09/13",
    "Comment": "Donec egestas. Aliquam nec enim. Nunc ut",
    "Color": "purple"
  },
  {
    "Author": "Mooney, Kaye O.",
    "Date": "23/11/12",
    "Comment": "Phasellus libero mauris, aliquam eu,",
    "Color": "yellow"
  },
  {
    "Author": "Pratt, Courtney A.",
    "Date": "17/04/12",
    "Comment": "sit amet, dapibus",
    "Color": "orange"
  },
  {
    "Author": "Duncan, Ethan R.",
    "Date": "04/07/12",
    "Comment": "ipsum dolor sit",
    "Color": "blue"
  }
];




//
// All-in-one function does it all but is very rigid and tightly coupled
//

if (false) {
  var most, results = {};

  for (var i = 0; i < records.length; i++) {
    if (results[records[i].Color]) {
      results[records[i].Color]++;
    } else {
      results[records[i].Color] = 1;
    }
  }

  for (var color in results) {
    if (!most || most.total < results[color]) {
      most = {color: color, total: results[color]};
    }
  }

  console.log(most);
}

if (false) {
  var i = 0, len = records.length, most, results = {};

  for (; i < len; i++) {
    results[records[i].Color] = 1 + (results[records[i].Color] || 0);
    // or
    // results[records[i].Color] = 1 + ~~results[records[i].Color];
    // or
    // results[records[i].Color] = ++results[records[i].Color] || 1;
    // or
    // results[records[i].Color] = results[records[i].Color] ? 1 + results[records[i].Color] : 1;
  }

  for (var color in results) {
    if (!most || most.total < results[color]) {
      most = {color: color, total: results[color]};
    }
  }

  console.log(most);
}


//
// Now you want add some logic like, "only between certain dates"...
//
// Do you create new functions with some duplicated code or add argument options?
//


//
// Two seperate operations
//
// 1. Count the number of votes for each color
// 2. Find the max votes cast for any color
//
// So make them seperate functions
//

function countVotes (arr) {
  var i, result = {};

  for (i = 0; i < records.length; i++) {
    if (result[records[i].Color]) {
      result[records[i].Color]++;
    } else {
      result[records[i].Color] = 1;
    }
  }

  return result;
}

function maxVotedColor (obj) {
  var color, most;

  for (color in obj) {
    if (!most || most.total < obj[color]) {
      most = {color: color, total: obj[color]};
    }
  }

  return most;
}

if (false) {
  var result;

  result = countVotes(records);
  // result = maxVotedColor(result);

  console.log(result);

  // or, let's get crazy
  // console.log(maxVotedColor(countVotes(records)));
}


//
// Intermediate values - invalid data
//
// 1. Totals could never be more than a given number; thus ignore them
//

function withinLimit (totals, min, max) {
  for (var t in totals) {
    if (totals[t] < min || totals[t] > max) {
      delete totals[t];
    }
  }

  return totals; // totally unnecessary
}

if (false) {
  result = countVotes(records);
  // result = withinLimit(result, 0, 120);
  // result = maxVotedColor(result);

  console.log(result);
}


//
//
//

function noHacker (record) {

  return record.Author !== "Hacker, Lee T.";
}

function sumVotes (acc, item) {
  if (acc[item.Color]) {
    acc[item.Color]++;
  } else {
    acc[item.Color] = 1;
  }

  return acc;
}

if (false) {
  result = records
        // .filter(noHacker)
        .reduce(sumVotes, {});

  // result = maxVotedColor(totals);

  console.log(result);
}
