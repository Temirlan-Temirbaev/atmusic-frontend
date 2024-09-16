
export interface User {
  id: number;
  nickname: string;
  mail: string;
  avatar?: string;
  // songs: Song[];
  friends: User[];
  refresh_token: string;
  // albums: Album[];
  // sent_friend_requests: FriendRequest[];
  // received_friend_requests: FriendRequest[];
}
