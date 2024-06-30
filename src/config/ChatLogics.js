export const getSender = (loggedUser, users) => {
  if (!loggedUser || !users || users.length < 2) return '';
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

export const getSenderFull = (loggedUser, users) => {
  if (!loggedUser || !users || users.length < 2) return {};
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};

export const isSameSender = (messages, m, i, userId) => {
  if (!messages || !m || i >= messages.length - 1 || !m.sender) return false;
  return (
    messages[i + 1]?.sender?._id !== m.sender?._id ||
    messages[i + 1]?.sender?._id === undefined
  ) && messages[i]?.sender?._id !== userId;
};

export const isLastMessage = (messages, i, userId) => {
  if (!messages || i !== messages.length - 1) return false;
  return (
    messages[messages.length - 1]?.sender?._id !== userId &&
    messages[messages.length - 1]?.sender?._id
  );
};

export const isSameSenderMargin = (messages, m, i, userId) => {
  if (!messages || !m || i >= messages.length - 1) return 'auto';
  if (
    messages[i + 1]?.sender?._id === m.sender?._id &&
    messages[i]?.sender?._id !== userId
  )
    return 33;
  else if (
    (messages[i + 1]?.sender?._id !== m.sender?._id &&
      messages[i]?.sender?._id !== userId) ||
    (i === messages.length - 1 && messages[i]?.sender?._id !== userId)
  )
    return 0;
  else return 'auto';
};

export const isSameUser = (messages, m, i) => {
  if (!messages || i <= 0) return false;
  return messages[i - 1]?.sender?._id === m.sender?._id;
};