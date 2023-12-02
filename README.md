## install all dependencies
yarn install
## build the image
docker build -t nextjs_docker:dev .
## run the image
docker run --publish 3000:3000 nextjs_docker:dev