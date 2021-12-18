import axios from "axios";

interface Model {
    Context: string;
    [key: string]: string;
}

export default function contactApi (data: Model) {
    console.log(data);
    axios
        .post("https://jsonplaceholder.typicode.com/posts", {})
        .then(response => {

        })
        .catch(error => {
            
        })
} 