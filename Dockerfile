FROM node:14 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build


# Use official nginx image as the base image
FROM nginx:1.21.5

COPY --from=build /usr/local/app/dist/cliente-ui /usr/share/nginx/html

EXPOSE 80
