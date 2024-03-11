export interface FeedPost {
  id: number;
  user: {
    avatar: string;
    username: string;
    nickname: string;
  };
  data: {
    text: string;
    date: string;
    image?: string;
    meta: {
      likes: number;
      comments: number;
      shares: number;
    };
  };
}

export const feedPosts = [
  {
    id: 1,
    user: {
      avatar:
        "https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/298230673_177774558084891_8568034100933174852_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSW6aYcC76NtFEJCPnjsgeeEDehINj1ZX5ySFHj0bzrFA&oe=65F8492F&_nc_sid=e6ed6c&_nc_cat=104",
      username: "brunocrisa",
      nickname: "Brunaldo",
    },
    data: {
      text: "Hello World",
      date: "2021-01-01T00:00:00Z",
      meta: {
        likes: 10,
        comments: 5,
        shares: 100,
      },
    },
  },
  {
    id: 2,
    user: {
      avatar:
        "https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/299540889_368915478600445_5306280459266149637_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ7OR2u6fi-UkGf9dC2rL7bFr0Tidspzma4OT8gXamiow&oe=65F83D6E&_nc_sid=e6ed6c&_nc_cat=108",
      username: "maurocrisa",
      nickname: "Maurito",
    },
    data: {
      text: "Good morning!",
      image:
        "https://cdn.akamai.steamstatic.com/half-life.com/images/alyx/halflife_alyx_11a.jpg",
      date: "2021-01-02T08:00:00Z",
      meta: {
        likes: 15,
        comments: 8,
        shares: 50,
      },
    },
  },
  {
    id: 3,
    user: {
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQGL0Droy7YoJA/profile-displayphoto-shrink_800_800/0/1709070027812?e=1715817600&v=beta&t=JhzB9iY_yeAaFQnwFiMNQG6DDtkWw66Nm_R2wRlm_ao",
        username: "blopez",
      nickname: "Benjamín Sánchez López",
    },
    data: {
      text: "What a beautiful day!",
      date: "2021-01-03T12:00:00Z",
      meta: {
        likes: 20,
        comments: 3,
        shares: 70,
      },
    },
  },
  {
    id: 4,
    user: {
      avatar:
        "https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/370353876_1060808461947797_7272974061439387590_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRukPl5tOuSyZLLZgxw8EUNIPEvQ2aYMp4OwrKf9pbI-w&oe=65F81A6F&_nc_sid=e6ed6c&_nc_cat=103",
      username: "on6o",
      nickname: "Gastón",
    },
    data: {
      text: "Feeling excited!",
      date: "2021-01-04T16:00:00Z",
      meta: {
        likes: 25,
        comments: 10,
        shares: 80,
      },
    },
  },
  {
    id: 5,
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1001203220465713153/wjZyLxck_400x400.jpg",
      username: "Alan Duz",
      nickname: "alandiz",
    },
    data: {
      text: "What a desire to lose in Call of Duty.",
      date: "2021-01-05T20:00:00Z",
      meta: {
        likes: 5,
        comments: 2,
        shares: 2,
      },
    },
  },
  {
    id: 6,
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1660132954729861123/SmgWpxG4_400x400.jpg",
      username: "francocirulli95",
      nickname: "Cachi",
    },
    data: {
      text: "Happy ATH $btc",
      date: "2021-01-05T20:00:00Z",
      image: "https://media2.giphy.com/media/8Iv5lqKwKsZ2g/giphy.gif?cid=6c09b952m6udcjg3sk4m3kgz9k7uoowzqzft0nq55q05jhm9&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      meta: {
        likes: 30,
        comments: 15,
        shares: 90,
      },
    },
  },
  {
    id: 7,
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1622817016082989059/Xf0lsSOT_400x400.jpg",
      username: "houtwolf",
      nickname: "Сука Блять",
    },
    data: {
      text: "Boring",
      date: "2021-01-05T20:00:00Z",
      meta: {
        likes: 30,
        comments: 15,
        shares: 90,
      },
    },
  },
  {
    id: 8,
    user: {
      avatar:
        "https://pbs.twimg.com/profile_images/1508529661642428430/Pqv-SSQO_400x400.jpg",
      username: "tomburrieza",
      nickname: "tometo.eth",
    },
    data: {
      text: "The off is officially back on the stock market.",
      date: "2021-01-05T20:00:00Z",
      meta: {
        likes: 30,
        comments: 15,
        shares: 90,
      },
    },
  },
];
