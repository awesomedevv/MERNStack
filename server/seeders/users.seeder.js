import { Seeder } from "mongoose-data-seed";
import { Model } from "../server/models";

const data = [
  {
    name: { first: "Beatrice", last: "Porter" },
    email: "tester@mail.com",
    password: "123123",
    headline: "Become Perfect",
    location: {
      city: "Vancouver",
      state: "BC",
    },
    position: {
      role: "CEO",
      office: "BC Children's Hospital",
    },
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    connection: {
      pending: ["8", "9"],
      accepted: ["1", "2", "3", "4", "5", "6", "7"],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C5603AQHYNxADyifJpQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=PETQ-5x3wqgmSAWATcx9VwenoYQEWlpv_5pw31yCkik",
    userID: "0",
  },
  {
    name: { first: "Lelia", last: "Hogan" },
    email: "user1@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Vancouver",
      state: "BC",
    },
    position: {
      role: "Registered Nurse",
      office: "BC Children's Hospital",
    },
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    connection: {
      pending: [],
      accepted: ["0"],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFhZeNTuSSdNg/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=Ve8YilE7Y7PEfzlXp0V-Y_w_hEE0KTiLCT4mzx3q_8I",
    userID: "1",
  },
  {
    name: { first: "Addie", last: "Tate" },
    email: "user2@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Brooklyn",
      state: "NY",
    },
    position: {
      role: "Aboriginal Patient Navigator",
      office: "Brooklyn Hospital",
    },
    bio:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    connection: {
      pending: [],
      accepted: ["0"],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQG6RFDOyJzJAA/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=_eBBrNstOZ_C6RfSYYSO068AqQrGiJsLkA2Rw9iwJlE",
    userID: "2",
  },
  {
    name: { first: "Jose", last: "Sharp" },
    email: "user3@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Vancouver",
      state: "BC",
    },
    position: {
      role: "Registered Nurse",
      office: "BC Children's Hospital",
    },
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    connection: {
      pending: [],
      accepted: ["0"],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFPIIRpQWEy0g/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=02bzziZHxZILdzmiZRiPgg0hVg6jMMtKI3iqE3WXnzg",
    userID: "3",
  },
  {
    name: { first: "Lelia", last: "Hogan" },
    email: "user4@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Vancouver",
      state: "BC",
    },
    position: {
      role: "Registered Nurse",
      office: "BC Children's Hospital",
    },
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    connection: {
      pending: [],
      accepted: ["0"],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHHy3ZHZ-Fx2w/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=v4bpu_4mHCvTKIvr8z1GgkoKcBXCDcdPqjQHpP9ekWY",
    userID: "4",
  },
  {
    name: { first: "Addie", last: "Tate" },
    email: "user5@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Brooklyn",
      state: "NY",
    },
    position: {
      role: "Aboriginal Patient Navigator",
      office: "Brooklyn Hospital",
    },
    bio:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    connection: {
      pending: [],
      accepted: ["0"],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEABbMn3fqKbw/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=t85AjXiHZexDuT0Z1mJrrZFXn0RYsgkPaWG16cmQIvg",
    userID: "5",
  },
  {
    name: { first: "Jose", last: "Sharp" },
    email: "user6@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Vancouver",
      state: "BC",
    },
    position: {
      role: "Registered Nurse",
      office: "BC Children's Hospital",
    },
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    connection: {
      pending: [],
      accepted: ["0"],
    },
    avatarUrl:
      "https://www.linkedin.com/in/andrew-dizhak-86b599173/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people%3B3uhibmAoT7imvzR3hWMfsA%3D%3D",
    userID: "6",
  },
  {
    name: { first: "Lelia", last: "Hogan" },
    email: "user7@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Vancouver",
      state: "BC",
    },
    position: {
      role: "Registered Nurse",
      office: "BC Children's Hospital",
    },
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    connection: {
      pending: [],
      accepted: ["0"],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C5603AQHIHpU_jXW-_Q/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=UX3SADw9STGSZj_neJ0sO6DfrLcEuR_QSLH-WUwE0vo",
    userID: "7",
  },
  {
    name: { first: "Addie", last: "Tate" },
    email: "user8@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Brooklyn",
      state: "NY",
    },
    position: {
      role: "Aboriginal Patient Navigator",
      office: "Brooklyn Hospital",
    },
    bio:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    connection: {
      pending: ["0"],
      accepted: [],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C5603AQE0rhPH1ZJBnw/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=V0M9aj_9wUnUgczbRgdI8nn2fuYHxMPLMaEdDf64OcA",
    userID: "8",
  },
  {
    name: { first: "Jose", last: "Sharp" },
    email: "user9@mail.com",
    password: "123123",
    headline: "",
    location: {
      city: "Vancouver",
      state: "BC",
    },
    position: {
      role: "Registered Nurse",
      office: "BC Children's Hospital",
    },
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    connection: {
      pending: ["0"],
      accepted: [],
    },
    avatarUrl:
      "https://media-exp1.licdn.com/dms/image/C5603AQGIaPHgUPbglg/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=x5pNZ9Lzd97oCtue5NgdG3ZAk0FTtntzwDLCaiyVDeU",
    userID: "9",
  },
];

class UsersSeeder extends Seeder {
  async shouldRun() {
    return Model.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Model.create(data);
  }
}

export default UsersSeeder;
