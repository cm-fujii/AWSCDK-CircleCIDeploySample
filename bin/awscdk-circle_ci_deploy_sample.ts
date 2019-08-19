#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AppStack } from '../lib/app-stack';
import { CircleCIUserStack } from '../lib/circleci-user-stack';

const targetEnv = process.env.SYSTEM_ENV ? process.env.SYSTEM_ENV : 'dev';

const app = new cdk.App();

new AppStack(app, `AWS-CDK-CircleCI-Deploy-Sample-App-Stack-${targetEnv}`, targetEnv);

new CircleCIUserStack(app, `AWS-CDK-CircleCI-Deploy-Sample-User-Stack-${targetEnv}`, targetEnv);
