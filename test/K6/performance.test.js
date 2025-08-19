import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 10},
        { duration: '1m', target: 50},
        { duration: '2m', target: 100},
        { duration: '5s', target: 0}
    ],
    thresholds: {
        http_req_duration: ['p(90)<150', 'p(95)<300', 'max<800'],
        http_req_failed: ['rate<0.005']
    }
};


export default function() {
  const url = 'http://localhost:3000/index.html';

  const params = {
    headers: {
        'Content-Type': 'application/json',
    },
  };

  const res = http.get(url, params);

  check(res, {
    'Validar que o Status é 200': (r) => r.status === 200
  })
  sleep(1);
}
