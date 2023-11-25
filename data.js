//Data used to render notifications on ui

const john = {
  username: "John Doe",
  profilePic: "image-chess.webp",
  posts: [
    "My first tournament today!",
    "5 end-game strategies to increase your win rate",
  ],
  groups: ["Chess Club"],
};

const mark = {
  username: "Mark Webber",
  profilePic: "avatar-mark-webber.webp",
  time: "1m ago",
  activity: "reacted to your recent post",
  status: "unread",
  type: "post",
  post: john.posts[0],
};

const angela = {
  username: "Angela Gray",
  profilePic: "avatar-angela-gray.webp",
  time: "5m ago",
  activity: "followed you",
  status: "unread",
  type: "followed",
};

const jacob = {
  username: "GrayJacob Thompson",
  profilePic: "avatar-jacob-thompson.webp",
  time: "1 day ago",
  activity: "has joined your group",
  status: "unread",
  type: "group",
  group: john.groups[0],
};

const ricky = {
  username: "Rizky Hasanuddin",
  profilePic: "avatar-rizky-hasanuddin.webp",
  time: "5 days ago",
  activity: "sent you a private message",
  status: "read",
  type: "message",
  message:
    "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and Im already having lots of fun and improving my game.",
};

const kimberly = {
  username: "Kimberly Smith",
  profilePic: "avatar-kimberly-smith.webp",
  time: "1 week ago",
  activity: "commented on your picture",
  status: "read",
  type: "comment",
  pic: john.profilePic,
};

const nathan = {
  username: "Nathan Peterson",
  profilePic: "avatar-nathan-peterson.webp",
  time: "2 weeks ago",
  activity: "reacted to your recent post",
  status: "read",
  type: "post",
  post: john.posts[1],
  group: john.groups[0],
};

const anna = {
  username: "Anna Kin",
  profilePic: "avatar-anna-kim.webp",
  time: "2 weeks ago",
  activity: "left the group",
  status: "read",
  type: "group",
  group: john.groups[0],
};

export const friends = [mark, angela, jacob, ricky, kimberly, nathan, anna];
