export type Test = {
    id: string;
}

export type DateType = 'free' | 'busy';

export type Friend = {
  id: string;
  email: string;
  avatar: string;
  dates: Array<{
    dateStart: string;
    dateEnd: string;
    type: DateType;
    timeRange: string;
  }>;
}
export type FriendsList = Array<Friend>;