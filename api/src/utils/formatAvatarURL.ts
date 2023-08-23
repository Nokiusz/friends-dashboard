/**
 * Formats the avatar URL for a user based on their user ID and avatar string.
 *
 * @param {string} userId - The user's unique ID.
 * @param {string} avatarString - The avatar string associated with the user.
 * @returns {string} The formatted URL for the user's avatar.
 * @example formatAvatarUrl('1234567890', 'abcdefg1234567')
 * // returns 'https://cdn.discordapp.com/avatars/1234567890/abcdefg1234567.png'
 */

export default function formatAvatarURL(
  userId: string,
  avatarString: string
): string {
  const baseUrl: string = 'https://cdn.discordapp.com/avatars/';
  const avatarUrl: string = `${baseUrl}${userId}/${avatarString}.png`;

  return avatarUrl;
}


