import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import { Duration } from '@aws-cdk/core';
import cdk = require('@aws-cdk/core');

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, systemEnv: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Lambda
    const sampleLambda = new lambda.Function(this, 'sample-Lambda', {
      code: lambda.Code.asset('src/lambda'),
      handler: 'app.handler',
      runtime: lambda.Runtime.NODEJS_10_X,
      functionName: `aws-cdk-circleci-deploy-Lambda-${systemEnv}`,
      timeout: Duration.seconds(3),
      environment: {
        SYSTEM_ENV: systemEnv,
      }
    });

    // API Gateway
    const api = new apigateway.RestApi(this, 'sample-api', {
      restApiName: `AWSCDK-CircleCI-Deploy-Api-${systemEnv}`
    });

    const integration = new apigateway.LambdaIntegration(sampleLambda, {
      proxy: true,
    });

    const messageResource = api.root.addResource('message');
    const idResource = messageResource.addResource('{id}');
    idResource.addMethod('GET', integration);
  }
}
