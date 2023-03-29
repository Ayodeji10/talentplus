# TalentPlus Assessment Test

The Dockerfile and .dockerignore files are already created in the project directory, in order to run this on docker, you'll need to

## 1. Clone this repository to your local machine

open terminal on your local machine and run "git clone https://github.com/Ayodeji10/talentplus.git"

## 2. Build docker image

open the cloned project in your text editor and run "docker build -t talentplus"

talentplus can be changed to any name you want for the image

## 3. Create the image container

After the image is created, run "docker run --rn --name talentplus_container -p 3000:3000 talentplus"

--rn means to delete the container once the container is stopped

--name talentplus_container is the name of the container you're creating, this can be changed to whatever name you want

-p 3000:3000 means run this app on port 3000

talentplus is simply the name of the image you want to use to create this container
