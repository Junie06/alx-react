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
    return notificationData.filter((notification) => notification.author.id === userID).map((notification) => notification.context)
}

export {normalizedData};