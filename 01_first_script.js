import http from 'k6/http';
import { sleep } from 'k6';

// k6 run 01_first_script.js
export default function () {
    http.get('https://test.k6.io');
    // http.get('https://www.naver.com');
    sleep(1);
}