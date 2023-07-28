#!/bin/bash
# start.sh
#
# http://hospital.dev.317hu.com/hospital-admin/
# http://admin.dev.317hu.com/bz-admin/
#


Target=$1
echo "----------------------------------"

  echo "please select your execute env:"
  select input in  dev  uat  master  withNode  Exit;
  do
    break
  done

  echo "You have selected $input"
  sleep 1;
  if [ $input == "Exit" ];then
    exit;
  elif [ $input == "withNode" ]
    then
    echo "run start1 at $input..."
    ./node_modules/.bin/cross-env VERSION_ENV="$input" RUN_ENV=start NODE_ENV=development concurrently "max dev"  "nodemon ./server/server.js"
  else 
    echo "run start2 at $input..."
    ./node_modules/.bin/cross-env VERSION_ENV="$input" RUN_ENV=start max dev  
  fi

  # env
  # export VERSION_ENV=dev-local

fi


