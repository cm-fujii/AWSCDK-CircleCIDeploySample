#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwscdkCircleCiDeploySampleStack } from '../lib/awscdk-circle_ci_deploy_sample-stack';

const app = new cdk.App();
new AwscdkCircleCiDeploySampleStack(app, 'AwscdkCircleCiDeploySampleStack');
