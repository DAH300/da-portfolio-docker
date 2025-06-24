## Running with Docker

You can run this project in a production-like environment using Docker and Docker Compose. This setup uses Node.js version 22.13.1 (as specified in the Dockerfile) and exposes the app on port 3000.

### Build and Start the App

First, make sure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.

To build and run the app:

```bash
docker compose up --build
```

This will build the Docker image and start the `typescript-app` service. The app will be available at [http://localhost:3000](http://localhost:3000).

### Configuration

- **Node.js version:** 22.13.1 (slim)
- **Exposed port:** 3000 (mapped to your host)
- **Environment:** `NODE_ENV=production` is set by default in the container.
- **Environment variables:** No required environment variables are set by default. If you need to add any, you can uncomment the `env_file` line in `docker-compose.yml` and provide a `.env` file.

No additional configuration or external services are required for this project.
