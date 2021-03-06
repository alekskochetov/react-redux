export const getMessages = (channelId) => {
    return $.ajax({
        url: `api/channels/${channelId}/messages`
    })
};

export const postMessage = (message) => {
    return $.ajax({
        url: `/api/channels/${message.channel_id}/messages`,
        method: 'POST',
        data: {message}
    })
};

export const patchMessage = (message) => {
    return $.ajax({
        url: `/api/channels/${message.channelId}/messages/${message.id}`,
        method: 'PATCH',
        data: {message}
    })
};

export const deleteMessage = (message) => {
    return $.ajax({
        url: `/api/${message.channelId}/${message.id}`,
        method: 'DELETE'

    })
};
