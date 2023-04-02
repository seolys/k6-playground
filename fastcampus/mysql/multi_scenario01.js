import http from 'k6/http';

export let options = {
    discardResponseBodies: false,
    scenarios: {
        first: {
            exec: 'firstExec',
            executor: 'constant-vus',
            vus: 10,
            duration: '30s',

            // executor: 'ramping-vus',
            // startVUs: 1,
            // stages: [
            //     { duration: '30s', target: 10 },
            // ],
        },
        second: {
            exec: 'secondExec',
            executor: 'constant-vus',
            startTime: '10s',
            vus: 10,
            duration: '20s',
        },
    },
};


export function firstExec() {
    http.get("http://localhost:8080/posts/members/3?page=0&size=500");
}

export function secondExec() {
    http.get("http://localhost:8080/posts/members/3?page=0&size=500");
}