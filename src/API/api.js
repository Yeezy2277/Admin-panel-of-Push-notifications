import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://pushall.ru/api.php',
});

export const broadcastAPI = {
     sendPush(title,text) {
        return instance.post(`?type=self&id=103764&key=86f74f1d6807e6b2b86324931f75afd1&title=${title}&text=${text}`, {title,text});
     }
}