import * as notificationData from "../../../../notifications.json";
import { schema, normalize } from 'normalizr';

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, {idAttribute: "guid"});

const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

const normalizedData = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userID) {
    const output = [];
    const notifications = normalizedData.entities.notification;
    const messages = normalizedData.entities.messages;

    for (const id in notification) {
        if (notification[id].author === userID) {
            output.push(messages[notifications[id].context]);
        }
    }
    return output;
}

export {normalizedData};