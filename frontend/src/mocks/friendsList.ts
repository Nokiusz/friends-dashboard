import { FriendsList } from "@/types";
import formatAvatarURL from "@/utils/formatAvatarURL";

const mockUsers = [{
  id: '388775551789301760',
  email: 'aaa@gmail.com',
  avatar: '5a4569347472d6ffff0c441d886e6017',
},
{
  id: '403627960848089098',
  email: 'bbb@gmail.com ',
  avatar: '5ec766d314ce9b961406d42dd2b3883d',
},
{
  id: '87143215848787968',
  email: 'ccc@gmail.com ',
  avatar: '465545198c255ef768e666e0d64837a1',
}
];

const mockUsersWithProperAvatar = mockUsers.map(user => ({
  ...user,
  avatar: formatAvatarURL(user.id, user.avatar),
}));

const friendlist: FriendsList = [
  {
    ...mockUsersWithProperAvatar[0],
    dates: [
      {
        dateStart: '2023-01-01',
        dateEnd: '2023-01-03',
        type: 'busy',
        timeRange: '10:00 - 12:00',
      },
      {
        dateStart: '2023-01-06',
        dateEnd: '2023-01-09',
        type: 'free',
        timeRange: 'all day',
      },
    ],
  },
  {
    ...mockUsersWithProperAvatar[1], 
    dates: [
      {
        dateStart: '2023-01-01',
        dateEnd: '2023-01-02',
        type: 'free',
        timeRange: '10:00 - 12:00',
      },
      {
        dateStart: '2023-01-05',
        dateEnd: '2023-01-05',
        type: 'free',
        timeRange: 'all day',
      },
      {
        dateStart: '2023-01-04',
        dateEnd: '2023-01-05',
        type: 'free',
        timeRange: 'all day',
      },
    ],
  },
  {
    ...mockUsersWithProperAvatar[2], 
    dates: [
      {
        dateStart: '2023-01-11',
        dateEnd: '2023-01-12',
        type: 'free',
        timeRange: '10:00 - 12:00',
      },
      {
        dateStart: '2023-01-05',
        dateEnd: '2023-01-15',
        type: 'busy',
        timeRange: 'all day',
      },
      {
        dateStart: '2023-01-04',
        dateEnd: '2023-01-05',
        type: 'free',
        timeRange: 'all day',
      },
    ],
  },
];


export default friendlist;