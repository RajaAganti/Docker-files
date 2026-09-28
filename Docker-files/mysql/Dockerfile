# Dockerfile for MySQL
FROM mysql:8.0

# Labels (optional, for metadata)
LABEL maintainer="rajia" \
      description="Custom MySQL 8.0 image with initialization scripts"

# Environment variables
# NOTE: For production, pass these at runtime instead of baking them in!
ENV MYSQL_ROOT_PASSWORD=rootpassword \
    MYSQL_DATABASE=mydb \
    MYSQL_USER=myuser \
    MYSQL_PASSWORD=mypassword


# Initialization scripts (run ONLY on first startup, alphabetically)
# Supported extensions: .sh, .sql, .sql.gz
COPY ./init-scripts/ /docker-entrypoint-initdb.d/

# MySQL default port
EXPOSE 3306

# Persist data
VOLUME ["/var/lib/mysql"]

# Healthcheck so orchestrators know when MySQL is ready
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
    CMD mysqladmin ping -h 127.0.0.1 -u root -p"$MYSQL_ROOT_PASSWORD" || exit 1

# mysqld is the default CMD of the base image
CMD ["mysqld"]
