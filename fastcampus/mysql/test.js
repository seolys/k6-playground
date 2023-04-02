// init context: 모듈을 import 한다.
import http from 'k6/http';

// init context: k6 옵션을 정의한다.
export const options = {
    // vus: 300,
    stages: [
        { duration: '10s', target: 0 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 30 },
        { duration: '10s', target: 50 },
        { duration: '10s', target: 100 },
        { duration: '10s', target: 150 },
        { duration: '10s', target: 200 },
        { duration: '10s', target: 250 },
        { duration: '10s', target: 300 },
        { duration: '10s', target: 350 },
        { duration: '10s', target: 400 },
        { duration: '10s', target: 450 },
        { duration: '10s', target: 500 },
        { duration: '20s', target: 0 },
    ]
};


export default function() {
    http.get("http://localhost:8080/posts/members/999?page=0&size=500");
}