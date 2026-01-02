# Stage 1: Build
FROM nginx:alpine AS builder

# Install curl for healthcheck
RUN apk add --no-cache curl

# Stage 2: Production
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy HTML file
COPY index.html /usr/share/nginx/html/index.html

# Copy healthcheck script
COPY --from=builder /usr/bin/curl /usr/bin/curl

# Create non-root user
RUN addgroup -g 1000 -S www-data && \
    adduser -u 1000 -S www-data -G www-data && \
    chown -R www-data:www-data /var/cache/nginx && \
    chown -R www-data:www-data /usr/share/nginx/html

# Switch to non-root user
USER www-data

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]