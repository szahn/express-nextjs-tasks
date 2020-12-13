# Node API

Test the Echo endpoint:

```bash
curl -H "Content-Type: application/json" --request POST --data "{\"message\":\"Hello, $(whoami)\"}" http://localhost:3000/echo
```

Test a secure API endpoint with a JWT token:

```bash
curl -H "Authorization: Bearer $(node -r dotenv/config src/generateJwt.js)" localhost:3000/api/task
```