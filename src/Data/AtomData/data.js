import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { CgMoreO } from "react-icons/cg";
import { BiHomeCircle } from "react-icons/bi";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FaTwitter from "@mui/icons-material/Twitter";




export const Days = [];
export const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let i = 1; i <= 31; i++) {
  Days.push(i);
}

const Year = [];

for (let i = 2023; i >= 1903; i--) {
  Year.push(i);
}


export {Year}

export const userData = [
  {
    id: 1,
    first_name: "Orazio",
    last_name: "Sunnex",
    email: "osunnex0@imageshack.us",
    gender: "Male",
    post_text:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    likes: 708,
    comment: 119,
    trending: 25,
        shares: 92,
    liked:false
  },
  {
    id: 2,
    first_name: "Reggie",
    last_name: "Adamiak",
    email: "radamiak1@yolasite.com",
    gender: "Female",
    post_text:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    likes: 987,
    comment: 499,
    trending: 94,
      shares: 48,
      liked:false,
  },
  {
    id: 3,
    first_name: "Farly",
    last_name: "Selly",
    email: "fselly2@google.com",
    gender: "Male",
    post_text:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    likes: 878,
    comment: 133,
    trending: 92,
      shares: 257,
      liked:false
  },
  {
    id: 4,
    first_name: "Penelopa",
    last_name: "Bumby",
    email: "pbumby3@cpanel.net",
    gender: "Female",
    post_text:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    likes: 63,
    comment: 401,
    trending: 82,
      shares: 75,
      liked:false
  },
  {
    id: 5,
    first_name: "Neal",
    last_name: "Mulliss",
    email: "nmulliss4@bbc.co.uk",
    gender: "Male",
    post_text:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    likes: 696,
    comment: 396,
    trending: 73,
      shares: 190,
      liked:false
  },
  {
    id: 6,
    first_name: "Aeriel",
    last_name: "Ottley",
    email: "aottley5@bigcartel.com",
    gender: "Female",
    post_text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    likes: 131,
    comment: 446,
    trending: 41,
      shares: 248,
      liked:false
  },
  {
    id: 7,
    first_name: "Brod",
    last_name: "Gamon",
    email: "bgamon6@zdnet.com",
    gender: "Male",
    post_text:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    likes: 223,
    comment: 45,
    trending: 73,
    shares: 256,
  },
  {
    id: 8,
    first_name: "Alanah",
    last_name: "Leggatt",
    email: "aleggatt7@scribd.com",
    gender: "Female",
    post_text:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    likes: 162,
    comment: 384,
    trending: 5,
    shares: 219,
  },
  {
    id: 9,
    first_name: "Colan",
    last_name: "De Malchar",
    email: "cdemalchar8@sciencedaily.com",
    gender: "Male",
    post_text:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    likes: 920,
    comment: 148,
    trending: 43,
    shares: 296,
  },
  {
    id: 10,
    first_name: "Eada",
    last_name: "Sibyllina",
    email: "esibyllina9@auda.org.au",
    gender: "Female",
    post_text:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    likes: 902,
    comment: 439,
    trending: 63,
    shares: 65,
  },
  {
    id: 11,
    first_name: "Emerson",
    last_name: "Hedges",
    email: "ehedgesa@discuz.net",
    gender: "Male",
    post_text:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    likes: 641,
    comment: 27,
    trending: 64,
    shares: 245,
  },
  {
    id: 12,
    first_name: "Kareem",
    last_name: "Flaubert",
    email: "kflaubertb@freewebs.com",
    gender: "Male",
    post_text:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    likes: 105,
    comment: 244,
    trending: 68,
    shares: 64,
  },
  {
    id: 13,
    first_name: "Sly",
    last_name: "Ghest",
    email: "sghestc@facebook.com",
    gender: "Male",
    post_text:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    likes: 618,
    comment: 407,
    trending: 2,
    shares: 73,
  },
  {
    id: 14,
    first_name: "Pepito",
    last_name: "Baggarley",
    email: "pbaggarleyd@privacy.gov.au",
    gender: "Non-binary",
    post_text:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    likes: 168,
    comment: 447,
    trending: 23,
    shares: 28,
  },
  {
    id: 15,
    first_name: "Stanley",
    last_name: "Baptist",
    email: "sbaptiste@skyrock.com",
    gender: "Male",
    post_text:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    likes: 519,
    comment: 241,
    trending: 51,
    shares: 67,
  },
  {
    id: 16,
    first_name: "Uri",
    last_name: "Guillotin",
    email: "uguillotinf@nih.gov",
    gender: "Non-binary",
    post_text:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    likes: 344,
    comment: 363,
    trending: 88,
    shares: 252,
  },
  {
    id: 17,
    first_name: "Yoshi",
    last_name: "Tonkin",
    email: "ytonking@nps.gov",
    gender: "Female",
    post_text:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    likes: 952,
    comment: 308,
    trending: 54,
    shares: 223,
  },
  {
    id: 18,
    first_name: "Isidora",
    last_name: "Honywill",
    email: "ihonywillh@digg.com",
    gender: "Female",
    post_text:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    likes: 572,
    comment: 136,
    trending: 79,
    shares: 213,
  },
  {
    id: 19,
    first_name: "Nicola",
    last_name: "Frounks",
    email: "nfrounksi@reference.com",
    gender: "Female",
    post_text:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    likes: 787,
    comment: 321,
    trending: 84,
    shares: 167,
  },
  {
    id: 20,
    first_name: "Hayyim",
    last_name: "McNirlan",
    email: "hmcnirlanj@home.pl",
    gender: "Male",
    post_text:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    likes: 315,
    comment: 260,
    trending: 77,
    shares: 132,
  },
  {
    id: 21,
    first_name: "Esther",
    last_name: "Cotterell",
    email: "ecotterellk@home.pl",
    gender: "Female",
    post_text:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    likes: 424,
    comment: 427,
    trending: 95,
    shares: 191,
  },
  {
    id: 22,
    first_name: "Hartley",
    last_name: "Segebrecht",
    email: "hsegebrechtl@ca.gov",
    gender: "Male",
    post_text:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    likes: 928,
    comment: 203,
    trending: 95,
    shares: 137,
  },
  {
    id: 23,
    first_name: "Barnebas",
    last_name: "Smeaton",
    email: "bsmeatonm@tamu.edu",
    gender: "Male",
    post_text:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    likes: 25,
    comment: 291,
    trending: 86,
    shares: 106,
  },
  {
    id: 24,
    first_name: "Edwina",
    last_name: "Baert",
    email: "ebaertn@stumbleupon.com",
    gender: "Female",
    post_text:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    likes: 599,
    comment: 185,
    trending: 51,
    shares: 300,
  },
  {
    id: 25,
    first_name: "Sayres",
    last_name: "Crichmer",
    email: "scrichmero@mozilla.org",
    gender: "Polygender",
    post_text:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    likes: 606,
    comment: 129,
    trending: 22,
    shares: 263,
  },
  {
    id: 26,
    first_name: "Hetty",
    last_name: "Limb",
    email: "hlimbp@edublogs.org",
    gender: "Female",
    post_text:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    likes: 886,
    comment: 494,
    trending: 87,
    shares: 245,
  },
  {
    id: 27,
    first_name: "Aidan",
    last_name: "Maroney",
    email: "amaroneyq@cyberchimps.com",
    gender: "Female",
    post_text:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    likes: 628,
    comment: 27,
    trending: 68,
    shares: 243,
  },
  {
    id: 28,
    first_name: "Birgit",
    last_name: "Barhem",
    email: "bbarhemr@npr.org",
    gender: "Female",
    post_text:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    likes: 855,
    comment: 493,
    trending: 6,
    shares: 249,
  },
  {
    id: 29,
    first_name: "Heinrick",
    last_name: "Claeskens",
    email: "hclaeskenss@squarespace.com",
    gender: "Male",
    post_text:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    likes: 77,
    comment: 225,
    trending: 18,
    shares: 17,
  },
  {
    id: 30,
    first_name: "Antons",
    last_name: "Trebbett",
    email: "atrebbettt@sciencedaily.com",
    gender: "Male",
    post_text:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    likes: 616,
    comment: 382,
    trending: 76,
    shares: 5,
  },
  {
    id: 31,
    first_name: "Hadleigh",
    last_name: "Eberdt",
    email: "heberdtu@barnesandnoble.com",
    gender: "Male",
    post_text:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    likes: 908,
    comment: 351,
    trending: 29,
    shares: 40,
  },
  {
    id: 32,
    first_name: "Niles",
    last_name: "Trimme",
    email: "ntrimmev@woothemes.com",
    gender: "Male",
    post_text:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    likes: 704,
    comment: 344,
    trending: 46,
    shares: 266,
  },
  {
    id: 33,
    first_name: "Darell",
    last_name: "Childes",
    email: "dchildesw@admin.ch",
    gender: "Female",
    post_text:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    likes: 344,
    comment: 20,
    trending: 64,
    shares: 70,
  },
  {
    id: 34,
    first_name: "Farrah",
    last_name: "Bosket",
    email: "fbosketx@washington.edu",
    gender: "Female",
    post_text:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    likes: 91,
    comment: 385,
    trending: 68,
    shares: 112,
  },
  {
    id: 35,
    first_name: "Reggie",
    last_name: "Lagne",
    email: "rlagney@sphinn.com",
    gender: "Male",
    post_text:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    likes: 510,
    comment: 159,
    trending: 70,
    shares: 155,
  },
  {
    id: 36,
    first_name: "Bradney",
    last_name: "Purdy",
    email: "bpurdyz@4shared.com",
    gender: "Male",
    post_text:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    likes: 938,
    comment: 287,
    trending: 96,
    shares: 234,
  },
  {
    id: 37,
    first_name: "Noam",
    last_name: "Hookes",
    email: "nhookes10@yahoo.com",
    gender: "Male",
    post_text:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    likes: 410,
    comment: 60,
    trending: 54,
    shares: 283,
  },
  {
    id: 38,
    first_name: "Angelle",
    last_name: "Hourihan",
    email: "ahourihan11@google.ru",
    gender: "Female",
    post_text:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    likes: 488,
    comment: 127,
    trending: 43,
    shares: 202,
  },
  {
    id: 39,
    first_name: "Everard",
    last_name: "Custy",
    email: "ecusty12@mac.com",
    gender: "Non-binary",
    post_text:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    likes: 992,
    comment: 121,
    trending: 57,
    shares: 50,
  },
  {
    id: 40,
    first_name: "Teador",
    last_name: "Tolotti",
    email: "ttolotti13@diigo.com",
    gender: "Male",
    post_text:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    likes: 987,
    comment: 203,
    trending: 50,
    shares: 28,
  },
  {
    id: 41,
    first_name: "Franklin",
    last_name: "Chaffe",
    email: "fchaffe14@diigo.com",
    gender: "Male",
    post_text:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    likes: 785,
    comment: 1,
    trending: 44,
    shares: 149,
  },
  {
    id: 42,
    first_name: "Pearline",
    last_name: "Oriel",
    email: "poriel15@soundcloud.com",
    gender: "Female",
    post_text:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    likes: 931,
    comment: 288,
    trending: 70,
    shares: 255,
  },
  {
    id: 43,
    first_name: "Basilio",
    last_name: "Mathelon",
    email: "bmathelon16@vimeo.com",
    gender: "Male",
    post_text:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    likes: 369,
    comment: 204,
    trending: 45,
    shares: 273,
  },
  {
    id: 44,
    first_name: "Tanhya",
    last_name: "Benet",
    email: "tbenet17@mapy.cz",
    gender: "Female",
    post_text:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    likes: 477,
    comment: 335,
    trending: 63,
    shares: 172,
  },
  {
    id: 45,
    first_name: "Silvio",
    last_name: "Golthorpp",
    email: "sgolthorpp18@google.co.uk",
    gender: "Male",
    post_text:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    likes: 781,
    comment: 399,
    trending: 86,
    shares: 54,
  },
  {
    id: 46,
    first_name: "Krissy",
    last_name: "Antoniewski",
    email: "kantoniewski19@e-recht24.de",
    gender: "Female",
    post_text:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    likes: 631,
    comment: 251,
    trending: 49,
    shares: 191,
  },
  {
    id: 47,
    first_name: "Egan",
    last_name: "Newport",
    email: "enewport1a@fda.gov",
    gender: "Male",
    post_text:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    likes: 555,
    comment: 359,
    trending: 27,
    shares: 21,
  },
  {
    id: 48,
    first_name: "Adolphus",
    last_name: "Bortol",
    email: "abortol1b@blinklist.com",
    gender: "Male",
    post_text:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    likes: 83,
    comment: 351,
    trending: 48,
    shares: 46,
  },
  {
    id: 49,
    first_name: "Jacquelyn",
    last_name: "Filochov",
    email: "jfilochov1c@artisteer.com",
    gender: "Female",
    post_text:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    likes: 539,
    comment: 372,
    trending: 40,
    shares: 251,
  },
  {
    id: 50,
    first_name: "Corney",
    last_name: "Stockell",
    email: "cstockell1d@businesswire.com",
    gender: "Male",
    post_text:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    likes: 306,
    comment: 56,
    trending: 75,
    shares: 52,
  },
];

export const leftSideIconData = [
    {
      icon: <BiHomeCircle />,
      name: "Home",
    },
    {
      icon: <TagIcon sx={{ fontSize: 40 }} />,
      name: "Explore",
    },
    {
      icon: <NotificationsNoneIcon sx={{ fontSize: 40 }} />,
      name: "Notifications",
    },
    {
      icon: <MailOutlineIcon />,
      name: "Messages",
    },
    {
      icon: <BookmarkBorderIcon sx={{ fontSize: 40 }} />,
      name: "Bookmarks",
    },
    {
      icon: <FaTwitter sx={{ fontSize: 40 }} />,
      name: "Twitter Blue",
    },
    {
      icon: <PermIdentityIcon sx={{ fontSize: 40 }} />,
      name: "Profile",
    },
    {
      icon: <CgMoreO />,
      name: "More",
    },
  ];
