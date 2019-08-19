#!/bin/bash

# https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-envvars.html

echo AWS ENV setting: $1

export SYSTEM_ENV=$1
export AWS_DEFAULT_REGION="ap-northeast-1"
export AWS_DEFAULT_OUTPUT="json"

if [ $1 = "dev" ]; then
    export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID_DEV
    export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY_DEV
else
    export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID_PROD
    export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY_PROD
fi
