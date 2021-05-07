docker run --name gofinances-pgsql \
  -e POSTGRESQL_PASSWORD=gofinances \
  -e POSTGRESQL_USERNAME=postgres \
  -e POSTGRESQL_DATABASE=gofinances \
  -p 45432:5432 \
  -d bitnami/postgresql:latest
