FROM nginx:alpine
COPY srchtml /usr/share/nginx/html

# ENV PRODUCTION=true

# this is really just documentation
# EXPOSE 80

# nginx defaults to this command
# CMD ["nginx", "-g", "daemon off;"]