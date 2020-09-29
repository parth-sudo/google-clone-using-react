export default { // now we can use this response as an object.
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - pokemon",
        totalResults: "769000000",
        searchTerms: "pokemon",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "071066435e62d90ac",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - pokemon",
        totalResults: "769000000",
        searchTerms: "pokemon",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "071066435e62d90ac",
      },
    ],
  },
  context: {
    title: "Google Clone",
  },
  searchInformation: {
    searchTime: 0.584656,
    formattedSearchTime: "0.58",
    totalResults: "769000000",
    formattedTotalResults: "769,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title:
        "The Official Pokémon Website | Pokemon.com | Explore the World of ...",
      htmlTitle:
        "The Official \u003cb\u003ePokémon\u003c/b\u003e Website | \u003cb\u003ePokemon\u003c/b\u003e.com | Explore the World of ...",
      link: "https://www.pokemon.com/us/",
      displayLink: "www.pokemon.com",
      snippet:
        "The official source for Pokémon news and information on the Pokémon Trading \nCard Game, apps, video games, animation, and the Pokédex.",
      htmlSnippet:
        "The official source for \u003cb\u003ePokémon\u003c/b\u003e news and information on the \u003cb\u003ePokémon\u003c/b\u003e Trading \u003cbr\u003e\nCard Game, apps, video games, animation, and the Pokédex.",
      cacheId: "aDKmtovGwR0J",
      formattedUrl: "https://www.pokemon.com/us/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003epokemon\u003c/b\u003e.com/us/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhnVT9Mxt-FC-NiMM1ALwlj0Ivij9AW-KRJ663wZhEBQ3ukkRUcbrYODE",
            width: "299",
            height: "169",
          },
        ],
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            language: "en",
          },
        ],
        cse_image: [
          {
            src:
              "https://assets.pokemon.com/assets//cms2/img/trading-card-game/_tiles/swsh035/featured-cards/swsh035-featured-cards-1-169-en.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Homepage | Pokémon Go",
      htmlTitle: "Homepage | \u003cb\u003ePokémon\u003c/b\u003e Go",
      link: "https://www.pokemongo.com/en-us/",
      displayLink: "www.pokemongo.com",
      snippet:
        "*Not actual game footage. Watch the Pokémon GO Trailer. Catch Pokémon in the \nReal World with Pokémon GO!",
      htmlSnippet:
        "*Not actual game footage. Watch the \u003cb\u003ePokémon\u003c/b\u003e GO Trailer. Catch \u003cb\u003ePokémon\u003c/b\u003e in the \u003cbr\u003e\nReal World with \u003cb\u003ePokémon\u003c/b\u003e GO!",
      cacheId: "Zd_G89dJuzsJ",
      formattedUrl: "https://www.pokemongo.com/en-us/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003epokemon\u003c/b\u003ego.com/en-us/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyrrxeJE5PZ0szs2em-i6Djr3PPE2cVmDiCSpZma3oVOcDHQ3vfbtTJzQQ",
            width: "310",
            height: "162",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.pokemongo.com/assets/images/share-image.png",
            "theme-color": "#3864ab",
            "og:type": "website",
            viewport: "width=device-width,initial-scale=1,minimal-ui",
            "og:title": "Catch Pokémon in the Real World with Pokémon GO!",
            title: "Homepage | Pokémon Go",
            "og:url": "https://www.pokemongo.com/en-us/",
            "og:description":
              "Catch Pokémon in the Real World with Pokémon GO!",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://www.pokemongo.com/assets/images/share-image.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Pokémon - Wikipedia",
      htmlTitle: "\u003cb\u003ePokémon\u003c/b\u003e - Wikipedia",
      link: "https://en.wikipedia.org/wiki/Pok%C3%A9mon",
      displayLink: "en.wikipedia.org",
      snippet:
        "Pokémon also known as Pocket Monsters in Japan, is a Japanese media \nfranchise managed by the Pokémon Company, a company founded by Nintendo,\n ...",
      htmlSnippet:
        "\u003cb\u003ePokémon\u003c/b\u003e also known as Pocket Monsters in Japan, is a Japanese media \u003cbr\u003e\nfranchise managed by the \u003cb\u003ePokémon\u003c/b\u003e Company, a company founded by Nintendo,\u003cbr\u003e\n&nbsp;...",
      cacheId: "VWc1sn0WEVMJ",
      formattedUrl: "https://en.wikipedia.org/wiki/Pokémon",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/\u003cb\u003ePokémon\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rrodC0dzAOFMUv50nizGa103HFrcpblUnLor-lCNEfn4eUcrVAJpFgO6",
            width: "370",
            height: "136",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
          },
        ],
        cse_image: [
          {
            src:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Pokémon GO",
      htmlTitle: "\u003cb\u003ePokémon\u003c/b\u003e GO",
      link: "https://pokemongolive.com/",
      displayLink: "pokemongolive.com",
      snippet:
        "Pokémon GO October—Halloween, a fashion-themed event, and more! \nSeptember 23, 2020. Updates to events: GO Battle Night, Flying Cup. September \n21 ...",
      htmlSnippet:
        "\u003cb\u003ePokémon\u003c/b\u003e GO October—Halloween, a fashion-themed event, and more! \u003cbr\u003e\nSeptember 23, 2020. Updates to events: GO Battle Night, Flying Cup. September \u003cbr\u003e\n21&nbsp;...",
      cacheId: "0jI7c5mvMPcJ",
      formattedUrl: "https://pokemongolive.com/",
      htmlFormattedUrl: "https://\u003cb\u003epokemon\u003c/b\u003egolive.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4Kbu595b0cZSnY3Z7Q0bT9Ma4cBK24GjWwPzTOfw2mK1ybtvhe3s3dDGJ",
            width: "283",
            height: "178",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#ffffff",
            "og:image": "https://pokemongolive.com/img/global/pgo_logo.png",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Pokémon GO",
            "theme-color": "#ffffff",
            "og:site_name": "Pokémon GO",
            viewport: "width=device-width,initial-scale=1,maximum-scale=1",
            "og:title": "Pokémon GO",
            "og:url": "https://pokemongolive.com/en/",
            "msapplication-tileimage": "/img/icons/ms-icon-144x144.png",
            "twitter:image":
              "https://pokemongolive.com/img/global/pgo_logo.png",
          },
        ],
        cse_image: [
          {
            src: "https://pokemongolive.com/img/global/pgo_logo.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The Official Pokémon YouTube channel",
      htmlTitle:
        "The Official \u003cb\u003ePokémon\u003c/b\u003e YouTube channel",
      link: "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
      displayLink: "www.youtube.com",
      snippet:
        "Watch Pokémon Video Game, Trading Card Game, and Animation content, along \nwith special features, and event highlights right here on the official Pokémon ...",
      htmlSnippet:
        "Watch \u003cb\u003ePokémon\u003c/b\u003e Video Game, Trading Card Game, and Animation content, along \u003cbr\u003e\nwith special features, and event highlights right here on the official \u003cb\u003ePokémon\u003c/b\u003e&nbsp;...",
      formattedUrl: "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
      htmlFormattedUrl:
        "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
      pagemap: {
        hcard: [
          {
            fn: "The Official Pokémon YouTube channel",
            url: "http://www.youtube.com/user/pokemon",
          },
        ],
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRllJhdHkmPrZbVlwuQPaRvusI5aE1Q2eywcl1joTZ1ZrN1axJcY4iwS2wi",
            width: "225",
            height: "225",
          },
        ],
        imageobject: [
          {
            width: "900",
            url:
              "https://yt3.ggpht.com/a/AATXAJz5lxOGe7EBzHT-kuA2yCCt_pLFH_QTX7L3LRgpdw=s900-c-k-c0xffffffff-no-rj-mo",
            height: "900",
          },
        ],
        person: [
          {
            name: "The Official Pokémon YouTube channel",
            url: "http://www.youtube.com/user/pokemon",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://yt3.ggpht.com/a/AATXAJz5lxOGe7EBzHT-kuA2yCCt_pLFH_QTX7L3LRgpdw=s900-c-k-c0xffffffff-no-rj-mo",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
            "twitter:app:id:googleplay": "com.google.android.youtube",
            "theme-color": "#ff0000",
            "og:image:width": "900",
            "twitter:card": "summary",
            "og:site_name": "YouTube",
            "twitter:url":
              "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
            "al:android:package": "com.google.android.youtube",
            "twitter:app:name:googleplay": "YouTube",
            title: "The Official Pokémon YouTube channel",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              "Watch Pokémon Video Game, Trading Card Game, and Animation content, along with special features, and event highlights right here on the official Pokémon YouT...",
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://yt3.ggpht.com/a/AATXAJz5lxOGe7EBzHT-kuA2yCCt_pLFH_QTX7L3LRgpdw=s900-c-k-c0xffffffff-no-rj-mo",
            "twitter:site": "@youtube",
            "og:type": "profile",
            "fb:profile_id": "Pokemon",
            "twitter:title": "The Official Pokémon YouTube channel",
            "al:ios:app_name": "YouTube",
            "og:title": "The Official Pokémon YouTube channel",
            "og:image:height": "900",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q?feature=applinks",
            "og:video:tag": "Pokémon",
            "al:android:url":
              "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q?feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:url:googleplay":
              "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              "Watch Pokémon Video Game, Trading Card Game, and Animation content, along with special features, and event highlights right here on the official Pokémon YouT...",
            "og:url":
              "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        cse_image: [
          {
            src:
              "https://yt3.ggpht.com/a/AATXAJz5lxOGe7EBzHT-kuA2yCCt_pLFH_QTX7L3LRgpdw=s900-c-k-c0xffffffff-no-rj-mo",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Official Website - Pokémon Sword and Pokémon Shield",
      htmlTitle: "Official Website - Pokémon Sword and Pokémon Shield",
      link: "https://swordshield.pokemon.com/en-us/",
      displayLink: "swordshield.pokemon.com",
      snippet:
        "Pokémon Sword and Pokémon Shield introduce the Galar region and more \nPokémon to discover!",
      htmlSnippet:
        "\u003cb\u003ePokémon\u003c/b\u003e Sword and \u003cb\u003ePokémon\u003c/b\u003e Shield introduce the Galar region and more \u003cbr\u003e\n\u003cb\u003ePokémon\u003c/b\u003e to discover!",
      cacheId: "oTCnqms138IJ",
      formattedUrl: "https://swordshield.pokemon.com/en-us/",
      htmlFormattedUrl:
        "https://swordshield.\u003cb\u003epokemon\u003c/b\u003e.com/en-us/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTJ03LMTFv6zw8VTIAKAdJxmzaRUswBZctHMErr0uhhIf5vRzhn4HMzxU",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#020307",
            "msapplication-config": "/assets/icons/browserconfig.xml",
            "og:image":
              "https://swordshield.pokemon.com/assets/icons/share_icon-fb_en-us.jpg",
            "theme-color": "#020307",
            "og:type": "website",
            "twitter:title":
              "Pokémon Sword and Pokémon Shield | Official Website",
            "og:site_name":
              "Pokémon Sword and Pokémon Shield | Official Website",
            "apple-mobile-web-app-title": "Pokemon",
            "og:title": "Pokémon Sword and Pokémon Shield | Official Website",
            "msapplication-tileimage": "/assets/icons/mstile-144x144.png",
            "og:description":
              "Pokémon Sword and Pokémon Shield introduce the Galar region and more Pokémon to discover!",
            "twitter:image":
              "https://swordshield.pokemon.com/assets/icons/share_icon-tw_en-us.jpg",
            "apple-mobile-web-app-status-bar-style": "black-translucent",
            viewport:
              "width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=1.0",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description":
              "Pokémon Sword and Pokémon Shield introduce the Galar region and more Pokémon to discover!: https://swordshield.pokemon.com/",
            "mobile-web-app-capable": "yes",
            "og:url": "https://swordshield.pokemon.com/en-us/",
          },
        ],
        cse_image: [
          {
            src:
              "https://swordshield.pokemon.com/assets/icons/share_icon-fb_en-us.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Pokémon Center Official Site",
      htmlTitle: "\u003cb\u003ePokémon\u003c/b\u003e Center Official Site",
      link: "https://www.pokemoncenter.com/",
      displayLink: "www.pokemoncenter.com",
      snippet:
        "Pokémon Center is the official site for Pokémon shopping, featuring original items \nsuch as plush, clothing, figures, Pokémon TCG trading cards, and more.",
      htmlSnippet:
        "\u003cb\u003ePokémon\u003c/b\u003e Center is the official site for \u003cb\u003ePokémon\u003c/b\u003e shopping, featuring original items \u003cbr\u003e\nsuch as plush, clothing, figures, \u003cb\u003ePokémon\u003c/b\u003e TCG trading cards, and more.",
      cacheId: "wysaLy36THIJ",
      formattedUrl: "https://www.pokemoncenter.com/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003epokemon\u003c/b\u003ecenter.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZwawMdqcrcMCLUIs1xzmZZCX95xvFXrNUWR5d4goPU6LY9wnuqJcO_k",
            width: "276",
            height: "182",
          },
        ],
        metatags: [
          {
            "next-head-count": "10",
            "og:type": "website",
            viewport: "width=device-width",
            "og:title": "Pokémon Center Official Site",
            "og:locale": "en_US",
            "og:url": "https://www.pokemoncenter.com/",
            "og:description":
              "Pokémon Center is the official site for Pokémon shopping, featuring original items such as plush, clothing, figures, Pokémon TCG trading cards, and more.",
          },
        ],
        cse_image: [
          {
            src:
              "https://www.pokemoncenter.com/site/binaries/content/gallery/bloomreach/home/explore-more/20200909_visnav_plush.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Pokémon: Let's Go! with Pikachu, Eevee",
      htmlTitle:
        "\u003cb\u003ePokémon\u003c/b\u003e: Let&#39;s Go! with Pikachu, Eevee",
      link: "http://pokemonletsgo.pokemon.com/en-us/",
      displayLink: "pokemonletsgo.pokemon.com",
      snippet:
        "The free demo will let you explore Viridian Forest to catch wild Pokémon and \nbattle Trainers with a randomly selected partner—either Pikachu or Eevee. The ...",
      htmlSnippet:
        "The free demo will let you explore Viridian Forest to catch wild \u003cb\u003ePokémon\u003c/b\u003e and \u003cbr\u003e\nbattle Trainers with a randomly selected partner—either Pikachu or Eevee. The&nbsp;...",
      cacheId: "3VG55eRnrC4J",
      formattedUrl: "pokemonletsgo.pokemon.com/en-us/",
      htmlFormattedUrl:
        "\u003cb\u003epokemon\u003c/b\u003eletsgo.\u003cb\u003epokemon\u003c/b\u003e.com/en-us/",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7K2dby3lZVRzvAFVrUuhBXtVHRXA_OZ_EvHfJoAS3_MyKOkgR9GYwDcg",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#020307",
            "og:image":
              "http://pokemonletsgo.pokemon.com/assets/icons/share_icon-fb_en-us.jpg",
            "msapplication-config": "/assets/icons/browserconfig.xml",
            "og:type": "website",
            "twitter:title":
              "Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! | Official Pokémon Site",
            "theme-color": "#020307",
            "og:site_name":
              "Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! | Official Pokémon Site",
            "og:title":
              "Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! | Official Pokémon Site",
            "apple-mobile-web-app-title": "Pokemon",
            "msapplication-tileimage": "/assets/icons/mstile-144x144.png",
            "og:description":
              "Return to the Kanto region and experience a classic Pokémon journey in a whole new way with Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee!",
            "twitter:image":
              "http://pokemonletsgo.pokemon.com/assets/icons/share_icon-tw_en-us.jpg",
            "apple-mobile-web-app-status-bar-style": "black-translucent",
            viewport:
              "width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=1.0",
            "twitter:description":
              "Return to the Kanto region and experience a classic Pokémon journey in a whole new way with Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! http://pokemonletsgo.pokemon.com/en-us/",
            "apple-mobile-web-app-capable": "yes",
            "mobile-web-app-capable": "yes",
            "og:url": "http://pokemonletsgo.pokemon.com/en-us/",
          },
        ],
        cse_image: [
          {
            src:
              "http://pokemonletsgo.pokemon.com/assets/icons/share_icon-fb_en-us.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Pokémon Presents | 6.17.20 - YouTube",
      htmlTitle:
        "\u003cb\u003ePokémon\u003c/b\u003e Presents | 6.17.20 - YouTube",
      link: "https://www.youtube.com/watch?v=WEVctuQTeaI",
      displayLink: "www.youtube.com",
      snippet:
        "Jun 17, 2020 ... Pokémon Smile: https://bit.ly/2USa8y6 ✅ Pokémon Café Mix: https://bit.ly/\n2YGzL6g ✅ New Pokémon Snap: https://bit.ly/2BdTZMs ✅ The Isle of ...",
      htmlSnippet:
        "Jun 17, 2020 \u003cb\u003e...\u003c/b\u003e \u003cb\u003ePokémon\u003c/b\u003e Smile: https://bit.ly/2USa8y6 ✅ \u003cb\u003ePokémon\u003c/b\u003e Café Mix: https://bit.ly/\u003cbr\u003e\n2YGzL6g ✅ New \u003cb\u003ePokémon\u003c/b\u003e Snap: https://bit.ly/2BdTZMs ✅ The Isle of&nbsp;...",
      formattedUrl: "https://www.youtube.com/watch?v=WEVctuQTeaI",
      htmlFormattedUrl: "https://www.youtube.com/watch?v=WEVctuQTeaI",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgCQpCZJgZgzAhQdboKxsCMIAiBogUYIG-h4D1Vpj5I777AlWnEfBsrBM",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/WEVctuQTeaI/maxresdefault.jpg",
            height: "720",
          },
        ],
        broadcastevent: [
          {
            islivebroadcast: "True",
            enddate: "2020-06-17T13:12:58+00:00",
            startdate: "2020-06-17T13:00:10+00:00",
          },
        ],
        person: [
          {
            name: "The Official Pokémon YouTube channel",
            url: "http://www.youtube.com/user/pokemon",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/WEVctuQTeaI/maxresdefault.jpg",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/watch?v=WEVctuQTeaI&feature=applinks",
            "twitter:app:id:googleplay": "com.google.android.youtube",
            "og:image:width": "1280",
            "twitter:card": "player",
            "theme-color": "#ff0000",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=WEVctuQTeaI",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/watch?v=WEVctuQTeaI&feature=applinks",
            "al:android:package": "com.google.android.youtube",
            "twitter:app:name:googleplay": "YouTube",
            title: "Pokémon Presents | 6.17.20",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=WEVctuQTeaI&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              "✅ Pokémon Smile: https://bit.ly/2USa8y6 ✅ Pokémon Café Mix: https://bit.ly/2YGzL6g ✅ New Pokémon Snap: https://bit.ly/2BdTZMs ✅ The Isle of Armor: https://bi...",
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/WEVctuQTeaI/maxresdefault.jpg",
            "twitter:player": "https://www.youtube.com/embed/WEVctuQTeaI",
            "twitter:player:height": "720",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/WEVctuQTeaI",
            "og:type": "video.other",
            "twitter:title": "Pokémon Presents | 6.17.20",
            "al:ios:app_name": "YouTube",
            "og:title": "Pokémon Presents | 6.17.20",
            "og:image:height": "720",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "https://www.youtube.com/watch?v=WEVctuQTeaI&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/WEVctuQTeaI",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=WEVctuQTeaI&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:url:googleplay":
              "https://www.youtube.com/watch?v=WEVctuQTeaI",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              "✅ Pokémon Smile: https://bit.ly/2USa8y6 ✅ Pokémon Café Mix: https://bit.ly/2YGzL6g ✅ New Pokémon Snap: https://bit.ly/2BdTZMs ✅ The Isle of Armor: https://bi...",
            "og:url": "https://www.youtube.com/watch?v=WEVctuQTeaI",
            "twitter:player:width": "1280",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/WEVctuQTeaI",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "True",
            uploaddate: "2020-06-17",
            description:
              "✅ Pokémon Smile: https://bit.ly/2USa8y6 ✅ Pokémon Café Mix: https://bit.ly/2YGzL6g ✅ New Pokémon Snap: https://bit.ly/2BdTZMs ✅ The Isle of Armor: https://bi...",
            videoid: "WEVctuQTeaI",
            url: "https://www.youtube.com/watch?v=WEVctuQTeaI",
            duration: "PT10M51S",
            unlisted: "False",
            name: "Pokémon Presents | 6.17.20",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "Gaming",
            interactioncount: "2277049",
            channelid: "UCFctpiB_Hnlk3ejWfHqSm6Q",
            datepublished: "2020-06-17",
            thumbnailurl:
              "https://i.ytimg.com/vi/WEVctuQTeaI/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/WEVctuQTeaI/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Pokémon (@Pokemon) | Twitter",
      htmlTitle:
        "\u003cb\u003ePokémon\u003c/b\u003e (@\u003cb\u003ePokemon\u003c/b\u003e) | Twitter",
      link: "https://twitter.com/pokemon?lang=en",
      displayLink: "twitter.com",
      snippet:
        "The latest Tweets from Pokémon (@Pokemon). Official Twitter account for The \nPokémon Company International. Catching 'em all since '96! Customer Service: ...",
      htmlSnippet:
        "The latest Tweets from \u003cb\u003ePokémon\u003c/b\u003e (@\u003cb\u003ePokemon\u003c/b\u003e). Official Twitter account for The \u003cbr\u003e\n\u003cb\u003ePokémon\u003c/b\u003e Company International. Catching &#39;em all since &#39;96! Customer Service:&nbsp;...",
      cacheId: "js1B1bvOt2cJ",
      formattedUrl: "https://twitter.com/pokemon?lang=en",
      htmlFormattedUrl:
        "https://twitter.com/\u003cb\u003epokemon\u003c/b\u003e?lang=en",
      pagemap: {
        cse_thumbnail: [
          {
            src:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSobPXJDZKnTITPFi8YFJ8yihpZOdChkAbbqYXQEuAkify32euqE_lVW4M",
            width: "299",
            height: "169",
          },
        ],
        xfn: [{}],
        metatags: [
          {
            "msapplication-tilecolor": "#00aced",
            "al:android:url": "twitter://user?screen_name=Pokemon",
            "al:ios:app_name": "Twitter",
            "swift-page-section": "profile",
            "al:android:package": "com.twitter.android",
            "swift-page-name": "profile",
            "msapplication-tileimage":
              "//abs.twimg.com/favicons/win8-tile-144.png",
            "al:ios:url": "twitter://user?screen_name=Pokemon",
            "al:ios:app_store_id": "333903271",
            "al:android:app_name": "Twitter",
          },
        ],
        cse_image: [
          {
            src: "https://pbs.twimg.com/media/EaSUsdjU8AAswNg.jpg",
          },
        ],
      },
    },
  ],
};
