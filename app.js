import axios from "axios";

async function getdata(user_id) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/" + user_id);
    const repost = await axios.get("https://jsonplaceholder.typicode.com/posts?id=" + user_id);
    await console.log(response.data);
    await console.log(repost.data);
}

export default getdata;